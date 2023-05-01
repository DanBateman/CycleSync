const mongoose = require("mongoose");
const { user, cards } = require("../database/seeds/init");
const User = require("../database/models/user");
const Activity = require("../database/models/activity");
const Meal = require("../database/models/meal");
const Symptom = require("../database/models/symptom");

const seed = async () => {
  try {
    const seedUser = await User.create(user);
    console.log("Seeding user complete. ID: ", seedUser._id);
    for (let act of cards.activities) {
      await Activity.create({ userId: seedUser._id, ...act });
    }
    for (let meal of cards.meals) {
      await Meal.create({ userId: seedUser._id, ...meal });
    }
    for (let symp of cards.symptoms) {
      await Symptom.create({ userId: seedUser._id, ...symp });
    }
  } catch (e) {
    throw e;
  }
};

const connect = async () => {
  try {
    const options = {
      useNewUrlParser: true,
    };

    const connection = await mongoose.connect(
      `mongodb://dbateman:${process.env.DB_PASS}@mongodb`,
      options
    );
    if (connection) {
      console.log("\x1b[32m%s\x1b[0m", "Database Connected Successfully...");
      // try {
      //   seed();
      // } catch (e) {
      //   console.log(e);
      // }
    }
    return connection;
  } catch (err) {
    console.log("\x1b[31m%s\x1b[0m", "Error while connecting database\n");
    console.log(err);
  }
};
module.exports = connect;
