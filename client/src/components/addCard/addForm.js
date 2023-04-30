import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, TextField, Checkbox } from '@mui/material';
import { ApiContext } from '../../contexts/api-context';
import Tags from '../calendarView/activityTag';
import DatePicker from './datePicker';
import moment from 'moment';

const AddForm = (props) => {
  const addType = useSelector((state) => state.calendar.selectedAdd);
  const api = useContext(ApiContext);
  const [date, setDate] = useState(moment());
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [first, setFirst] = useState(false);
  const [tags, setTags] = useState([]);

  const handleDateChange = (e) => {
    setDate(e);
  };

  useEffect(() => {}, [addType]);

  const save = (data) => {
    let body = {
      date: date.toDate().toDateString(),
      desc: title,
      ...(props.type.includes('activit') && { duration: duration }),
      ...data,
    };
    console.log(body);
    api.addAct(body);
    //send api req
  };

  return (
    <Paper
      elevation={8}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mx: 'auto',
        p: 2,
      }}
    >
      <Checkbox value={first} />
      <DatePicker date={date} setDate={handleDateChange} />
      <TextField
        label={'Title'}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ m: 1, width: '250px' }}
      />
      {props.type.includes('activity') && (
        <TextField
          label={'Duration'}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          sx={{ m: 1, width: '250px' }}
        />
      )}
      <Tags tags={tags} type={props.type} saveFunc={save} />
    </Paper>
  );
};

export default AddForm;
