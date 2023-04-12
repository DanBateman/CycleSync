import React from "react";
import { Typography, Box, FormControl, TextField, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { updateActivity, saveActivity } from "../calendar/calendarSlice";

const ActivityView = () => {
  const activities = useSelector((state) => state.calendar.selectedActivity);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "90%",
        m: 2,
      }}
    >
      <Typography variant="h3" sx={{ m: 1 }}>
        Activities
      </Typography>
      {activities.map((act) => (
        <Box
          key={`act-${act.id}`}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <TextField
            variant="standard"
            key="desc"
            size="large"
            sx={{ m: 1, maxWidth: "250px" }}
            value={act.desc}
          />
          <TextField
            variant="outlined"
            label="Duration"
            key="duration"
            sx={{ m: 1, maxWidth: "250px" }}
            value={act.duration}
          />
        </Box>
      ))}
      <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button variant="contained">Save</Button>
      </Box>
    </Box>
  );
};

export default ActivityView;
