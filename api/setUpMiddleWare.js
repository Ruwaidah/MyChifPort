const express = require("express");
const helmet = require("helmet");
const fileupload = require("express-fileupload");
const cors = require("cors");

module.exports = server => {
  server.use(
    fileupload({
      useTempFiles: true
    })
  );
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
};
