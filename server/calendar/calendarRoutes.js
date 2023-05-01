const router = require("express").Router();
const auth = require("../middleware/auth");
const { getAll } = require("./calendarController");

router.get("/data", auth, async (req, res) => {
  let month = req.query.month;
  console.log(req.body);
  let data = await getAll(month, req.user.userId);
  res.status(200).send(data);
});

module.exports = router;
