import React from 'react';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSelectedActivity,
  setSelectedMeal,
  setSelectedAdd,
  setSelectedSymptom,
} from '../calendar/calendarSlice';
import View from './view';
import AddView from '../addCard/addView';

const CellViewer = () => {
  const dispatch = useDispatch();
  const selectedActivity = useSelector((state) => state.calendar.selectedActivity);
  const selectedMeal = useSelector((state) => state.calendar.selectedMeal);
  const selectedSymptom = useSelector((state) => state.calendar.selectedSymptom);
  const selectedAdd = useSelector((state) => state.calendar.selectedAdd);

  const activityOnClick = () => {
    dispatch(setSelectedActivity(null));
  };
  const mealOnClick = () => {
    dispatch(setSelectedMeal(null));
  };
  const symptomOnClick = () => {
    dispatch(setSelectedSymptom(null));
  };
  const addOnClick = () => {
    dispatch(setSelectedAdd(null));
  };
  return (
    <Box sx={{ display: 'flex', height: '90%', width: '90%', alignItems: 'center' }}>
      {selectedActivity && (
        <View label={'Activities'} customClick={activityOnClick} cards={selectedActivity} />
      )}
      {selectedMeal && <View label={'Meals'} customClick={mealOnClick} cards={selectedMeal} />}
      {selectedSymptom && (
        <View label={'Symptoms'} customClick={symptomOnClick} cards={selectedSymptom} />
      )}
      {selectedAdd && <AddView label={'Add new ' + selectedAdd} customClick={addOnClick} />}
    </Box>
  );
};

export default CellViewer;
