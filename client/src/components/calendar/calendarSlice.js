import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activities: [],
  meals: [],
  symptoms: [],
  menstruation: [],
  avgCycle: null,
  avgMenses: null,
  calcs: {
    next: null,
    ov: null,
    nextPeriodEnd: null,
  },
  fetched: false,
  selectedMonth: new Date().getMonth(),
  selectedDay: null,
  selectedActivity: null,
  selectedMeal: null,
  selectedAdd: null,
  selectedSymptom: null,
  selectedMenstruation: null,
  lastMenstrualStart: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    reset: (state) => {
      for (let key in state) {
        state[key] = initialState[key];
      }
    },
    setAll: (state, action) => {
      state.activities = action.payload.activity;
      state.meals = action.payload.meal;
      state.symptoms = action.payload.symptoms;
      state.menstruation = action.payload.menstruation;
      state.avgCycle = action.payload.avgCycle;
      state.avgMenses = action.payload.avgMenses;
      state.lastMenstrualStart = action.payload.lastPeriod;
      if (state.lastMenstrualStart) {
        state.calcs = calculate(
          state.lastMenstrualStart,
          state.avgCycle,
          state.avgMenses
        );
      }
      // state.fetched = true;
    },
    setFetched: (state, action) => {
      state.fetched = action.payload;
    },
    setActivities: (state, action) => {
      state.activities = action.payload;
    },
    setMeals: (state, action) => {
      state.meals = action.payload;
    },
    setSelectedDay: (state, action) => {
      state.selectedActivity = null;
      state.selectedMeal = null;
      state.selectedAdd = null;
      state.selectedSymptom = null;
      state.stagedEvent = {};
      state.selectedDay = action.payload;
    },
    setSelectedActivity: (state, action) => {
      // action.payload is a date object
      if (action.payload === null) {
        state.selectedActivity = null;
        return;
      }
      state.selectedDay = null;
      state.selectedMeal = null;
      state.selectedSymptom = null;
      state.selectedAdd = null;
      state.selectedMenstruation = null;
      state.selectedActivity = state.activities.filter(
        (el) =>
          new Date(el.date).getDate() === action.payload &&
          new Date(el.date).getMonth() === state.selectedMonth
      );
    },
    setSelectedMeal: (state, action) => {
      if (action.payload === null) {
        state.selectedMeal = null;
        return;
      }
      state.selectedDay = null;
      state.selectedActivity = null;
      state.selectedSymptom = null;
      state.selectedAdd = null;
      state.selectedMenstruation = null;
      state.selectedMeal = state.meals.filter(
        (el) =>
          new Date(el.date).getDate() === action.payload &&
          new Date(el.date).getMonth() === state.selectedMonth
      );
    },
    setSelectedSymptom: (state, action) => {
      if (action.payload === null) {
        state.selectedSymptom = null;
        return;
      }
      state.selectedDay = null;
      state.selectedActivity = null;
      state.selectedMeal = null;
      state.selectedAdd = null;
      state.selectedMenstruation = null;
      state.selectedSymptom = state.symptoms.filter(
        (el) => new Date(el.date).getDate() === action.payload
      );
    },
    setSelectedAdd: (state, action) => {
      if (action.payload === null) {
        state.selectedAdd = null;
        return;
      }
      state.selectedDay = null;
      state.selectedMeal = null;
      state.selectedActivity = null;
      state.selectedSymptom = null;
      state.selectedMenstruation = null;
      state.selectedAdd = action.payload;
    },
    setSelectedMenstruation: (state, action) => {
      if (action.payload === null) {
        state.selectedMenstruation = null;
        return;
      }
      state.selectedDay = null;
      state.selectedMeal = null;
      state.selectedActivity = null;
      state.selectedSymptom = null;
      state.selectedAdd = null;
      state.selectedMenstruation = state.menstruation.filter(
        (el) =>
          new Date(el.date).getDate() === action.payload &&
          new Date(el.date).getMonth() === state.selectedMonth
      );
    },
    saveActivity: (state) => {
      let index;
      if (state.selectedActivity !== null) {
        index = state.activities.findIndex(
          (el) => el.id === state.selectedActivity.id
        );
        state.activities[index] = state.selectedActivity;
      }
    },
    addActivity: (state, action) => {
      state.activities.push(action.payload);
    },
    updateActivity: (state, action) => {
      state.selectedActivity[action.payload.key] = action.payload.value;
    },
    deleteActivity: (state, action) => {
      let ind = state.selectedActivity.findIndex(
        (el) => el._id === action.payload.id
      );
      state.selectedActivity.splice(ind, 1);
      ind = state.activities.findIndex((el) => el._id === action.payload.id);
      state.activities.splice(ind, 1);
      if (state.selectedActivity.length === 0) state.selectedActivity = null;
    },
    saveMeal: (state) => {
      let index;
      if (state.selectedMeal !== null) {
        index = state.meals.findIndex((el) => el.id === state.selectedMeal.id);
        state.meals[index] = state.selectedMeal;
      }
    },
    addMeal: (state, action) => {
      state.meals.push(action.payload);
    },
    updateMeal: (state, action) => {
      state.selectedMeal[action.payload.key] = action.payload.value;
    },
    deleteMeal: (state, action) => {
      let ind = state.selectedMeal.findIndex(
        (el) => el._id === action.payload.id
      );
      state.selectedMeal.splice(ind, 1);
      ind = state.meals.findIndex((el) => el._id === action.payload.id);
      state.meals.splice(ind, 1);
      if (state.selectedMeal.length === 0) state.selectedActivity = null;
    },
    addTag: (state, action) => {
      // action.payload { activityId, newTag }
      let ind = state.activities.findIndex((el) => el.id === action.payload.id);
      state.activities[ind].tags.push(action.payload.newTag);
    },
    deleteTag: (state, action) => {
      // action.payload { activityId, tagIndex }
      let ind = state.activities.findIndex((el) => el.id === action.payload.id);
      state.activities[ind].tags = state.activities[ind].tags.filter(
        (el) => el !== action.payload.tag
      );
    },
    addSymptom: (state, action) => {
      state.symptoms.push(action.payload);
    },
    deleteSymptom: (state, action) => {
      let ind = state.selectedSymptom.findIndex(
        (el) => el._id === action.payload.id
      );
      state.selectedSymptom.splice(ind, 1);
      ind = state.symptoms.findIndex((el) => el._id === action.payload.id);
      state.symptoms.splice(ind, 1);
      if (state.selectedSymptom.length === 0) state.selectedSymptom = null;
    },
    addMenstruation: (state, action) => {
      state.menstruation.push(action.payload);
      if (action.payload.start) {
        state.lastMenstrualStart = action.payload.date;
        calculate(state.lastMenstrualStart, state.avgCycle, state.avgMenses);
      }
    },
    deleteMenstruation: (state, action) => {
      let ind = state.menstruation.findIndex(
        (el) => el._id === action.payload.id
      );
      state.menstruation.splice(ind, 1);
      state.selectedMenstruation = null;
    },
    setMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
    incrementMonth: (state) => {
      state.selectedMonth += 1;
    },
    decrementMonth: (state) => {
      state.selectedMonth -= 1;
    },
  },
});

