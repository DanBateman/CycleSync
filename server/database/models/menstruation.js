const mongoose = require("mongoose");

const menstruation = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, unique: true },
  start: Boolean,
  flow: String,
});

const Menstruation = mongoose.model("Menstruation", menstruation);

module.exports = Menstruation;
