const db = require("../../database/db-config.js");

module.exports = {
  getAllRecipes,
  addRecipe,
  addIngAndInst,
  // addAllRecipes,
  recipeById,
  findIngAndInst,
  findRecipes,
  deleteIngAndInst,
  deleteRecipe,
  updateIngAndInst,
  updateRecipe,
  findmealtype,
  uploadImage
};

function getAllRecipes() {
  return db("recipes")
    .select(
      "recipes.id",
      "recipe_name",
      "mealtype",
      "meal_type_id",
      "image",
      "username"
    )
    .join("meal_type", "meal_type_id", "meal_type.id")
    .join("images", "image_id", "images.id")
    .join("users", "user_id", "users.id");
}

function addRecipe(image_id, name, meal_type_id, id) {
  return db("recipes").insert(
    {
      image_id: image_id,
      recipe_name: name,
      user_id: id,
      meal_type_id: meal_type_id
    },
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

// function addAllRecipes() {
//   return db("recipes")
//     .select("recipes.id", "recipe_name", "mealtype", "username", "meal_type_id")
//     .join("meal_type", "meal_type_id", "meal_type.id")
//     .join("users", "user_id", "users.id");
// }

function findRecipes(ids) {
  return db("recipes")
    .select(
      "recipes.id",
      "recipe_name",
      "mealtype",
      "username",
      "meal_type_id",
      "image"
    )
    .join("meal_type", "meal_type_id", "meal_type.id")
    .join("users", "user_id", "users.id")
    .join("images", "image_id", "images.id")
    .where({ user_id: ids });
}

function recipeById(id) {
  return db("recipes")
    .select("recipes.id", "recipe_name", "mealtype", "meal_type_id", "image")
    .join("meal_type", "meal_type_id", "meal_type.id")
    .join("images", "image_id", "images.id")
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

// Get Images

function uploadImage(image) {
  console.log(image);
  return db("images").insert({ image: image.url }, "id");
}

function getImages(id) {
  return db("images")
    .select("image")
    .where({ recipe_id: id });
}
