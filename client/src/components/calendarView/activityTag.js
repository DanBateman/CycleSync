import React from 'react';
import { Box, Chip, Modal, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTag, addTag } from '../calendar/calendarSlice';

const Tags = (props) => {
  // const activity = useSelector((state) =>
  //   state.calendar.activities.find((el) => el.id == props.id)
  // );
  const dispatch = useDispatch();
  return (
    <Box sx={{ maxWidth: '250px', display: 'flex', my: 2 }}>
      <Typography sx={{ ml: 1 }}>Tags:</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 0.4 }}>
        {props.tags &&
          props.tags.map((tag, index) => (
            <Chip
              key={index}
              size="small"
              sx={{ mx: 0.1, mb: 0.5 }}
              color="primary"
              label={tag}
              onDelete={() => dispatch(deleteTag({ id: props.id, tag: tag, type: props.type }))}
            />
          ))}
        <AddCircleIcon color="primary" sx={{ my: 0 }} />
      </Box>
    </Box>
  );
};

export default Tags;
