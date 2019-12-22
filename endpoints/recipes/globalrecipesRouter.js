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

module.exports = router;
