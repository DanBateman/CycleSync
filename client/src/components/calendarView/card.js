import React from 'react';
import { Paper, TextField, Box, IconButton } from '@mui/material';
import Tags from './activityTag';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { deleteActivity, deleteMeal, updateActivity, updateMeal } from '../calendar/calendarSlice';

const Card = (props) => {
  const dispatch = useDispatch();

  // switch statement for dispatch functions

  const selectAdd = (type) => {
    switch (type) {
      case type == 'Activities':
        break;
      case type == 'Meals':
        break;
      case type == 'Symptoms':
        break;
    }
  };

  const selectDelete = (type) => {
    console.log(type);
    dispatch(deleteMeal({ id: props.act._id }));
    switch (type) {
      case type == 'Activities':
        return dispatch(deleteActivity({ id: props.act._id }));
      case type == 'Meals':
        dispatch(deleteMeal({ id: props.act._id }));
      case type == 'Symptoms':
        break;
    }
  };

  return (
    <Paper
      elevation={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        mt: 1,
        mx: 0.5,
        mb: 'auto',
        p: 1.5,
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
        <IconButton onClick={() => selectDelete(props.type)}>
          <ClearIcon />
        </IconButton>
      </Box>
      <TextField
        variant="standard"
        key="desc"
        size="large"
        sx={{ mx: 1, my: 1.5, width: '250px' }}
        value={props.act.desc}
      />
      {props.type === 'Activities' && (
        <TextField
          variant="outlined"
          label="Duration"
          key="duration"
          sx={{ mx: 1, my: 1.5, width: '250px' }}
          value={props.act.duration}
        />
      )}
      <Tags tags={props.act.tags} id={props.act.id} />
    </Paper>
  );
};

export default Card;
