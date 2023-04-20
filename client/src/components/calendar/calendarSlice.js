import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activities: [],
  meals: [],
  symptoms: [],
  selectedMonth: new Date().getMonth(),
  selectedDay: null,
  selectedActivity: null,
  selectedMeal: null,
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
    setActivities: (state, action) => {
      state.activities = action.payload;
    },
    setMeals: (state, action) => {
      state.meals = action.payload;
    },
    setSelectedDay: (state, action) => {
      state.selectedActivity = null;
      state.selectedMeal = null;
      state.selectedDay = action.payload;
    },
    setSelectedActivity: (state, action) => {
      // action.payload is a date object
      if (action.payload == null) {
        state.selectedActivity = null;
        return;
      }
      state.selectedDay = null;
      state.selectedMeal = null;
      state.selectedActivity = state.activities.filter(
        (el) => new Date(el.date).getDate() == action.payload
      );
    },
    setSelectedMeal: (state, action) => {
      if (action.payload == null) {
        state.selectedMeal = null;
        return;
      }
      state.selectedDay = null;
      state.selectedActivity = null;
      state.selectedMeal = state.meals.filter(
        (el) => new Date(el.date).getDate() == action.payload
      );
    },
    saveActivity: (state) => {
      let index;
      if (state.selectedActivity != null) {
        index = state.activities.findIndex((el) => el.id == state.selectedActivity.id);
        state.activities[index] = state.selectedActivity;
      }
    },
    updateActivity: (state, action) => {
      state.selectedActivity[action.payload.key] = action.payload.value;
    },
    deleteActivity: (state, action) => {
      state.activities = state.activities.filter((el) => el._id != action.payload.id);
    },
    saveMeal: (state) => {
      let index;
      if (state.selectedMeal != null) {
        index = state.meals.findIndex((el) => el.id == state.selectedMeal.id);
        state.meals[index] = state.selectedMeal;
      }
    },
    updateMeal: (state, action) => {
      state.selectedMeal[action.payload.key] = action.payload.value;
    },
    deleteMeal: (state, action) => {
      console.log(action.payload);
      state.meals = state.meals.filter((el) => el._id != action.payload.id);
      console.log(state.meals);
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
        (el) => el != action.payload.tag
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
  saveActivity,
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
