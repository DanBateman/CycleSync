const Meal = require('../database/models/meal');

const getAllMeals = async (userId, month, year) => {
  const compareDateStart = new Date(year, month);
  const compareDateEnd = new Date(year, month + 1, 0);
  const activites = await Activity.find({
    userId: userId,
    date: { $gt: compareDateStart, $lt: compareDateEnd },
  });
};

const getMealById = async (id) => {
  return await Meal.findById(id);
};

const addMeal = async (userId, meal) => {
  return await Meal.create({ userId: userId, ...meal });
};

const removeMeal = async (id) => {
  return await Meal.deleteOne({ _id: id });
};

module.export = { getAllMeals, getMealById, addMeal, removeMeal };
