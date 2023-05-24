const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "7991",
  host: "localhost",
  post: 5432,
  database: "roomies",
});

module.exports = pool;
