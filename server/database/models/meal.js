const mongoose = require("mongoose");

const meal = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  desc: String,
  tags: [String],
});

const Meal = mongoose.model("Meal", meal);

module.exports = Meal;
