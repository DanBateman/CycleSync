import React, { useContext, useState } from "react";
import {
  Paper,
  TextField,
  Box,
  IconButton,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import Tags from "./activityTag";
import ClearIcon from "@mui/icons-material/Clear";
import DatePicker from "../addCard/datePicker";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteActivity, deleteMeal } from "../calendar/calendarSlice";
import { ApiContext } from "../../contexts/api-context";

const PeriodCard = (props) => {
  const api = useContext(ApiContext);
  const month = useSelector((state) => state.calendar.selectedMonth);
  const [date, setDate] = useState(moment(props.act.date));
  const dispatch = useDispatch();
  const [desc, setDesc] = useState(props.act.desc);
  const [duration, setDuration] = useState(props.act.duration);

  const selectDelete = (type) => {};

  const handleDateChange = (e) => {
    setDate(e);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mt: 1,
        mx: "auto",
        mb: "auto",
        p: 1.5,
      }}
    >
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "row-reverse" }}
      >
        <IconButton onClick={() => api.deletePeriod(props.act._id)}>
          <ClearIcon />
        </IconButton>
      </Box>
      <DatePicker date={date} setDate={handleDateChange} />
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="flow-select-label">Flow</InputLabel>
        <Select
          disabled={true}
          labelId="flow-select-label"
          id="flow-select"
          value={props.act.flow}
          label="Flow"
        >
          <MenuItem value={"light"}>Light</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"heavy"}>Heavy</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};

export default PeriodCard;
