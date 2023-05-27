const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const user = require("./route/user.route");
const bike = require("./route/bike.route");

const app = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/", user);
app.use("/bike", bike);

module.exports = app;
