import React, { useState } from 'react';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const DatePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        label="Select Date"
        inputFormat="MM/DD/YYYY"
        value={props.dateAdapter}
        onChange={props.setDate}
        sx={{ m: 1 }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
