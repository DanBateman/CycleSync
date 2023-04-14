import React from 'react';
import { Typography, Box, IconButton, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { updateActivity, saveActivity, setSelectedActivity } from '../calendar/calendarSlice';
import ActivityCard from './activityCard';
import ClearIcon from '@mui/icons-material/Clear';

const ActivityView = () => {
  const activities = useSelector((state) => state.calendar.selectedActivity);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '570px',
        width: '100%',
        m: '2',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ m: 0 }}>
          Activities
        </Typography>
        <IconButton onClick={() => dispatch(setSelectedActivity(null))}>
          <ClearIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          overflow: 'auto',
          my: 0.5,
          p: 1,
          '&::-webkit-scrollbar': {
            width: '0.4em',
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            borderRadius: '100px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            borderRadius: '100px',
          },
        }}
      >
        {activities.map((el) => (
          <ActivityCard key={`act-card-${el.id}`} act={el} />
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Button variant="contained">Save</Button>
      </Box>
    </Box>
  );
};

export default ActivityView;
