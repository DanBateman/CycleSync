const bcrypt = require("bcryptjs");

const pass = "TEST_PASSWORD";

const user = {
  username: "danielb",
  hashedPassword: bcrypt.hashSync(pass, 10),
  email: "dan@test.io",
  avgCycle: 28,
  avgMenses: 5,
};
const cards = {
  activities: [
    {
      date: new Date("April 6, 2023").toDateString(),
      desc: "Cardio",
      duration: 20,
    },
    {
      date: new Date("April 6, 2023").toDateString(),
      desc: "Pilates",
      duration: 30,
      tags: ["cardio", "bodyweight", "low impact"],
    },
    {
      date: new Date("April 6, 2023").toDateString(),
      desc: "Weighlifting",
      duration: 20,
      tags: ["strength"],
    },
  ],
  meals: [
    { date: new Date("April 6, 2023").toDateString(), desc: "Pizza" },
    { date: new Date("April 6, 2023").toDateString(), desc: "Pasta" },
  ],
  symptoms: [
    {
      date: new Date("April 1, 2023").toDateString(),
      desc: "cramps",
      severity: "severe",
    },
    {
      date: new Date("April, 2, 2023").toDateString(),
      desc: "cramps",
      severity: "moderate",
    },
  ],
};

module.exports = { user, cards };
