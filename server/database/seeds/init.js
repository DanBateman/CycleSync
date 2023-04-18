const bcrypt = require('bcryptjs');

const pass = 'TEST_PASSWORD';

const user = {
  username: 'danielb',
  hashedPassword: bcrypt.hashSync(pass, 10),
  email: 'dan@test.io',
};
const cards = {
  activities: [
    {
      id: 1,
      date: new Date('April 6, 2023').toDateString(),
      desc: 'Cardio',
      duration: 20,
    },
    {
      id: 2,
      date: new Date('April 6, 2023').toDateString(),
      desc: 'Pilates',
      duration: 30,
      tags: ['cardio', 'bodyweight', 'low impact'],
    },
    {
      id: 3,
      date: new Date('April 6, 2023').toDateString(),
      desc: 'Weighlifting',
      duration: 20,
      tags: ['strength'],
    },
  ],
  meals: [
    { id: 1, date: new Date('April 6, 2023').toDateString(), desc: 'Pizza' },
    { id: 2, date: new Date('April 6, 2023').toDateString(), desc: 'Pasta' },
    { id: 3, date: new Date().toDateString() },
  ],
  symptoms: [
    {
      date: new Date('April, 1, 2023').toDateString(),
      desc: 'cramps',
      severity: 'severe',
    },
    {
      date: new Date('April, 2, 2023').toDateString(),
      desc: 'cramps',
      severity: 'moderate',
    },
  ],
};

module.exports = { user, cards };
