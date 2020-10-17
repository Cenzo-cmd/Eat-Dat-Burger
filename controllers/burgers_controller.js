const { response } = require("express");
const express = require("express");
const router = express.Router();
const burgers = require("../models/burgers");

router.get("/", (request, response) => {
    burgers.selectAll((data) => {

        const allBurgerInfo = {
            burgers: data
        };
        console.log(allBurgerInfo);

        response.render("index", allBurgerInfo);

    });
});

router.put("/devoured/:id", (request, response) => {
    condition = { id: request.params.id };

    burgers.updateOne(condition, (result) => {
        response.status(200).end();
    });

})


module.exports = router;