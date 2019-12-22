const express = require("express");
const router = express.Router();

const Recipes = require("./recipes-model.js");
const Users = require("../login/login-model");

// Get recipes for user
router.get("/:id", (req, res) => {
  Recipes.findRecipe(req.params.id)
    .then(recipes => {
      if (recipes.length > 0) {
        res.status(200).json(recipes);
      } else {
        res.status(404).json({
          message: "no recipes"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "error getting the recipe"
      });
    });
});

// post new recipe
router.post("/:id", (req, res) => {
  const { recipe_name, ingredients, instructions } = req.body;
  Users.findById(req.params.id)
    .then(user => {
      if (user) {
        if (
          req.body.recipe_name &&
          req.body.ingredients &&
          req.body.instructions
        ) {
          Recipes.addRecipe(req.body.recipe_name, req.params.id)
            .then(id => {
              Recipes.addIngAndInst(req.body, id[0])
                .then(id =>
                  res.status(200).json({ message: "added new recipes" })
                )
                .catch(error => {
                  res.status(500).json({
                    message: "error adding new recipe"
                  });
                });
            })
            .catch(error => {
              res.status(500).json({
                message: "error adding the recipe"
              });
            });
        } else {
          res.status(404).json({
            message: "missing some fields"
          });
        }
      } else {
        res.status(400).json({
          message: "no user with this id"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "error getting the user"
      });
    });
});

// Get recipe By Id
router.get("/recipes/:id", (req, res) => {
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

// Delete recipe
router.delete("/recipes/:id", (req, res) => {
  Recipes.recipeById(req.params.id).then(recipe => {
    if (recipe) {
      Recipes.deleteIngAndInst(req.params.id)
        .then(del => {
          Recipes.deleteRecipe(req.params.id)
            .then(dele => {
              res.status(200).json({ message: "recipe deleted" });
            })
            .catch(error => {
              res.status(500).json({
                message: "error deleting the recipe"
              });
            });
        })
        .catch(error => {
          res.status(500).json({
            message: "error deleting the recipe"
          });
        });
    } else {
      res.status(404).json({
        message: "no recipe with this id"
      });
    }
  });
});

module.exports = router;
