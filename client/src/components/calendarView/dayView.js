import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const DayView = () => {
  const day = useSelector((state) => state.selectedDay);
  const activities = useSelector((state) => state.calendar.activities);
  const meals = useSelector((state) => state.calendar.meals);
  return (
    <Box sx={{ my: 5 }}>
      <Typography>Day View</Typography>
      <Typography>{day}</Typography>
      <Box></Box>
    </Box>
  );
};

export default DayView;
