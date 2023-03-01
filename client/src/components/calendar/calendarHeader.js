import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CalendarHeader = () => {
  const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  return (
    <Box sx={{ width: 1064, display: "flex", justifyContent: "space-evenly" }}>
      {days.map((el, ind) => {
        return (
          <Typography key={ind} variant="h7" sx={{ width: 152 }} align="center">
            {el}
          </Typography>
        );
      })}
    </Box>
  );
};

export default CalendarHeader;
