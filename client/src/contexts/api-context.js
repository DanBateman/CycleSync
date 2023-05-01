import React, { createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setAll,
  addActivity,
  addMeal,
  addSymptom,
  addMenstruation,
  deleteActivity,
  deleteSymptom,
  deleteMeal,
  deleteMenstruation,
} from "../components/calendar/calendarSlice";
import { clearUser } from "../components/auth/authSlice";
import api from "../services/api";

export const ApiContext = createContext({});

export const ApiProvider = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const month = useSelector((state) => state.calendar.selectedMonth);
  const token = useSelector((state) => state.auth.token);

  const resetUser = () => {
    dispatch(clearUser());
    history.push("/login");
  };

  const getAll = async () => {
    try {
      const { data } = await api.get(`/calendar/data?month=${month}`, {
        headers: { "x-access-token": token },
      });
      dispatch(setAll(data));
    } catch (e) {
      console.error(e);
      if (e.response.status === 401) resetUser();
    }
  };

  const addAct = async (act) => {
    try {
      const { data } = await api.post("/activities", act, {
        headers: { "x-access-token": token },
      });
      dispatch(addActivity({ ...act, _id: data._id }));
    } catch (e) {
      console.error(e);
    }
  };
  const deleteAct = async (id) => {
    try {
      const { data } = await api.delete("/activities", {
        headers: {
          "x-access-token": token,
        },
        data: { id: id },
      });
      dispatch(deleteActivity({ _id: id }));
    } catch (e) {
      console.error(e);
    }
  };

  const addM = async (meal) => {
    try {
      const { data } = await api.post("/meals", meal, {
        headers: { "x-access-token": token },
      });
      dispatch(addMeal({ ...meal, _id: data._id }));
    } catch (e) {
      console.error(e);
    }
  };

  const deleteM = async (id) => {
    try {
      const { data } = await api.delete("/meals", {
        headers: {
          "x-access-token": token,
        },
        data: { id: id },
      });
      dispatch(deleteMeal({ _id: id }));
    } catch (e) {
      console.error(e);
    }
  };

  const addSymp = async (symp) => {
    try {
      const { data } = await api.post("/symptoms", symp, {
        headers: { "x-access-token": token },
      });
      dispatch(addSymptom(data));
    } catch (e) {
      console.error(e);
    }
  };

  const deleteSymp = async (id) => {
    try {
      const { data } = await api.delete("/symptoms", {
        headers: {
          "x-access-token": token,
        },
        data: { id: id },
      });
      dispatch(deleteSymptom(id));
    } catch (e) {
      console.error(e);
    }
  };

  const addPeriod = async (per) => {
    try {
      const { data } = await api.post("/menstruation", per, {
        headers: { "x-access-token": token },
      });
      dispatch(addMenstruation(data));
    } catch (e) {
      console.error(e);
    }
  };

  const deletePeriod = async (id) => {
    try {
      const { data } = await api.delete("/menstruation", {
        headers: { "x-access-token": token },
        data: { _id: id },
      });
      dispatch(deleteMenstruation({ _id: id }));
    } catch (e) {
      console.error(e);
    }
  };

  let a = {
    getAll,
    addAct,
    deleteAct,
    addM,
    deleteM,
    addSymp,
    deleteSymp,
    addPeriod,
    deletePeriod,
  };
  return <ApiContext.Provider value={a}>{props.children}</ApiContext.Provider>;
};
