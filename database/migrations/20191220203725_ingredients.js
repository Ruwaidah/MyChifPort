exports.up = function(knex) {
  return knex.schema.createTable("ing_inst", tbl => {
    tbl.increments();
    tbl.text("ingredients", 255).notNullable();
    tbl.text("instructions", 255).notNullable();
    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ing_inst");
};
