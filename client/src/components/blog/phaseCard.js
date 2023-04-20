import React from "react";
import { Paper, Box, Typography } from "@mui/material";

const PhaseCard = (props) => {
  // will render new paper with all the links
  return (
    <Paper
      elevation={6}
      sx={{
        mx: "auto",
        my: 2,
        height: "250px",
        width: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "grey",
        transition: "all .1s ease-in-out",
        "&:hover": {
          transform: "scale(1.01)",
        },
      }}
      onClick={() => props.handleClick(props.label)}
    >
      <Typography variant="h5" sx={{ color: "white" }}>
        {props.label}
      </Typography>
    </Paper>
  );
};

export default PhaseCard;
