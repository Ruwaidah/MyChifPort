exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("images")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("images").insert([
        { id: 1, image: "rowValue1" },
        { id: 2, image: "rowValue2" },
        { id: 3, image: "rowValue3" }
      ]);
    });
};
