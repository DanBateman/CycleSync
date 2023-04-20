import React, { createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAll, addActivity } from '../components/calendar/calendarSlice';
import api from '../services/api';

export const ApiContext = createContext({});

export const ApiProvider = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const getAll = async () => {
    try {
      const { data } = await api.get('/calendar/data', {
        headers: { 'x-access-token': token },
      });
      dispatch(setAll(data));
    } catch (e) {
      console.error(e);
    }
  };

  const addActivity = async (act) => {
    try {
      const { data } = await api.post(
        '/activities',
        {
          headers: { 'x-access-token': token },
        },
        act
      );
      dispatch(addActivity(data));
    } catch (e) {
      console.error(e);
    }
  };

  let a = {
    getAll,
  };
  return <ApiContext.Provider value={a}>{props.children}</ApiContext.Provider>;
};
