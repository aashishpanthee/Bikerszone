const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require("./models")
const user = require("./route/user.route")

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.use('/',user)

module.exports=app;