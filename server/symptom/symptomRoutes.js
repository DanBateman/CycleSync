const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  getRecent,
  getSymptomById,
  addSymptom,
  removeSymptom,
} = require("./symptomController.js");

router.get("/", auth, async (req, res) => {
  let symptoms = await getRecent(
    req.user.userId,
    req.body.month,
    req.body.year
  );
  res.status(200).send(symptoms);
});

router.get("/:id", auth, async (req, res) => {
  let confirm = await getSymptomById(req.body.id);
  res.status(200).send(confirm);
});

router.post("/", auth, async (req, res) => {
  console.log(req.body);
  let confirm = await addSymptom(req.user.userId, req.body);
  res.status(201).send(confirm);
});

router.delete("/", auth, async (req, res) => {
  let confirm = await removeSymptom(req.body.id);
  res.status(200).send(confirm);
});

module.exports = router;
