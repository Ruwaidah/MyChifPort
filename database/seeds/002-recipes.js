exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Thai Mango Coconut Pudding", user_id: 1 },
        { recipe_name: "Healthy Turkey Tacos", user_id: 1 },
        { recipe_name: "Healthy Dark Chocolate Milkshake", user_id: 2 }
      ]);
    });
};
