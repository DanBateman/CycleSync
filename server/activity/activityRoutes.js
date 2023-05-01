const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  getRecent,
  addActivity,
  getActivityById,
  removeActivity,
} = require("../activity/activityController");

router.get("/", auth, async (req, res) => {
  let acts = await getRecent(req.user.userId, req.body.month, req.body.year);
  res.status(200).send(acts);
});

router.get("/:id", auth, async (req, res) => {
  let confirm = await getActivityById(req.body.id);
  res.status(200).send(confirm);
});

router.post("/", auth, async (req, res) => {
  let confirm = await addActivity(req.user.userId, req.body);
  res.status(200).send(confirm);
});

router.delete("/", auth, async (req, res) => {
  let confirm = await removeActivity(req.body.id);
  res.status(200).send(confirm);
});

module.exports = router;
