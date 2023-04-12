import React from "react";
import { Typography, Box, FormControl, TextField, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { updateActivity, saveActivity } from "../calendar/calendarSlice";

const ActivityView = () => {
  const calendar = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const updateStagedActivity = (event, objKey) => {
    dispatch(updateActivity({ key: objKey, value: event.target.value }));
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 2 }}>
      <Typography variant="h3">Activities</Typography>
      <FormControl sx={{ m: 1, width: "40%" }}>
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
    </Box>
  );
};

export default ActivityView;
