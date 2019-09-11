const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set(express.json());

//===========================================//

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//===========================================//

const routes = require("./controllers/burgers_controller")

app.use(routes)

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});


