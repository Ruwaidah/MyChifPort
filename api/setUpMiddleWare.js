const express = require("express");
const helmet = require("helmet");
const fileupload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");

module.exports = server => {
  server.use(
    fileupload({
      useTempFiles: true
    })
  );
  server.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
};
