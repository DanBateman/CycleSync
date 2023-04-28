import React from 'react';
import { Box } from '@mui/material';
import ExerciseCard from './exerciseCard';
import FoodCard from './foodCard';
import AboutCard from './aboutCard';

const PhaseLinks = (props) => {
  // will render new paper with all the links
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        my: 2,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        transition: 'all .1s ease-in-out',
        p: 2,
      }}
    >
      <AboutCard topic={props.topic} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-between',
        }}
      >
        <ExerciseCard topic={props.topic} />
        <FoodCard topic={props.topic} />
      </Box>
    </Box>
  );
};

export default PhaseLinks;
