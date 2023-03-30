import React, { useEffect, useState } from "react";
import { Paper, Box, Typography } from "@mui/material";
import config from "../../config";
import CalendarContainer from "../calendar/calendarContainer";
import api from "../../services/api";

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
