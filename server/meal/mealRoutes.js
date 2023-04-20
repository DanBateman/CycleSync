const router = require('express').Router();
const auth = require('../middleware/auth');
const { getAllMeals, getMealById, addMeal, removeMeal } = require('./mealController.js');

router.get('/meals', auth, async (req, res) => {
  let meals = await getAllMeals(req.user.userId, req.body.month, req.body.year);
  res.status(200).send(meals);
});

router.get('/meal/:id', auth, async (req, res) => {
  let confirm = await getMealById(req.body.id);
  res.status(200).send(confirm);
});

router.post('/meals', auth, async (req, res) => {
  let confirm = await addMeal(req.user.userId, req.body.meal);
});

router.delete('/meals', auth, async (req, res) => {
  let confirm = await removeMeal(req.body.mealId);
  res.status(200).send(confirm);
});

module.exports = router;
