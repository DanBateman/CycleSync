const Menstruation = require("../database/models/menstruation");

const getRecent = async (userId, month, year) => {
  const compareDateStart = new Date(year, month);
  const compareDateEnd = new Date(year, month + 1, 0);
  const menses = await Menstruation.find({
    userId: userId,
    date: { $gt: compareDateStart, $lt: compareDateEnd },
  });
  return menses;
};

const getMensesById = async (id) => {
  return await Menstruation.findById(id);
};

const addMenses = async (userId, meal) => {
  return await Menstruation.create({ userId: userId, ...meal });
};

const removeMenses = async (id) => {
  return await Menstruation.deleteOne({ _id: id });
};

module.exports = { getRecent, getMensesById, removeMenses, addMenses };
