import React, { useEffect, useState } from "react";
import axios from "axios"; // Will refactor to an api context
import { Paper, Box, Typography } from "@mui/material";
import config from "../../config";

const api = axios.create({ baseURL: config.apiURL });

const CalendarPage = () => {
  const [activities, setActivities] = useState(null);

  const getActivities = async () => {
    const { data } = await api.get("/calendar/activities");
    setActivities(data);
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <Paper sx={{ width: "fit-content", m: "auto" }}>
      <Box sx={{ width: "auto", height: "auto", m: "50px" }}>
        <Typography variant="h1">Calendar View</Typography>
      </Box>
    </Paper>
  );
};

export default CalendarPage;
