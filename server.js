const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.set(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Calvin16",
    database: "burger_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
})

app.get("/", function(req, res) {
    connection.query("SELECT * FROM tasks;", function(err, data) {
        if (err) throw err;
        
    })
})