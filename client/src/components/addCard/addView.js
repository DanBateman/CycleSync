import React, { useContext } from 'react';
import { ApiContext } from '../../contexts/api-context';
import { Box, IconButton, Typography, Paper, Button } from '@mui/material';
import DatePicker from './datePicker';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector } from 'react-redux';
import AddForm from './addForm';

const AddView = (props) => {
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
          {props.label}
        </Typography>
        <IconButton onClick={props.customClick}>
          <ClearIcon />
        </IconButton>
      </Box>
      <AddForm type={props.label} />
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}></Box>
    </Box>
  );
};

export default AddView;
