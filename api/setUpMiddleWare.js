const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(express.static("uploads"));
  server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }
    next();
  });
};
