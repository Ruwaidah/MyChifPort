const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users").then(function() {
    return knex("users").insert([
      {
        firstname: "test1",
        lastname: "test1",
        username: "test1",
        password: bcrypt.hashSync("test1", 12),
        email: "test1@gmail.com",
        phone: 11,
        city: "houston",
        state: "texas",
        address: "test1",
        zipcode: "11"
      },
      {
        firstname: "test2",
        lastname: "test2",
        username: "test2",
        password: bcrypt.hashSync("test2", 12),
        email: "test2@gmail.com",
        phone: 1212,
        city: "houston",
        state: "texas",
        address: "test2",
        zipcode: "1212"
      },
      {
        firstname: "test3",
        lastname: "test3",
        username: "test3",
        password: bcrypt.hashSync("test3", 12),
        email: "test3@gmail.com",
        phone: 123123,
        city: "houston",
        state: "texas",
        address: "test3",
        zipcode: "123123"
      }
    ]);
  });
};
