import React, { useEffect, useState } from "react";
import { Box, Divider, Paper } from "@mui/material";
import CalendarContainer from "../components/calendar/calendarContainer";
import api from "../services/api";

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
    <Box sx={{ display: "flex" }}>
      <CalendarContainer act={activities} />
      <Divider orientation="vertical" variant="middle" flexItem />
      <Box sx={{ width: "30%" }}>
        <Paper sx={{ m: 2, height: "80%" }} elevation={8}></Paper>
      </Box>
    </Box>
  );
};

export default CalendarPage;
