const Symptom = require("../database/models/symptom");

const getRecent = async (userId, month, year) => {
  const compareDateStart = new Date(year, month);
  const compareDateEnd = new Date(year, month + 1, 0);
  const symptoms = await Symptom.find({
    userId: userId,
    date: { $gte: compareDateStart, $lt: compareDateEnd },
  });
  return symptoms;
};

const getSymptomById = async (id) => {
  return await Symptom.findById(id);
};

const addSymptom = async (userId, meal) => {
  return await Symptom.create({ userId: userId, ...meal });
};

const removeSymptom = async (id) => {
  return await Symptom.deleteOne({ _id: id });
};

module.exports = { getRecent, getSymptomById, addSymptom, removeSymptom };
