const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          firstname: "rowValue1",
          lastname: "rowValue1",
          username: "rowValue1",
          password: bcrypt.hashSync("23", 12),
          email: "ruwad1211idha@gmail.com",
          phone: 1234,
          city: "houston",
          state: "texas",
          address: "216319bkjsbckjdsbckds",
          zipcode: "123"
        },
        {
          firstname: "rowValue1",
          lastname: "rowValue1",
          username: "rowValue2",
          password: bcrypt.hashSync("23", 12),
          email: "ruwadi1212d21ha@gmail.com",
          phone: 12345,
          city: "houston",
          state: "texas",
          address: "216319bkjsbckjdsbckds",
          zipcode: "123"
        },
        {
          firstname: "rowValue1",
          lastname: "rowValue1",
          username: "rowValue3",
          password: bcrypt.hashSync("23", 12),
          email: "ruw231231a@gmail.com",
          phone: 123213,
          city: "houston",
          state: "texas",
          address: "216319bkjsbckjdsbckds",
          zipcode: "123"
        }
      ]);
    });
};
