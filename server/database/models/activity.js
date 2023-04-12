const mongoose = require("mongoose");

const activity = new mongoose.Schema({
  date: String,
  desc: String,
  duration: Number,
  tags: String,
});

// const Activity = mongoose.model("Activity", schema);

module.exports = activity;
