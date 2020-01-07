const db = require("../../database/db-config.js");

module.exports = {
  getAllRecipes,
  addRecipe,
  addIngAndInst,
  addAllRecipes,
  recipeById,
  findIngAndInst,
  findRecipes,
  deleteIngAndInst,
  deleteRecipe,
  updateIngAndInst,
  updateRecipe,
  findmealtype
};

function getAllRecipes() {
  return db("recipes")
    .select("recipes.id", "recipe_name", "mealtype", "username", "meal_type_id")
    .join("meal_type", "meal_type_id", "meal_type.id")
    .join("users", "user_id", "users.id");
}

function addRecipe(name, meal_type_id, id) {
  console.log(name, id, meal_type_id);
  return db("recipes").insert(
    { recipe_name: name, user_id: id, meal_type_id: meal_type_id },
    "id"
  );
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

function findRecipes(ids) {
  return db("recipes")
    .select("recipes.id", "recipe_name", "mealtype", "username", "meal_type_id")
    .join("meal_type", "meal_type_id", "meal_type.id")
    .join("users", "user_id", "users.id")
    .where({ user_id: ids });
}

function recipeById(id) {
  console.log(id);
  return db("recipes")
    .select("recipes.id", "recipe_name", "mealtype", "meal_type_id")
    .join("meal_type", "meal_type_id", "meal_type.id")
    .where({ "recipes.id": id })
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

// find mealType

function findmealtype(id) {
  console.log(id);
  return db("meal_type")
    .where({ id: id })
    .first();
}
