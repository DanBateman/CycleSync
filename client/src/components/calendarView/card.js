import React, { useState } from 'react';
import { Paper, TextField, Box, IconButton } from '@mui/material';
import Tags from './activityTag';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { deleteActivity, deleteMeal } from '../calendar/calendarSlice';

const Card = (props) => {
  const dispatch = useDispatch();
  const [desc, setDesc] = useState(props.act.desc);
  const [duration, setDuration] = useState(props.act.duration);

  const save = () => {};

  const selectDelete = (type) => {
    switch (type) {
      case type === 'Activities':
        return dispatch(deleteActivity({ id: props.act._id }));
      case type === 'Meals':
        return dispatch(deleteMeal({ id: props.act._id }));
      case type === 'Symptoms':
        break;
      default:
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
        value={desc}
      />
      {props.type === 'Activities' && (
        <TextField
          variant="outlined"
          label="Duration"
          key="duration"
          sx={{ mx: 1, my: 1.5, width: '250px' }}
          value={duration}
        />
      )}
      <Tags tags={props.act.tags} type={props.type} />
    </Paper>
  );
};

export default Card;
