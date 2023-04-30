import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useEffect, useState } from 'react';
import CalendarRow from './calendarRow';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useSelector, useDispatch } from 'react-redux';
import { incrementMonth, decrementMonth, setSelectedAdd } from '../calendar/calendarSlice';

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

  const variant = {
    symptom: '#fcef83', //#ffef73
    activity: '#d1a8e3', //#ca84e8
    meal: '#a3e6a4', //#84e89d
  };

  useEffect(() => {
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
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 0.5,
          }}
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
          return <CalendarRow key={ind} chunk={el} first={ind === 0} />;
        })}
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography>meal</Typography>
          <IconButton onClick={() => dispatch(setSelectedAdd('meal'))}>
            <AddCircleIcon sx={{ color: variant.meal }}></AddCircleIcon>
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography>activity</Typography>
          <IconButton onClick={() => dispatch(setSelectedAdd('activity'))}>
            <AddCircleIcon sx={{ color: variant.activity }}></AddCircleIcon>
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography>symptom</Typography>
          <IconButton onClick={() => dispatch(setSelectedAdd('symptom'))}>
            <AddCircleIcon sx={{ color: variant.symptom }}></AddCircleIcon>
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography>period</Typography>
          <IconButton onClick={() => dispatch(setSelectedAdd('period'))}>
            <AddCircleIcon sx={{ color: variant.symptom }}></AddCircleIcon>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CalendarContainer;
