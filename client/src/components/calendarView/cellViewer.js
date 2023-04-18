import { Box, TextField, Typography, FormControl, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateActivity,
  setSelectedActivity,
  setSelectedMeal,
  updateMeal,
  saveMeal,
} from '../calendar/calendarSlice';
import DayView from './dayView';
import ActivityView from './activityView';
import View from './view';

const CellViewer = () => {
  const dispatch = useDispatch();
  const selectedActivity = useSelector((state) => state.calendar.selectedActivity);
  const selectedMeal = useSelector((state) => state.calendar.selectedMeal);

  const activityOnClick = () => {
    dispatch(setSelectedActivity(null));
  };
  const mealOnClick = () => {
    dispatch(setSelectedMeal(null));
  };

  const updateStagedMeal = (event, objKey) => {
    dispatch(updateMeal({ key: objKey, value: event.target.value }));
  };
  return (
    <Box sx={{ display: 'flex', height: '90%', width: '90%', alignItems: 'center' }}>
      {selectedActivity && (
        <View label={'Activities'} customClick={activityOnClick} cards={selectedActivity} />
      )}
      {selectedMeal && <View label={'Meals'} customCLick={mealOnClick} cards={selectedMeal} />}
    </Box>
  );
};

export default CellViewer;
