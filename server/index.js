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
    const preferences = preferenceManipulation();
    const pairs = { pairs: stableRoommateProblem(preferences) };
    //console.log(pairs.pairs[0][1]);
    pairs.pairs.forEach((pair) => {
      // *************************************** FIX ME *****************************************************

      const pairsName = pair.forEach((studentIdToFind) => {
        console.log(studentIdToFind);
        for (let i = 0; i < namesAll.length; i++) {
          if (namesAll[i].student_id === studentIdToFind) {
            studentName[0][i] = namesAll[i].name;
            break;
          }
        }
      });
      console.log(pairsName);
    });
    res.json(pairs);
  } catch (error) {
    res.json({ pairs: [] });
  }
});

// app.get("/names", async (req, res) => {
//   try {
//     const names = await pool.query("SELECT student_id, name FROM students");
//     const namesAll = names.rows;
//     console.log(namesAll);
//     res.json(namesAll);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

app.listen(5000, () => {
  console.log("server started on port 5000");
});
