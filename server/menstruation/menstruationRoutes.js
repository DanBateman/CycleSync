const router = require("express").Router();
const auth = require("../middleware/auth");
const Menstruation = require("../database/models/menstruation");
const User = require("../database/models/user");

router.post("/", auth, async (req, res) => {
  try {
    let newMenstruation;
    let lastFirst;
    const date = new Date(req.body.date);
    const newMensesCheck = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - 15
    );
    let lastPeriod = await Menstruation.findOne({
      userId: req.user.userId,
      date: { $gt: newMensesCheck },
    });
    if (!lastPeriod) {
      lastFirst = await Menstruation.findOne(
        { start: true, userId: req.user.userId, date: { $gt: newMensesCheck } },
        { sort: { date: -1 } }
      );
    }
    newMenstruation = await Menstruation.create({
      userId: req.user.userId,
      ...req.body,
      start: !(lastPeriod || lastFirst),
    });
    if (newMenstruation.start) {
      let a = await User.findByIdAndUpdate(req.user.userId, {
        lastPeriod: newMenstruation.date,
      });
    }

    res.status(201).send(newMenstruation);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error adding new event");
  }
});
router.delete("/", auth, async (req, res) => {
  try {
    const confirm = await Menstruation.deleteOne({ _id: req.body._id });
    res.status(204).send("New event created");
  } catch (e) {
    console.error(e);
    res.status(500).send("Error deleting new event");
  }
});
router.patch("/:id", auth, async (req, res) => {
  const id = req.body.id;
  const update = req.body.update;
  try {
    const updated = await Menstruation.findOneAndUpdate({ _id: id }, ...update);
    res.status(200).send("Event successfully updated");
  } catch (e) {
    console.error(e);
    res.status(500).send("Error updating event");
  }
});

module.exports = router;
