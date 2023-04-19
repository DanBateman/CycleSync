import React, { useEffect } from 'react';
import CalendarCell from './calendarCell';
import { Box, Typography } from '@mui/material';

const CalendarRow = (props) => {
  // Props will contain all information to generate
  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {props.chunk.map((el, ind) => {
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column' }} key={ind}>
            {props.first == true && (
              <Typography align="center" fontSize={12}>
                {days[ind]}
              </Typography>
            )}
            <CalendarCell day={el} size={props.size} />
          </Box>
        );
      })}
    </Box>
  );
};

export default CalendarRow;
