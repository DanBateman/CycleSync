const router = require("express").Router();
const auth = require("../middleware/auth");
const { getAll } = require("./calendarController");

router.get("/data", auth, async (req, res) => {
  let data = await getAll(req.body.month, req.user.userId);
  res.status(200).send(data);
});

router.get("/meals", (req, res) => {
  res.status(200).send("Meals endpoint reached");
});

module.exports = router;
