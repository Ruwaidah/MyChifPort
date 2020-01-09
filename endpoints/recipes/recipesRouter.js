const express = require("express");
const router = express.Router();

const Recipes = require("./recipes-model.js");
const Users = require("../login/login-model");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "donsjzduw",
  api_key: "841792475544732",
  api_secret: "ipOl0SDxScrO2a1Khv9QVHpjBm8"
});

// Upload the Image
const imageupload = file => {
  return cloudinary.uploader.upload(file.image.tempFilePath, function(
    err,
    result
  ) {
    return result;
  });
};
// Get recipes for user
router.get("/:id", (req, res) => {
  Recipes.findRecipes(req.params.id)
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json({
        message: "error getting the recipe"
      });
    });
});

// Post Image
router.post("/image", (req, res) => {
  if (!req.files || !req.files.image) {
    console.log("hihiuh");
    const image = {
      url:
        "https://res.cloudinary.com/donsjzduw/image/upload/v1578579527/kn0gzemksbkmnwknh6q1.png"
    };
    Recipes.uploadImage(image)
      .then(ids => res.status(200).json(ids[0]))
      .catch(erre => res.status.json({ message: "error upload image" }));
  } else {
    console.log("else");
    imageupload(req.files)
      .then(image => {
        Recipes.uploadImage(image).then(ids => res.status(200).json(ids[0]));
      })
      .catch(error => {
        res.status(500).json({
          message: "error adding new recipe"
        });
      });
  }
});

// post new recipe
router.post("/:id", (req, res) => {
  console.log(req.files);
  Users.findById(req.params.id)
    .then(user => {
      if (user) {
        if (
          req.body.recipe_name &&
          req.body.ingredients &&
          req.body.instructions
        ) {
          Recipes.addRecipe(
            req.body.image,
            req.body.recipe_name,
            req.body.mealtype,
            req.params.id
          )
            .then(id => {
              Recipes.addIngAndInst(req.body, id[0])
                .then(id => {
                  res.status(200).json({ message: "added new recipe" });
                })
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
