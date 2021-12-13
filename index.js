// require("dotenv").config();
const server = require("./api/server");

const port = process.env.PORT;

server.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

server.listen(port, () => console.log(`server is running on port ${port}`));
