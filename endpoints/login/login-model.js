const db = require("../../database/db-config.js");

module.exports = {
  findUser,
  findById
};

function findUser(username) {
  return db("users")
    .where({ username })
    .first();
}

function findById(id) {
  console.log(id);
  return db("users")
    .where({ id: id })
    .first();
}
