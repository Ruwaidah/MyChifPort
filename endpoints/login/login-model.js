const db = require("../../database/db-config.js");

module.exports = {
  findUser
};

function findUser(username) {
  return db("users")
    .where({ username })
    .first();
}
