import { Box, TextField, Typography, FormControl, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateActivity,
  saveActivity,
  updateMeal,
  saveMeal,
} from "../calendar/calendarSlice";
import DayView from "./dayView";
import ActivityView from "./activityView";

const CellViewer = () => {
  const calendar = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const updateStagedMeal = (event, objKey) => {
    dispatch(updateMeal({ key: objKey, value: event.target.value }));
  };
  return (
    <Box>
      {calendar.selectedDay && <DayView />}
      {calendar.selectedActivity && <ActivityView />}
      {calendar.selectedMeal && (
        <FormControl sx={{ m: 1 }}>
          <TextField
            variant="outlined"
            label="Meal"
            value={calendar.selectedMeal ? calendar.selectedMeal.desc : ""}
            onChange={(e) => updateStagedMeal(e, "desc")}
          />
          <Button onClick={() => dispatch(saveMeal())}>Save</Button>
        </FormControl>
      )}
      {!(
        calendar.selectedActivity ||
        calendar.selectedDay ||
        calendar.selectedMeal
      ) && <Typography>Placeholder</Typography>}
    </Box>
  );
};

export default CellViewer;
