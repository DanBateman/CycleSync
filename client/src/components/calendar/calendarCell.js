import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Typography, Chip, Modal } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import CellViewer from '../calendarView/cellViewer';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedMeal, setSelectedActivity, setSelectedDay } from './calendarSlice';
import { FaTint } from 'react-icons/fa';
import CalendarTab from './calendarTab';

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

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '60vw',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #31c3a6',
  boxShadow: '0 0 15px #31c3a650',
  pt: 4,
  pb: 7,
  px: 7,
  borderRadius: 2,
  display: 'flex',
  flexDirection: 'column',
};

const phases = {
  follicular: '#c953ed',
  ovulation: '#53c9ed',
  luteal: '#ede353',
  menstruation: '#ed5353',
};

const notMonth = {
  backgroundColor: 'rgba(117, 117, 114, 0.9)',
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

let menstrualStyles = {
  background: `linear-gradient(180deg, white 30%, ${flow[2]})`,
};

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const CalendarCell = (props) => {
  // Redux hooks
  const dispatch = useDispatch();
  // Seletors
  const lastMenstrualStart = useSelector((state) => state.calendar.lastMenstrualStart);
  const activities = useSelector((state) => state.calendar.activities);
  const meals = useSelector((state) => state.calendar.meals);
  const symptoms = useSelector((state) => state.calendar.symptoms);
  const mon = useSelector((state) => state.calendar.selectedMonth);
  // Aditional hooks
  const isMinWidth = useMediaQuery({ query: '(max-width: 1200px)' });
  const [open, setOpen] = useState(false);
  // Component variables
  let today = new Date();
  let lastPeriod = new Date(lastMenstrualStart);
  let nextPeriod = new Date(lastMenstrualStart).addDays(28);
  let monthCheck = props.day.getMonth() !== mon;
  let todayCheck = props.day.getDate() == today.getDate() && monthCheck;
  const activitiesToday = activities.filter(
    (el) => new Date(el.date).getDate() == props.day.getDate() && !monthCheck
  );
  const mealsToday = meals.filter(
    (el) => new Date(el.date).getDate() == props.day.getDate() && !monthCheck
  );
  const symptomsToday = symptoms.filter(
    (el) => new Date(el.date).getDate() == props.day.getDate() && !monthCheck
  );
  let menstrualCheck = props.day.getDate() <= lastPeriod.getDate() + 7 && !monthCheck;

  let nextPeriodCheck =
    props.day.getDate() == nextPeriod.getDate() && props.day.getMonth() == nextPeriod.getMonth();

  const close = () => {
    setOpen(false);
  };

  const activityOnClick = (e) => {
    e.stopPropagation();
    dispatch(setSelectedActivity(props.day.getDate()));
    if (isMinWidth) {
      setOpen(true);
    }
  };
  const mealOnClick = (e) => {
    e.stopPropagation();
    dispatch(setSelectedMeal(props.day.getDate()));
    if (isMinWidth) {
      setOpen(true);
    }
  };

  return (
    <Box sx={{ ...(monthCheck && notMonth) }}>
      <Box
        sx={{
          ...styles,
          ...(menstrualCheck && menstrualStyles),
        }}
        onClick={() => dispatch(setSelectedDay(props.day.toDateString()))}
      >
        <Box sx={{ display: 'flex' }}>
          <Typography
            variant="h6"
            align="center"
            sx={{
              width: 'fit-content',
              ml: todayCheck ? 0.25 : 0.75,
              mt: 0.2,
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
          <Box sx={{ display: 'flex', mr: 0.5 }}>
            {activitiesToday.length > 0 && (
              <CalendarTab variant="activity" customClick={activityOnClick} />
            )}
            {mealsToday.length > 0 && <CalendarTab variant="meal" customClick={mealOnClick} />}
            {symptomsToday.length > 0 && <CalendarTab variant="symptom" />}
          </Box>
        </Box>
        <Box>{nextPeriodCheck && <FaTint style={{ marginLeft: '5px' }} color="#fa6b7e" />}</Box>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ ...modalStyle }}>
          <>
            <CellViewer close={close} />
          </>
        </Box>
      </Modal>
    </Box>
  );
};

export default CalendarCell;
