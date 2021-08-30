const express = require("express");
const bodyParser = require("body-parser");
const mongoConnect = require("./util/database").mongoConnect;
const applicationRoutes = require("./routes/applicationRoutes");
const cors = require("cors");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(applicationRoutes);
app.use((req, res, next) => {
    res.render("404.ejs");
});

mongoConnect(() => {
    app.listen(8000);
});