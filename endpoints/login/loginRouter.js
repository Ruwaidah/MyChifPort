const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("./login-model.js");

// LogIn EndPoint
router.post("/", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    Users.findUser(username)
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({
              token,
              user: {
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                city: user.city,
                state: user.state,
                phone: user.phone,
                email: user.email,
                address: user.address,
                zipcode: user.zipcode
              }
            });
          } else {
            res.status(400).json({
              message: "username or password is incorrect!"
            });
          }
        } else {
          res.status(400).json({
            message: "username or password is incorrect!"
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "error getting the user"
        });
      });
  } else {
    res.status(404).json({
      message: "Please Provide username and password !"
    });
  }
});

function generateToken(user) {
  const payload = {
    username: user.username
  };

  const secret = process.env.JWT_SECRET || "is it secret, is it safe?";

  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = router;
