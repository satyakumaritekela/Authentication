const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "35.225.224.91",
  user: "satya",
  password: "satya123",
  database: "db_assignment_2",
  multipleStatements: true,
});

connection.connect((err) => {
  if (!err) {
    console.log("Database is connected ...");
  } else {
    console.log("Error connecting database ...");
  }
});

module.exports = connection;
