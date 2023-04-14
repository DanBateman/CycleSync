import { Box, TextField, Typography, FormControl, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateActivity, saveActivity, updateMeal, saveMeal } from '../calendar/calendarSlice';
import DayView from './dayView';
import ActivityView from './activityView';

const CellViewer = () => {
  const selectedActivity = useSelector((state) => state.calendar.selectedActivity);
  const selectedMeal = useSelector((state) => state.calendar.selectedMeal);
  const selectedDay = useSelector((state) => state.calendar.selectedDay);
  const dispatch = useDispatch();

  const updateStagedMeal = (event, objKey) => {
    dispatch(updateMeal({ key: objKey, value: event.target.value }));
  };
  return (
    <Box sx={{ display: 'flex', height: '90%', width: '90%', alignItems: 'center' }}>
      {selectedDay && <DayView />}
      {selectedActivity && <ActivityView />}
      {selectedMeal && (
        <FormControl sx={{ m: 1 }}>
          <TextField
            variant="outlined"
            label="Meal"
            value={selectedMeal ? selectedMeal.desc : ''}
            onChange={(e) => updateStagedMeal(e, 'desc')}
          />
          <Button onClick={() => dispatch(saveMeal())}>Save</Button>
        </FormControl>
      )}
    </Box>
  );
};

export default CellViewer;
