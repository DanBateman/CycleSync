const router = require("express").Router();

router.post("/login", (req, res) => {
  console.log(req.body);
  res.status(500).send("User endpoint reached");
});

module.exports = router;
