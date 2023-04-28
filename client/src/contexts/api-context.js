import React, { createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setAll, addActivity } from '../components/calendar/calendarSlice';
import { clearUser } from '../components/auth/authSlice';
import api from '../services/api';

export const ApiContext = createContext({});

export const ApiProvider = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);

  const resetUser = () => {
    dispatch(clearUser());
    history.push('/login');
  };

  const getAll = async () => {
    try {
      const { data } = await api.get('/calendar/data', {
        headers: { 'x-access-token': token },
      });
      dispatch(setAll(data));
    } catch (e) {
      console.error(e);
      if (e.response.status === 401) resetUser();
    }
  };

  const addAct = async (act) => {
    try {
      // const { data } = await api.post(
      //   '/activities',
      //   {
      //     headers: { 'x-access-token': token },
      //   },
      //   act
      // );
      dispatch(addActivity(act));
    } catch (e) {
      console.error(e);
    }
  };

  let a = {
    getAll,
    addAct,
  };
  return <ApiContext.Provider value={a}>{props.children}</ApiContext.Provider>;
};
