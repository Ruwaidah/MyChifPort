const express = require("express");
const router = express.Router();

const Recipes = require("./recipes-model.js");

// Get Global Recipes
router.get("/", (req, res) => {
  Recipes.getAllRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json({
        message: "error getting all recipes"
      });
    });
});

// Get recipe By Id
router.get("/:id", (req, res) => {
  Recipes.recipeById(req.params.id)
    .then(recipe => {
      if (recipe) {
        console.log(recipe);
        Recipes.findIngAndInst(recipe.id)
          .then(ingAndInst => {
            res.status(200).json({
              recipe_name: recipe.recipe_name,
              ingredients: ingAndInst.ingredients,
              instructions: ingAndInst.instructions
            });
          })
          .catch(error => {
            res.status(500).json(error => {
              message: "error getting the ingredients and instructions";
            });
          });
      } else {
        res.status(404).json({
          message: "no recipe with this id "
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "error getting the recipe!"
      });
    });
});

module.exports = router;
