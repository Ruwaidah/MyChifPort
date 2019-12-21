exports.up = function(knex) {
  return knex.schema.createTable("recipes", tbl => {
    tbl.increments();
    tbl.string("recipe_name", 100).notNullable();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ing_inst").dropTableIfExists("recipes");
};
