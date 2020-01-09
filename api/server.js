const express = require("express");
const server = express();
const middleWare = require("./setUpMiddleWare.js");
const routers = require("./routers");

middleWare;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"),
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

  // if (req.method === "OPTIONS") {
  //   req.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  //   return res.status(200).json({});
  // }
  next();
});
middleWare(server);

// Routers;
routers(server);

module.exports = server;
