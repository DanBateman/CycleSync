const router = require('express').Router();
const auth = require('../middleware/auth');
const { getAllActivities, addActivity, removeActivity } = require('../activity/activityController');

router.get('/activities', auth, async (req, res) => {
  let acts = await getAllActivities(req.user.userId, req.body.month, req.body.year);
  res.status(200).send(acts);
});

router.get('/activities/:id', auth, async (req, res) => {
  let confirm = await getMealById(req.body.id);
  res.status(200).send(confirm);
});

router.post('/activities', auth, async (req, res) => {
  let confirm = await addMeal(req.user.userId, req.body.meal);
  res.status(200).send(confirm);
});

router.delete('/activities', auth, async (req, res) => {
  let confirm = await removeMeal(req.body.mealId);
  res.status(200).send(confirm);
});

module.exports = router;
