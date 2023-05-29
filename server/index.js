const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const stableRoommateProblem = require("./stable-roomate-problem");
const preferenceManipulation = require("./preferences_manipulation");

//middleware
app.use(cors());
app.use(express.json());

// ROUTES

const namesAll = [
  { student_id: 1, name: "MARIA" },
  { student_id: 2, name: "SOFIA" },
  { student_id: 3, name: "KATERINA" },
  { student_id: 4, name: "ARIS" },
  { student_id: 5, name: "CHRIS" },
  { student_id: 6, name: "STEFANOS" },
];

app.get("/matches", async (req, res) => {
  try {
    // Get names from db
    const names = await pool.query("SELECT student_id, name FROM students");
    const namesArr = names.rows;

    // Get pairs from alg
    const preferences = preferenceManipulation();
    const pairs = stableRoommateProblem(preferences);

    const pairName = pairs.map((pair) => {
      const [studentId1, studentId2] = pair;
      const name1 = namesArr.find(
        (name) => name.student_id === parseInt(studentId1)
      ).name;
      const name2 = namesArr.find(
        (name) => name.student_id === parseInt(studentId2)
      ).name;
      return [name1, name2];
    });

    console.log(pairName);

    res.json({ pairName });
  } catch (error) {
    res.json({ pairName: [] });
  }
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
