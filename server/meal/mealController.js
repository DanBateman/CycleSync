const Meal = require("../database/models/meal");

const getAllMeals = async (userId, month, year = new Date().getFullYear()) => {
  const compareDateStart = new Date(year, month, 1);
  const compareDateEnd = new Date(year, month + 1, 1);
  const meals = await Meal.find({
    userId: userId,
    date: { $gt: compareDateStart, $lt: compareDateEnd },
  });
  console.log(meals, compareDateEnd, compareDateEnd);
  return meals;
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

module.exports = { getAllMeals, getMealById, addMeal, removeMeal };
