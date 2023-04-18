import React from 'react';
import { Paper, TextField, Box, IconButton } from '@mui/material';
import Tags from './activityTag';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { deleteActivity } from '../calendar/calendarSlice';

const Card = (props) => {
  const dispatch = useDispatch();
  console.log(props);
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
        <IconButton onClick={() => dispatch(deleteActivity({ id: props.act.id }))}>
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
