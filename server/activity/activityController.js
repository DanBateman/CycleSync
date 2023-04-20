const Activity = require("../database/models/activity");

const getAllActivities = async (userId, month, year) => {
  const compareDateStart = new Date(year, month);
  const compareDateEnd = new Date(year, month + 1, 0);
  const activites = await Activity.find({
    userId: userId,
    date: { $gt: compareDateStart, $lt: compareDateEnd },
  });
};

const addActivity = async (userId, activity) => {
  return await Activity.create({ userId: userId, ...activity });
};

const removeAcivity = async (userId, id) => {
  return await Activity.deleteOne({ userId: userId, _id: id });
};

module.export = { getAllActivities, addActivity, removeAcivity };
