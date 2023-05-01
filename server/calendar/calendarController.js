const User = require("../database/models/user");

const activity = require("../activity/activityController");
const symptom = require("../symptom/symptomController");
const meal = require("../meal/mealController");
const menstruation = require("../menstruation/menstruationController");
const Menstruation = require("../database/models/menstruation");

const getAll = async (month, user_id) => {
  let acts = await activity.getRecent(
    user_id,
    month,
    (year = new Date().getFullYear())
  );
  let meals = await meal.getAllMeals(
    user_id,
    month,
    (year = new Date().getFullYear())
  );
  let symps = await symptom.getRecent(
    user_id,
    month,
    (year = new Date().getFullYear())
  );
  let mens = await menstruation.getRecent(
    user_id,
    month,
    (year = new Date().getFullYear())
  );
  let lastPeriod = await Menstruation.findOne(
    { start: true, userId: user_id },
    { sort: { date: 1 } }
  ).select("date");
  let user = await User.findOne({ _id: user_id });
  return {
    activity: acts,
    meal: meals,
    symptoms: symps,
    menstruation: mens,
    avgCycle: user.avgCycle,
    avgMenses: user.avgMenses,
    lastPeriod: lastPeriod?.date,
  };
};

module.exports = { getAll };
