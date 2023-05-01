import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  TextField,
  Checkbox,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { ApiContext } from "../../contexts/api-context";
import Tags from "../calendarView/activityTag";
import DatePicker from "./datePicker";
import moment from "moment";

const AddForm = (props) => {
  const number = /^[0-9]*$/;
  const month = useSelector((state) => state.calendar.selectedMonth);
  const api = useContext(ApiContext);
  const [date, setDate] = useState(moment().set("month", month));
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [tags, setTags] = useState([]);
  const [flow, setFlow] = useState("light");
  const periodAddCheck = props.type.includes("period");

  const handleDateChange = (e) => {
    setDate(e);
  };

  const handleFlowChange = (e) => {
    setFlow(e.target.value);
  };

  const requestSwitch = (type, body) => {
    if (type.includes("activit")) return api.addAct(body);
    if (type.includes("meal")) return api.addM(body);
    if (type.includes("symptom")) return api.addSymp(body);
    if (type.includes("period")) return api.addPeriod(body);
    return console.error("Default Case");
  };

  const save = (data) => {
    let body = {
      date: date.toDate().toDateString(),
      ...(!periodAddCheck && { desc: title }),
      ...(props.type.includes("activit") && { duration: duration }),
      ...data,
    };
    if (date.isBefore(moment())) {
      requestSwitch(props.type, body);
    }
    setDate(moment().set("month", month));
    setDuration("");
    setTags([]);
    setTitle("");
    setFlow("light");
  };
  return (
    <Paper
      elevation={8}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mx: "auto",
        p: 2,
      }}
    >
      <DatePicker date={date} setDate={handleDateChange} />
      {!periodAddCheck && (
        <TextField
          label={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ m: 1, width: "250px" }}
        />
      )}
      {props.type.includes("activity") && (
        <TextField
          label={"Duration"}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          onKeyDown={(e) => {
            if (
              !number.test(e.key) &&
              !(e.key === "Backspace" || e.key === "Tab")
            )
              e.preventDefault();
          }}
          onKeyUp={(e) => {
            if (!number.test(e.key)) e.preventDefault();
          }}
          sx={{ m: 1, width: "250px" }}
        />
      )}
      {!periodAddCheck && (
        <Tags tags={tags} type={props.type} saveFunc={save} />
      )}
      {periodAddCheck && (
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="flow-select-label">Flow</InputLabel>
          <Select
            labelId="flow-select-label"
            id="flow-select"
            value={flow}
            onChange={handleFlowChange}
            label="Flow"
          >
            <MenuItem value={"light"}>Light</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"heavy"}>Heavy</MenuItem>
          </Select>
        </FormControl>
      )}

      {periodAddCheck && (
        <Box sx={{ display: "flex", flexDirection: "row-reverse", m: 1 }}>
          <Button variant="contained" onClick={() => save({ flow: flow })}>
            ADD
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default AddForm;
