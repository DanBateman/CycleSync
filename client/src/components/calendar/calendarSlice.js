const initialState = {
  activities: [],
  meals: [],
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
  },
});

export const getActivities = (state) => state.calendar.activities;
export const getMeals = (state) => state.calendar.meals;
export const { setActivities, setMeals } = reportSlice.actions;
export default calendarSlice.reducer;
