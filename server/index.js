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

// LOGIN

app.post("/login", async (req, res) => {
  //const { email, password } = { email: "test@test.com", password: "Test!1234" };
  const { email, password } = req.body;

  try {
    const user = await pool.query(
      "SELECT * FROM students WHERE email = $1 AND password = $2",
      [email, password]
    );
    console.log(email, password);
    res.json(user.rows[0]);
  } catch (error) {
    res.json({});
    console.log(error.message);
  }
});

// GET MATCHES
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
