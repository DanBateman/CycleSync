const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  hashedPassword: String,
});

const User = mongoose.model('User', schema);

module.exports = User;
