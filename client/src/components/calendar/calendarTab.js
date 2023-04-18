import React from 'react';
import { Box } from '@mui/material';

const CalendarTab = (props) => {
  const variant = {
    symptom: '#fcef83', //#ffef73
    activity: '#d1a8e3', //#ca84e8
    meal: '#a3e6a4', //#84e89d
  };
  const style = {
    height: '20px',
    width: '10px',
    mt: 0.9,
    mr: 0.5,
    backgroundColor: variant[props.variant],
    borderRadius: '20%',
    cursor: 'pointer',
    transition: 'all .1s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  };
  return <Box sx={{ ...style }} onClick={(e) => props.customClick && props.customClick(e)} />;
};

export default CalendarTab;
