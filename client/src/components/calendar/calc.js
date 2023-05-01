// Take last menstrual day and calc all other days
/*eslint no-extend-native: ["error", { "exceptions": ["Date"] }]*/

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const calculate = (lastMenstrualDay, avgCycle, avgMenses) => {
  // last menstrual day is a date, others are numbers (days)
  let nextPeriod = new Date(lastMenstrualDay).addDays(avgCycle);
  let ovulationDay = new Date(
    nextPeriod.getFullYear(),
    nextPeriod.getMonth(),
    nextPeriod.getDate() - avgCycle / 2
  );
  return {
    next: nextPeriod,
    ov: ovulationDay,
    nextPeriodEnd: nextPeriod.addDays(avgMenses),
  };
};

module.exports = { calculate };
