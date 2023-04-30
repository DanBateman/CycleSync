const mongoose = require('mongoose');

const period = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  start: Boolean,
  flow: String,
});

const Period = mongoose.model('Period', period);

module.exports = Period;
