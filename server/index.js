const app = require("./app");
const config = require("./config");
const port = config.port;
// const connection = require("./database/connect");

const serverResponse = () => {
  console.log(`HTTP DEV server now running on port ${port}!`);
};

const server = app.listen(port, serverResponse);

process.on("SIGINT", () => {
  server.close();
});

process.on("SIGTERM", () => {
  server.close();
});

module.exports = app;
