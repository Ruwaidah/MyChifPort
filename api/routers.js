// LoginRouter
const loginRouter = require("../endpoints/login/loginRouter.js");
const registerRouter = require("../endpoints/register/registerRouter.js");

module.exports = server => {
  server.use("/api/auth/login", loginRouter);
  server.use("/api/auth/register", registerRouter);
};
