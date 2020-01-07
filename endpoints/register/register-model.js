const db = require("../../database/db-config.js");
const bcrypt = require("bcryptjs");

module.exports = {
  addUSer,
  findUser
};

function addUSer(user) {
  user.password = bcrypt.hashSync(user.password);
  return db("users").insert(user, "id");
}

function findUser(user) {
  console.log(user);
  return db("users")
    .where({ username: user.username, email: user.email })
    .first();
}
