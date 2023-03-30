const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userName: String,
  hashedPassword: String,
});

const User = mongoose.model("User", schema);

module.exports = User;
