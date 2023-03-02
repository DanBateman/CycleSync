import { combineReducers } from "react-redux";
import { calendarSlice } from "../components/calendar/calendarSlice";

const rootReducer = combineReducers({
  calendar: calendarSlice,
});

export default rootReducer;
