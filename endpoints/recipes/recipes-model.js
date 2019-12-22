const db = require("../../database/db-config.js");

module.exports = {
  getAllRecipes,
  addRecipe,
  addIngAndInst,
  addAllRecipes,
  recipeById,
  findIngAndInst,
  findRecipe,
  deleteIngAndInst,
  deleteRecipe,
  updateIngAndInst,
  updateRecipe
};

function getAllRecipes() {
  return db("recipes");
}

function addRecipe(name, id) {
  console.log(name, id);
  return db("recipes").insert({ recipe_name: name, user_id: id }, "id");
}

function addIngAndInst(items, id) {
  return db("ing_inst").insert(
    {
      ingredients: items.ingredients,
      instructions: items.instructions,
      recipe_id: id
    },
    "id"
  );
}

function addAllRecipes() {
  return db("recipes");
}

function findRecipe(id) {
  return db("recipes")
    .select("id", "recipe_name ")
    .where({ user_id: id });
}

function recipeById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function findIngAndInst(id) {
  return db("ing_inst")
    .where({ recipe_id: id })
    .first();
}

function deleteIngAndInst(id) {
  return db("ing_inst")
    .where({ recipe_id: id })
    .del();
}

function deleteRecipe(id) {
  return db("recipes")
    .where({ id })
    .del();
}

function updateIngAndInst(data, id) {
  return db("ing_inst")
    .where({ recipe_id: id })
    .update(data);
}

function updateRecipe(data, id) {
  return db("recipes")
    .where({ id })
    .update(data);
}
