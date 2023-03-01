import React, { useEffect, useState } from "react";
import axios from "axios"; // Will refactor to an api context
import { Paper, Box, Typography } from "@mui/material";
import config from "../../config";
import CalendarContainer from "../calendar/calendarContainer";

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
      <CalendarContainer />
    </Paper>
  );
};

export default CalendarPage;
