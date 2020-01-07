const express = require("express");
const router = express.Router();

const Recipes = require("./recipes-model.js");
const Users = require("../login/login-model");

// Get recipes for user
router.get("/:id", (req, res) => {
  Recipes.findRecipes(req.params.id)
    .then(recipes => {
      console.log("try", recipes);
      res.status(200).json(recipes);
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
      console.log(user);
      if (user) {
        if (
          req.body.recipe_name &&
          req.body.ingredients &&
          req.body.instructions
        ) {
          Recipes.addRecipe(
            req.body.recipe_name,
            req.body.mealtype,
            req.params.id
          )
            .then(id => {
              Recipes.addIngAndInst(req.body, id[0])
                .then(id =>
                  res.status(200).json({ message: "added new recipe" })
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

// Delete recipe
router.delete("/recipes/:id", (req, res) => {
  Recipes.recipeById(req.params.id)
    .then(recipe => {
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
    })
    .catch(error => {
      res.status(500).json({
        message: "error deleting recipe"
      });
    });
});

// Update recipe
router.put("/recipes/:id", (req, res) => {
  Recipes.recipeById(req.params.id)
    .then(recipe => {
      if (recipe) {
        if (
          req.body.instructions &&
          req.body.ingredients &&
          req.body.recipe_name
        ) {
          Recipes.updateIngAndInst(
            {
              ingredients: req.body.ingredients,
              instructions: req.body.instructions
            },
            req.params.id
          )
            .then(update => {
              Recipes.updateRecipe(
                {
                  recipe_name: req.body.recipe_name,
                  meal_type_id: req.body.mealtype
                },
                req.params.id
              )
                .then(updaerecipe => {
                  res.status(200).json(updaerecipe);
                })
                .catch(error => {
                  res.status(500).json({
                    message: "error updating recipe"
                  });
                });
            })
            .catch(erre => {
              res.status(500).json({
                message: "error update recipe ing"
              });
            });
        } else {
          res.status(404).json({
            messsage: "Please fill out all the field"
          });
        }
      } else {
        res.status(404).json({
          message: "no recipe with this id"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "error updating recipe"
      });
    });
});

module.exports = router;
