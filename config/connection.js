const mysql = require("mysql");
let connection;

if (process.env.JAWSDN_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "Calvin16",
      database: "burger_db"
  });
};

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// connection => ORM
module.exports = connection