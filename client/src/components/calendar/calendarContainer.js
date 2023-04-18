import { Backdrop, Box, CircularProgress, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CalendarRow from './calendarRow';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useSelector, useDispatch } from 'react-redux';
import { incrementMonth, decrementMonth } from '../calendar/calendarSlice';

const CalendarContainer = (props) => {
  const perChunk = 7;
  let today = new Date();
  const dispatch = useDispatch();
  const mon = useSelector((state) => state.calendar.selectedMonth);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState([]);
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

  useEffect(() => {
    console.log(mon);
    let arr = [...Array(42).keys()];
    let d = arr.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      // First day of the month
      let beginning = new Date(today.getFullYear(), mon, 1);

      let date = new Date(
        today.getFullYear(),
        mon,
        beginning.getDate() - beginning.getDay() + item
      );
      // let date = new Date(today.getFullYear(), today.getMonth(), item);

      resultArray[chunkIndex].push(date);
      return resultArray;
    }, []);
    setLoading(false);
    setDays(d);
  }, [mon]);
  return (
    <Box
      sx={{
        width: 'auto',
        height: 'auto',
        minHeight: '575px',
      }}
    >
      <Box>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}
        >
          <IconButton
            onClick={() => {
              setLoading(true);
              dispatch(decrementMonth());
            }}
          >
            <ArrowLeftIcon />
          </IconButton>
          <Typography variant="h4">{month[mon]}</Typography>
          <IconButton
            onClick={() => {
              setLoading(true);
              dispatch(incrementMonth());
            }}
          >
            <ArrowRightIcon />
          </IconButton>
        </Box>
      </Box>
      {loading && <CircularProgress color="inherit" sx={{ m: 'auto' }} />}
      {!loading &&
        days.map((el, ind) => {
          return <CalendarRow key={ind} chunk={el} first={ind == 0} />;
        })}
    </Box>
  );
};

export default CalendarContainer;
