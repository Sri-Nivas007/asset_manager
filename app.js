const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json()); // Replace bodyParser.json() with express.json()
app.use(cors());
const pool = require("./config/db");

const userRouter = require("./router/userrouter");
require("dotenv").config();

const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.static(path.join(__dirname, "public")));
app.use("/utils", express.static(path.join(__dirname, "utils")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(userRouter);
app.get("/", (req, res) => {
    res.render("login");
});
// Example route handler
app.get("/example", (req, res) => {
    res.render("example_route", { title: "Example Route" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
