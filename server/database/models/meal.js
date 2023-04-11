const mongoose = require("mongoose");

const meal = new mongoose.Schema({
  date: String,
  desc: String,
  ingredients: [String],
});

// const Meal = mongoose.model("Meal", schema);

module.exports = meal;
