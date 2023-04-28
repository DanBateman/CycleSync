import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activities: [],
  meals: [],
  symptoms: [],
  fetched: false,
  selectedMonth: new Date().getMonth(),
  selectedDay: null,
  selectedActivity: null,
  selectedMeal: null,
  selectedAdd: null,
  lastMenstrualStart: new Date('April, 1, 2023').toDateString(),
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setAll: (state, action) => {
      state.activities = action.payload.activity;
      state.meals = action.payload.meal;
      state.symptoms = action.payload.symptoms;
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
      state.stagedEvent = {};
      state.selectedActivity = state.activities.filter(
        (el) => new Date(el.date).getDate() === action.payload
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
      state.stagedEvent = {};
      state.selectedMeal = state.meals.filter(
        (el) => new Date(el.date).getDate() === action.payload
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
      state.stagedEvent = {};
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
      state.selectedAdd = action.payload;
      state.stagedEvent = {};
    },
    saveActivity: (state) => {
      let index;
      if (state.selectedActivity !== null) {
        index = state.activities.findIndex((el) => el.id === state.selectedActivity.id);
        state.activities[index] = state.selectedActivity;
      }
    },
    addStaged: (state) => {
      state.activities.push(state.stagedEvent);
      state.stagedEvent = {};
    },
    updateStagedEvent: (state, action) => {
      let keys = Object.keys(action.payload);
      for (let key in keys) {
        state.stagedEvent[key] = action.payload[key];
      }
    },
    addActivity: (state, action) => {
      state.activities.push(action.payload);
    },
    updateActivity: (state, action) => {
      state.selectedActivity[action.payload.key] = action.payload.value;
    },
    deleteActivity: (state, action) => {
      state.activities = state.activities.filter((el) => el._id !== action.payload.id);
    },
    saveMeal: (state) => {
      let index;
      if (state.selectedMeal !== null) {
        index = state.meals.findIndex((el) => el.id === state.selectedMeal.id);
        state.meals[index] = state.selectedMeal;
      }
    },
    updateMeal: (state, action) => {
      state.selectedMeal[action.payload.key] = action.payload.value;
    },
    deleteMeal: (state, action) => {
      state.meals = state.meals.filter((el) => el._id !== action.payload.id);
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

export const getActivities = (state) => state.calendar.activities;
export const getMeals = (state) => state.calendar.meals;
export const {
  setAll,
  setActivities,
  setMeals,
  setSelectedDay,
  setSelectedActivity,
  setSelectedMeal,
  setSelectedSymptom,
  setSelectedAdd,
  saveActivity,
  addActivity,
  updateActivity,
  deleteActivity,
  saveMeal,
  updateMeal,
  deleteMeal,
  addTag,
  deleteTag,
  setMonth,
  incrementMonth,
  decrementMonth,
} = calendarSlice.actions;
export default calendarSlice.reducer;
