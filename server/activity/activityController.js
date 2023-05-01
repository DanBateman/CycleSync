const Activity = require("../database/models/activity");

const getRecent = async (userId, month, year) => {
  const compareDateStart = new Date(year, month, 0).setHours(0, 0, 0, 0);
  const compareDateEnd = new Date(year, month + 1, 0).setHours(0, 0, 0, 0);
  const activites = await Activity.find({
    userId: userId,
    date: { $gte: compareDateStart, $lt: compareDateEnd },
  });
  return activites;
};

const getActivityById = async (id) => {
  return await Activity.findById(id);
};

const addActivity = async (userId, activity) => {
  return await Activity.create({ userId: userId, ...activity });
};

const removeActivity = async (id) => {
  return await Activity.deleteOne({ _id: id });
};

module.exports = { getRecent, getActivityById, addActivity, removeActivity };
