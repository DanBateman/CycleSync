import React, { createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAll } from "../components/calendar/calendarSlice";
import api from "../services/api";

export const ApiContext = createContext({});

export const ApiProvider = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const getActivities = async () => {
    try {
      const { data } = await api.get("/calendar/data", {
        headers: { "x-access-token": token },
      });
      dispatch(setAll(data));
    } catch (e) {
      console.error(e);
    }
  };

  let a = {
    getActivities,
  };
  return <ApiContext.Provider value={a}>{props.children}</ApiContext.Provider>;
};
