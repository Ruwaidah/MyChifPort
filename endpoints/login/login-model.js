const db = require("../../database/db-config.js");

module.exports = {
  findUser,
  findById
};

function findUser(username) {
  console.log(username);
  return db("users")
    .where({ username })
    .first();
}

function findById(ids) {
  console.log(ids);
  return db("users")
    .where({ id: ids })
    .first();
}
