const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  getAllMeals,
  getMealById,
  addMeal,
  removeMeal,
} = require("./mealController.js");

router.get("/", auth, async (req, res) => {
  let meals = await getAllMeals(req.user.userId, req.body.month, req.body.year);
  res.status(200).send(meals);
});

router.get("/:id", auth, async (req, res) => {
  let confirm = await getMealById(req.body.id);
  res.status(200).send(confirm);
});

router.post("/", auth, async (req, res) => {
  let confirm = await addMeal(req.user.userId, req.body);
  res.status(201).send(confirm);
});

router.delete("/", auth, async (req, res) => {
  let confirm = await removeMeal(req.body.id);
  res.status(200).send(confirm);
});

module.exports = router;
