const app = require("./app");
const port = 3100;

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
