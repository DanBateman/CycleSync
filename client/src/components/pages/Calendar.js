import React, { useEffect } from "react";
import axios from "axios"; // Will refactor to an api context
import { Paper, Box, Typography } from "@mui/material";

const getActivities = async () => {
  const activites = await axios({
    method: "get",
    url: "localhost:3100/api/calendar/activities",
    responseType: "application/json",
  });
  console.log(activites);
};

const CalendarPage = () => {
  useEffect(() => {
    getActivities();
  }, []);

  return (
    <Paper sx={{ width: "fit-content" }}>
      <Box sx={{ width: "auto", height: "auto", m: "50px" }}>
        <Typography variant="h1">Calendar View</Typography>
      </Box>
    </Paper>
  );
};

export default CalendarPage;
