import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const CalendarCell = (props) => {
  // Props will contain all information to generate
  let today = new Date();
  const dayLookup = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thur",
    5: "Fri",
    6: "Sat",
  };

  return (
    <Box
      sx={{
        height: 150,
        width: 150,
        borderStyle: "solid",
        borderWidth: "2px",
        transition: "all .1s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
      onClick={() => console.log("You clicked " + props.day.getDate())}
    >
      {/* {dayLookup[props.day.getDay()]} */}
      <Box>
        <Typography sx={{ position: "absolute", zIndex: 1 }}>
          {props.day.getDate()}
        </Typography>
        <Box sx={{ background: "red", height: "5px", width: "auto" }}></Box>
      </Box>
      <Box>Cell Footer</Box>
    </Box>
  );
};

export default CalendarCell;
