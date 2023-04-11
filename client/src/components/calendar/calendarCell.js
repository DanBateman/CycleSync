import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography, Chip } from '@mui/material';
import ActivityChip from './activityChip';
import MealChip from './mealChip';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDay } from './calendarSlice';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 120,
  width: 120,
  m: 0.1,
  borderStyle: 'solid',
  borderWidth: '2px',
  // transition: "all .1s ease-in-out",
  // "&:hover": {
  //   transform: "scale(1.02)",
  // },
};

const phases = {
  follicular: '#c953ed',
  ovulation: '#53c9ed',
  luteal: '#ede353',
  menstruation: '#ed5353',
};

const flow = {
  0: '#f7c6c8',
  1: '#f5abae',
  2: '#f58c90',
};

const dayLookup = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thur',
  5: 'Fri',
  6: 'Sat',
};

const border = {
  borderWidth: '1px',
  width: '2rem',
  borderRadius: '50%',
  background: '#ad0a85',
  color: 'white',
}; //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);' };

const CalendarCell = (props) => {
  // Props will contain all information to generate
  let today = new Date();
  let monthCheck = props.day.getMonth() !== today.getMonth();
  let todayCheck = props.day.getDate() == today.getDate() && monthCheck;
  const dispatch = useDispatch();
  const lastMenstrualStart = useSelector((state) => state.calendar.lastMenstrualStart);
  const activities = useSelector((state) => state.calendar.activities);
  const meals = useSelector((state) => state.calendar.meals);
  const symptoms = useSelector((state) => state.calendar.symptoms);
  const activitiesToday = activities.filter((el) => {
    let day = new Date(el.date);
    return day.getDate() == props.day.getDate() && day.getMonth() == props.day.getMonth();
  });
  const mealsToday = meals.filter((el) => {
    let day = new Date(el.date);
    return day.getDate() == props.day.getDate() && day.getMonth() == props.day.getMonth();
  });
  const symptomsToday = symptoms.filter((el) => new Date(el.date).getDate() == props.day.getDate());

  let menstrualStyles = {
    background: `linear-gradient(180deg, white 30%, ${flow[2]})`,
  };
  let notMonth = {
    background: 'rgba(79, 77, 78 .5)',
  };

  let menstrualCheck = props.day.getDate() <= new Date(lastMenstrualStart).getDate() + 7;

  return (
    <Box>
      <Box
        sx={{
          ...styles,
          ...(menstrualCheck && menstrualStyles),
          ...(monthCheck && notMonth),
        }}
        onClick={() => dispatch(setSelectedDay(props.day))}
      >
        {/* {dayLookup[props.day.getDay()]} */}
        <Box>
          <Typography
            variant="h6"
            align="center"
            sx={{
              width: 'fit-content',
              ml: todayCheck ? 0.25 : 0.75,
              mt: 0.2,
              ...(todayCheck && border),
            }}
          >
            {props.day.getDate()}
          </Typography>
          <Box
            sx={{
              zIndex: 1,
              background: symptomsToday.length > 0 && phases[symptomsToday[0].flow],
              height: '2.5px',
              width: '100%',
            }}
          ></Box>
        </Box>
        <Box sx={{ mx: 0.25 }}>
          {activitiesToday.map((el, ind) => {
            return <ActivityChip key={`act-${ind}`} data={el} label={ind + 1} />;
          })}
        </Box>
        <Box sx={{ mx: 1 }}>
          {mealsToday.map((el, ind) => {
            return <MealChip key={`meal-${ind}`} data={el} label={ind + 1} />;
          })}
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default CalendarCell;
