import { configureStore } from "react-redux";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});
