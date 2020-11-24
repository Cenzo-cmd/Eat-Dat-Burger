const { urlencoded } = require("express");
const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);
//server listening
app.listen(PORT, () => {
    console.log(`Server is live @ http://localhost:${PORT}`);
});