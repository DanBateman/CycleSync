import React, { useEffect, useState } from "react";
import { Paper, Box, Divider } from "@mui/material";
import CalendarContainer from "../calendar/calendarContainer";
import CellViewer from "../calendarView/cellViewer";
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
    <Box
      sx={{
        display: "flex",
        my: 8,
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <CalendarContainer />
      <Divider
        flexItem
        orientation="vertical"
        variant="middle"
        sx={{ mx: 2 }}
      />
      <Paper sx={{ width: "700px", height: "500px" }} elevation={6}>
        <CellViewer />
      </Paper>
    </Box>
  );
};

export default CalendarPage;
