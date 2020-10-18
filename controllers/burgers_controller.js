const { response } = require("express");
const express = require("express");
const router = express.Router();
const burgers = require("../models/burgers");

router.get("/", (request, response) => {
    burgers.selectAll((data) => {

        const allBurgerInfo = {
            burgers: data
        };
        // console.log(allBurgerInfo);

        response.render("index", allBurgerInfo);

    });
});

router.put("/api/burgers/:id", (request, response) => {
    condition = { id: request.params.id };

    burgers.updateOne(condition, (result) => {
        response.status(200).end();
    });
});

router.post("/api/burgers", (request, response) => {
    console.log('request bodyyyyy', request.body.name);
    const burgerName = request.body.name;


    burgers.insertOne(burgerName, (result) => {
        console.log("your burger was added!", result);
        response.status(200).end();
    })
})


module.exports = router;