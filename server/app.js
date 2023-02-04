const path = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(helmet.hsts({ maxAge: 5184000 }));
app.use(helmet());
app.use(logger("dev"));
app.use(bodyParser.json({ limit: "50mb" }));

app.use(`localhost:3100`, require("./routes"));

// 404 middleware:
app.use((req, res, next) => {
  res.status(404).json({ error: `enpoint ${req.originalUrl} does not exist.` });
});

module.exports = app;
