const express = require("express");
const router = express.Router();
const Users = require("./register-model.js");

router.post("/", (req, res) => {
  if (
    req.body.username &&
    req.body.email &&
    req.body.password &&
    req.body.firstname &&
    req.body.lastname
  ) {
    Users.findUser(req.body).then(user => {
      if (!user) {
        Users.addUSer(req.body).then(ids => {
          res
            .status(200)
            .json({
              message: "register Completed"
            })
            .catch(error => {
              message: "error adding new user";
            });
        });
      } else {
        res.status(300).json({
          message: "user is already exist"
        });
      }
    });
  } else {
    res.status(404).json({
      message: "please fill out all the requirement"
    });
  }
});

module.exports = router;
