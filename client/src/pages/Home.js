import React from "react";
import { Paper, Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Paper sx={{ width: "fit-content", m: "auto" }}>
      <Box sx={{ width: "auto", height: "auto", m: "50px" }}>
        <Typography variant="h1">Home View</Typography>
      </Box>
    </Paper>
  );
};

export default HomePage;
