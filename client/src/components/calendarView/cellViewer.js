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

const CellViewer = () => {
  const calendar = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const updateStagedActivity = (event, objKey) => {
    dispatch(updateActivity({ key: objKey, value: event.target.value }));
  };
  const updateStagedMeal = (event, objKey) => {
    dispatch(updateMeal({ key: objKey, value: event.target.value }));
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {calendar.selectedDay && <DayView />}
      {calendar.selectedActivity && (
        <FormControl sx={{ m: 1 }}>
          <TextField
            variant="outlined"
            label="Activity"
            key="desc"
            value={
              calendar.selectedActivity ? calendar.selectedActivity.desc : ""
            }
            onChange={(e) => updateStagedActivity(e, "desc")}
          />
          <Button onClick={() => dispatch(saveActivity())}>Save</Button>
        </FormControl>
      )}
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
