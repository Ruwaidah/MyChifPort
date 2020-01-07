exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("meal_type")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("meal_type").insert([
        { id: 1, mealtype: "breakfast" },
        { id: 2, mealtype: "lunch" },
        { id: 3, mealtype: "dinner" },
        { id: 4, mealtype: "snack" },
        { id: 5, mealtype: "dessert" }
      ]);
    });
};
