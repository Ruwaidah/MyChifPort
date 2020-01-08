const loginRouter = require("../endpoints/login/loginRouter.js");
const registerRouter = require("../endpoints/register/registerRouter.js");
const recipesRouter = require("../endpoints/recipes/recipesRouter.js");
const globalrecipesRuter = require("../endpoints/recipes/globalrecipesRouter.js");
const restrictedMW = require("./restricted-middleware.js");
module.exports = server => {
  server.use("/api/auth/login", loginRouter);
  server.use("/api/auth/register", registerRouter);
  server.use("/api/auth/user", restrictedMW, recipesRouter);
  server.use("/api/recipes", globalrecipesRuter);
};
