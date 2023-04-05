const mongoose = require("mongoose");

const activity = new mongoose.Schema({
  date: String,
  desc: String,
  length: Number, // time in minutes?
});

// const Activity = mongoose.model("Activity", schema);

module.exports = activity;
