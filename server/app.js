const config = require("./config");
const path = require("path");
const helmet = require("helmet");
const logger = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(helmet.hsts({ maxAge: 5184000 }));
app.use(helmet());
app.use(logger("dev"));
app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  express.static(path.resolve(__dirname, "../client/public/favicon.ico"))
);
app.set("URL_PREFIX", config.urlPrefix);
app.set("URL_DOMAIN", config.domain);
app.use(`${app.get("URL_PREFIX")}/api`, require("./routes"));

// 404 middleware:
app.use((req, res, next) => {
  res
    .status(404)
    .json({ error: `endpoint ${req.originalUrl} does not exist.` });
});

module.exports = app;
