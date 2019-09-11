const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        const hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured], 
    function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//check the API
router.get("/api/burgers", function(req, res) {
    burger.all(function(data) {
        res.json(data);
    });
});

// models/burger.js <= controller => server
module.exports = router;