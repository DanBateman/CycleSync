import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { setMonth } from '../calendar/calendarSlice';
import { useDispatch } from 'react-redux';
import CalendarRow from '../calendar/calendarRow';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 80,
  width: 80,
  m: 0.1,
  borderStyle: 'solid',
  borderWidth: '2px',
  // transition: "all .1s ease-in-out",
  // "&:hover": {
  //   transform: "scale(1.02)",
  // },
};

const Week = (props) => {
  const dispatch = useDispatch();
  const lookBackText = `Don't forget to log your progress for `;
  const lookBackLink = 'last week';
  const lookAheadText = `Here's what you have planned so far`;
  const dayGenerator = (date) => {
    let sunday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
    let arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push(new Date(date.getFullYear(), date.getMonth(), sunday.getDate() + i));
    }
    return arr;
  };
  let days = dayGenerator(props.date);
  return (
    <Box>
      <Typography>{props.label}:</Typography>
      <Box>
        <CalendarRow chunk={days} first={false} size={'small'} />
      </Box>
      <Typography>
        {props.label == 'Look Ahead' ? lookAheadText : lookBackText}
        <Link to="/calendar" onClick={() => dispatch(setMonth(2))}>
          {props.label == 'Look Ahead' ? '' : lookBackLink}
        </Link>
        !
      </Typography>
    </Box>
  );
};

export default Week;
