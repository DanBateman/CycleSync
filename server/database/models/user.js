const mongoose = require("mongoose");
const meal = require("./meal");
const activity = require("./activity");

const schema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  hashedPassword: String,
  activites: [activity],
  meals: [meal],
});

const User = mongoose.model("User", schema);

module.exports = User;
