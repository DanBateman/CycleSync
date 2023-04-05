import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activities: [
    { id: 1, date: new Date("April 6, 2023").toDateString(), desc: "Cardio" },
    { id: 2, date: new Date("April 6, 2023").toDateString(), desc: "Pilates" },
    { id: 3, date: new Date().toDateString(), desc: "Weightlifting" },
  ],
  meals: [
    { id: 1, date: new Date("April 6, 2023").toDateString(), desc: "Pizza" },
    { id: 2, date: new Date("April 6, 2023").toDateString(), desc: "Pasta" },
    { id: 3, date: new Date().toDateString() },
  ],
  symptoms: [
    {
      id: 1,
      date: new Date("April, 1, 2023").toDateString(),
      flow: "light",
      cramps: "light",
    },
    {
      id: 1,
      date: new Date("April, 2, 2023").toDateString(),
      flow: "heavy",
      cramps: "severe",
    },
    {
      id: 1,
      date: new Date("April, 3, 2023").toDateString(),
      flow: "heavey",
      cramps: "heavy",
    },
    {
      id: 1,
      date: new Date("April, 4, 2023").toDateString(),
      flow: "regular",
      cramps: "regular",
    },
    {
      id: 1,
      date: new Date("April, 5, 2023").toDateString(),
      flow: "light",
      cramps: "regular",
    },
    {
      id: 1,
      date: new Date("April, 6, 2023").toDateString(),
      flow: "light",
      cramps: "light",
    },
  ],
  selectedDay: null,
  selectedActivity: null,
  selectedMeal: null,
  lastMenstrualStart: new Date("April, 1, 2023").toDateString(),
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
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
      state.selectedDay = null;
      state.selectedMeal = null;
      state.selectedActivity = action.payload;
    },
    setSelectedMeal: (state, action) => {
      state.selectedDay = null;
      state.selectedActivity = null;
      state.selectedMeal = action.payload;
    },
    saveActivity: (state) => {
      let index;
      if (state.selectedActivity != null) {
        index = state.activities.findIndex(
          (el) => el.id == state.selectedActivity.id
        );
        console.log(index);
        state.activities[index] = state.selectedActivity;
      }
    },
    updateActivity: (state, action) => {
      state.selectedActivity[action.payload.key] = action.payload.value;
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
  },
});

export const getActivities = (state) => state.calendar.activities;
export const getMeals = (state) => state.calendar.meals;
export const {
  setActivities,
  setMeals,
  setSelectedDay,
  setSelectedActivity,
  setSelectedMeal,
  saveActivity,
  updateActivity,
  saveMeal,
  updateMeal,
} = calendarSlice.actions;
export default calendarSlice.reducer;
