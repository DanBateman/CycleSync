const router = require("express").Router();

router.get("/activities", (req, res) => {
  res.status(200).send("Activities endpoint reached");
});

router.get("/meals", (req, res) => {
  res.status(200).send("Meals endpoint reached");
});

module.exports = router;
