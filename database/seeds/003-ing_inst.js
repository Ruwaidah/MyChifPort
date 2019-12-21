exports.seed = function(knex) {
  return knex("ing_inst")
    .del()
    .then(function() {
      return knex("ing_inst").insert([
        {
          ingredients:
            "2 large ripe mangoes, 3/4 cup coconut milk (canned or fresh), 1/2 cup water ,2 tbsp gelatin powder,1/4 cup white sugar,Chopped ripe mangoes, to decorate (optional),Glazed cherries, to decorate,Mint leaves, to decorate",
          instructions:
            "Scoop out flesh from the mangoes. Add to a food processor. Process to make a smooth purée. Transfer to a bowl. Add coconut milk. Stir to combine. Set aside.Pour boiling water into a large bowl. Sprinkle gelatin powder over water. Stir to dissolve gelatin. Add sugar. Stir again to dissolve sugar. Add mango-coconut mixture. Stir to combine.Pour into small glasses. Leave to set for about 2 hours in the refrigerator.Decorate with chopped mangoes, halved cherries and mint leaves if you like.",
          recipe_id: 1
        },

        {
          ingredients:
            "8 tortillas (flour or corn),3 cups shredded turkey meat from Tandoori Turkey,2 cups avocado salsa,1/4 cup sour cream,Chaat masala, to sprinkle over tacos (optional),1/2 cup sliced red onions",
          instructions:
            "Warm tortillas over the stove top or in the microwave. Divide shredded turkey evenly among the tortillas. Top them with avocado salsa and red onions. Add a dollop of sour cream. Sprinkle with chaat masala if you like.",
          recipe_id: 2
        },
        {
          ingredients:
            "1 large ripe banana, frozen (see notes),2 cups unsweetened almond milk,2 tbsp unsweetened dark cocoa powder,1 cup ice cubes,2 tsp pure maple syrup (optional)",
          instructions:
            "Place all the ingredients in a blender. Blend. Garnish with chopped almonds if you like. Serve immediately.",
          recipe_id: 3
        }
      ]);
    });
};