const calculate = (lastMenstrualDay, avgCycle, avgMenses) => {
  // last menstrual day is a date, others are numbers (days)
  let nextPeriod = new Date(lastMenstrualDay).addDays(avgCycle);
  let ovulationDay = new Date(
    nextPeriod.getFullYear(),
    nextPeriod.getMonth(),
    nextPeriod.getDate - avgCycle / 2
  );
  return {
    next: nextPeriod.toDateString(),
    ov: ovulationDay.toDateString(),
    nextPeriodEnd: nextPeriod.addDays(avgMenses).toDateString(),
  };
};

export const getActivities = (state) => state.calendar.activities;
export const getMeals = (state) => state.calendar.meals;
export const {
  reset,
  setAll,
  setActivities,
  setMeals,
  setSelectedDay,
  setSelectedActivity,
  setSelectedMeal,
  setSelectedSymptom,
  setSelectedAdd,
  setSelectedMenstruation,
  saveActivity,
  addActivity,
  addMeal,
  addSymptom,
  addMenstruation,
  deleteSymptom,
  deleteMenstruation,
  deleteMeal,
  updateActivity,
  deleteActivity,
  saveMeal,
  updateMeal,
  addTag,
  deleteTag,
  setMonth,
  incrementMonth,
  decrementMonth,
} = calendarSlice.actions;
export default calendarSlice.reducer;
