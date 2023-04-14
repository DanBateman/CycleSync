import { Box, IconButton, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import CalendarRow from './calendarRow';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const CalendarContainer = (props) => {
  const month = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };
  const perChunk = 7;
  let today = new Date();
  useEffect(() => {}, []);
  let arr = [...Array(42).keys()];
  const days = arr.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

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
        width: 'auto',
        height: 'auto',
      }}
    >
      <Box>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}
        >
          <IconButton>
            <ArrowLeftIcon />
          </IconButton>
          <Typography variant="h4">{month[today.getMonth()]}</Typography>
          <IconButton>
            <ArrowRightIcon />
          </IconButton>
        </Box>
      </Box>
      {days.map((el, ind) => {
        return <CalendarRow key={ind} chunk={el} first={ind == 0} />;
      })}
    </Box>
  );
};

export default CalendarContainer;
