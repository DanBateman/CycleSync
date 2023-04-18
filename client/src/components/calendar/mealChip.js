import React from "react";
import { Chip } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSelectedMeal } from "./calendarSlice";

const MealChip = (props) => {
  // props.data = activity data
  const dispatch = useDispatch();
  return (
    <Chip
      label={props.label}
      onClick={(event) => {
        dispatch(setSelectedMeal(props.data));
        event.stopPropagation();
      }}
      size="small"
      color="secondary"
      sx={{ mx: 0.25, border: 1, borderColor: "black" }}
    />
  );
};

export default MealChip;
