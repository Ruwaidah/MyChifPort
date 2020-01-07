const express = require("express");
const server = express();
const middleWare = require("./setUpMiddleWare.js");
const routers = require("./routers");

middleWare;
middleWare(server);

// Routers;
routers(server);

module.exports = server;
