import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../components/auth/authSlice";
import calendarSlice from "../components/calendar/calendarSlice";

export const rootReducer = combineReducers({
  calendar: calendarSlice,
  auth: authSlice,
});

export default rootReducer;
