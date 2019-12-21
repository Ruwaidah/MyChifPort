exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .string("username", 100)
      .notNullable()
      .unique();
    tbl.string("password", 100).notNullable();
    tbl
      .string("email", 100)
      .notNullable()
      .unique();
    tbl.string("city", 100);
    tbl.string("state", 100);
    tbl.integer("phone", 100).unique();
    tbl.string("address", 100);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
