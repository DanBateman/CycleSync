import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activities: [
    {
      id: 1,
      date: new Date("April 6, 2023").toDateString(),
      desc: "Cardio",
      duration: 20,
    },
    {
      id: 2,
      date: new Date("April 6, 2023").toDateString(),
      desc: "Pilates",
      duration: 30,
      tags: ["cardio", "bodyweight", "low impact"],
    },
    {
      id: 3,
      date: new Date("April 6, 2023").toDateString(),
      desc: "Cardio",
      duration: 20,
    },
    {
      id: 4,
      date: new Date("April 6, 2023").toDateString(),
      desc: "Pilates",
      duration: 30,
      tags: ["cardio", "bodyweight", "low impact"],
    },
    {
      id: 5,
      date: new Date("April 6, 2023").toDateString(),
      desc: "Cardio",
      duration: 20,
    },
    {
      id: 6,
      date: new Date("April 6, 2023").toDateString(),
      desc: "Pilates",
      duration: 30,
      tags: ["cardio", "bodyweight", "low impact"],
    },
    {
      id: 7,
      date: new Date("April 6, 2023").toDateString(),
      desc: "Cardio",
      duration: 20,
    },
    {
      id: 8,
      date: new Date("April 6, 2023").toDateString(),
      desc: "Pilates",
      duration: 30,
      tags: ["cardio", "bodyweight", "low impact"],
    },
    { id: 9, date: new Date().toDateString(), desc: "Weightlifting" },
  ],
  meals: [
    {
      id: 1,
      date: new Date("April 6, 2023").toDateString(),
      desc: "Pizza",
      tags: ["tomato sauce", "chesse"],
    },
    {
      id: 2,
      date: new Date("April 6, 2023").toDateString(),
      desc: "Pasta",
      tags: ["tomato sauce", "chesse"],
    },
    {
      id: 3,
      date: new Date().toDateString(),
      desc: "Pizza",
      tags: ["tomato sauce", "chesse"],
    },
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
      flow: "heavy",
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
  selectedMonth: new Date().getMonth(),
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
        index = state.activities.findIndex(
          (el) => el.id == state.selectedActivity.id
        );
        state.activities[index] = state.selectedActivity;
      }
    },
    updateActivity: (state, action) => {
      state.selectedActivity[action.payload.key] = action.payload.value;
    },
    deleteActivity: (state, action) => {
      state.activities = state.activities.filter(
        (el) => el != action.payload.id
      );
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
  addTag,
  deleteTag,
  incrementMonth,
  decrementMonth,
} = calendarSlice.actions;
export default calendarSlice.reducer;
