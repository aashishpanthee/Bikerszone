const express = require("express");
const http = require("http");
const port = 8000;
const app = require("./app");
const { sequelize } = require("./models");
const server = http.createServer(app);
server.listen(port, (req, res) => {
  console.log(`Server listening at port http://localhost:${port}`);
});
// sequelize
//   .sync({ force: true })
//   .then((result) => {
//     console.log("migration successful");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
