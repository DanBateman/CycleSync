import React from "react";
import { Box } from "@mui/system";
import CalendarCell from "./calendarCell";

const CalendarRow = (props) => {
  // Props will contain all information to generate

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {props.chunk.map((el, ind) => {
        return <CalendarCell key={ind} day={el} />;
      })}
    </Box>
  );
};

export default CalendarRow;
