const Meal = require("../database/models/meal");
const Activity = require("../database/models/activity");
const Symptom = require("../database/models/symptom");

const getAll = async (month, user_id) => {
  let acts = await Activity.find({ userId: user_id });
  let meals = await Meal.find({ userId: user_id });
  let symps = await Symptom.find({ userId: user_id });
  return { activity: acts, meal: meals, symptoms: symps };
};

module.exports = { getAll };
