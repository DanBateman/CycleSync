import React from "react";
import { Chip, Icon, IconButton } from "@mui/material";
import DirectionsRunRoundedIcon from "@mui/icons-material/DirectionsRunRounded";
import { useDispatch } from "react-redux";
import { setSelectedActivity } from "./calendarSlice";

const ActivitiesChip = (props) => {
  // props.data = activity data
  const dispatch = useDispatch();
  return (
    // <DirectionsRunRoundedIcon />
    // <IconButton size="small">
    //   <DirectionsRunRoundedIcon />
    // </IconButton>
    <Chip
      // icon={<DirectionsRunRoundedIcon fontSize="small" sx={{ m: 0, p: 0 }} />}
      label={props.label}
      onClick={(event) => {
        console.log(props.data);
        dispatch(setSelectedActivity(props.data));
        event.stopPropagation();
      }}
      size="small"
      color="neutral"
      sx={{ mx: 0.25, border: 1 }}
    />
  );
};

export default ActivitiesChip;
