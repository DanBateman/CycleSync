import React, { useContext, useState } from "react";
import { Paper, TextField, Box, IconButton } from "@mui/material";
import Tags from "./activityTag";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { deleteActivity, deleteMeal } from "../calendar/calendarSlice";
import { ApiContext } from "../../contexts/api-context";

const Card = (props) => {
  const api = useContext(ApiContext);
  const dispatch = useDispatch();
  const [desc, setDesc] = useState(props.act.desc);
  const [duration, setDuration] = useState(props.act.duration);

  const save = () => {};

  const selectDelete = (type) => {
    switch (type) {
      case "Activities":
        return api.deleteAct(props.act._id);
      case "Meals":
        return api.deleteM(props.act._id);
      case "Symptoms":
        return api.deleteSymp(props.act._id);
    }
  };

  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mt: 1,
        mx: 0.5,
        mb: "auto",
        p: 1.5,
      }}
    >
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "row-reverse" }}
      >
        <IconButton onClick={() => selectDelete(props.type)}>
          <ClearIcon />
        </IconButton>
      </Box>
      <TextField
        variant="standard"
        key="desc"
        size="large"
        sx={{ mx: 1, my: 1.5, width: "250px" }}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      {props.type === "Activities" && (
        <TextField
          variant="outlined"
          label="Duration"
          key="duration"
          sx={{ mx: 1, my: 1.5, width: "250px" }}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      )}
      <Tags tags={props.act.tags} type={props.type} />
    </Paper>
  );
};

export default Card;
