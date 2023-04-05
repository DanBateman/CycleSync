import { Paper, Box } from "@mui/material";
import React, { useEffect } from "react";
import CalendarHeader from "./calendarHeader";
import CalendarRow from "./calendarRow";

const CalendarContainer = (props) => {
  const perChunk = 7;
  //   let arr = Array.from({ length: 35 }, (_, i) => i + 1);
  let arr = [...Array(35).keys()];
  const days = arr.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    let today = new Date();
    let date = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - today.getDay() - 14 + item
    );
    // let date = new Date(today.getFullYear(), today.getMonth(), item);

    resultArray[chunkIndex].push(date);

    return resultArray;
  }, []);
  return (
    <Box
      sx={{
        width: "auto",
        height: "auto",
        m: 6,
      }}
    >
      <CalendarHeader />
      {days.map((el, ind) => {
        return <CalendarRow key={ind} chunk={el} />;
      })}
    </Box>
  );
};

export default CalendarContainer;
