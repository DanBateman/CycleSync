import React from "react";
import { Box } from "@mui/system";
import { Typography, Chip } from "@mui/material";

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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 150,
        width: 150,
        borderStyle: "solid",
        borderWidth: "2px",
        background: "linear-gradient(180deg, white 60%, #f5dfe0)",
        transition: "all .1s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
      onClick={() => console.log("You clicked " + props.day.getDate())}
    >
      {/* {dayLookup[props.day.getDay()]} */}
      <Box>
        {/* <Typography
          sx={{
            m: 0.25,
            borderStyle: "solid",
            borderWidth: "2px",
            borderRadius: "50%",
            height: "24px",
            width: "24px",
          }}
          align="center"
        >
          {props.day.getDate()}
        </Typography> */}
        <Chip sx={{ zIndex: 2 }} label={props.day.getDate()} />
        <Box
          sx={{ zIndex: 1, background: "red", height: "5px", width: "100%" }}
        ></Box>
      </Box>
      <Box>hello</Box>
      <Box>hello</Box>
      <Box>Cell Footer</Box>
    </Box>
  );
};

export default CalendarCell;
