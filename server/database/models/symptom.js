const mongoose = require("mongoose");

const symptom = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  desc: String,
  severity: String,
});

const Symptom = mongoose.model("Symptom", symptom);

module.exports = Symptom;
