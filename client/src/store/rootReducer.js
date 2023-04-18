import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import authSlice from "../components/auth/authSlice";
import calendarSlice from "../components/calendar/calendarSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

export const rootReducer = combineReducers({
  calendar: calendarSlice,
  auth: authSlice,
});

export default persistReducer(persistConfig, rootReducer);
