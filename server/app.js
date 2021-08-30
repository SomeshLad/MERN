const express = require("express");
const bodyParser = require("body-parser");
const mongoConnect = require("./util/database").mongoConnect;
const applicationRoutes = require("./routes/applicationRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(applicationRoutes);
app.use((req, res, next) => {
    res.render("404.ejs");
});

mongoConnect(() => {
    app.listen(3000);
});