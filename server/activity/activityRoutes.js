const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  getAllActivities,
  addActivity,
  removeActivity,
} = require("../activity/activityController");

router.get("/activities", auth, async (req, res) => {
  let acts = await getAllActivities(
    req.user.userId,
    req.body.month,
    req.body.year
  );
  res.status(200).send(acts);
});

router.get("/meals", (req, res) => {
  res.status(200).send("Meals endpoint reached");
});

module.exports = router;
