const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.set(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));


const connection = require("./config/connection")

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
})

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers", function(err, data) {
        if (err) {
            return res.status(500).end();
        };
        res.render("index", {food: data});
    });
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});