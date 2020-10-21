const { response } = require("express");
const express = require("express");
const burger = require("../models/burgers");
const router = express.Router();
const burgers = require("../models/burgers");

router.get("/", (request, response) => {
    burgers.selectAll((data) => {
        const allBurgerInfo = {
            burgers: data
        };

        response.render("index", allBurgerInfo);
    });
});

router.put("/api/burgers/:id", (request, response) => {
    const condition = { id: request.params.id };
    const value = request.body.devoured;

    burgers.updateOne(condition, value, (result) => {
        if (result.changedRows === 0) {
            return response.status(404).end();
        }
        response.status(200).end();
    });
});

router.post("/api/burgers", (request, response) => {
    const burgerName = request.body.name;

    burgers.insertOne(burgerName, (result) => {
        console.log("your burger was added!");
        response.status(200).end();
    });
});

router.delete("/api/burgers/:id", (request, response) => {
    const condition = { id: request.params.id };
    burger.deleteOne(condition, (result) => {
        if (result.affectedRows === 0) {
            return response.status(404).end();
        }
        response.status(200).end();
    });
});

module.exports = router;