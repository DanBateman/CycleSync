const mongoose = require("mongoose");

const activity = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  desc: String,
  duration: Number,
  tags: [String],
});

const Activity = mongoose.model("Activity", activity);

module.exports = Activity;
