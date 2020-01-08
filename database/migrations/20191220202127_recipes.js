exports.up = function(knex) {
  return knex.schema

    .createTable("meal_type", tbl => {
      tbl.increments();
      tbl.string("mealtype", 100).notNullable();
    })
    .createTable("images", tbl => {
      tbl.increments();
      tbl.string("image", 255);
    })

    .createTable("recipes", tbl => {
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
      tbl
        .integer("meal_type_id")
        // .unsigned()
        .notNullable()
        .references("id")
        .inTable("meal_type");
      tbl
        .integer("image_id")
        .unsigned()
        .references("id")
        .inTable("images");
      // .onUpdate("CASCADE")
      // .onDelete("RESTRICT");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("ing_inst")
    .dropTableIfExists("recipes")
    .dropTableIfExists("images")
    .dropTableIfExists("meal_type")
    .dropTableIfExists("users");
};
