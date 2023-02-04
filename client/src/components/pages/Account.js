import React from "react";
import { Paper, Box, Typography } from "@mui/material";

const AccountPage = () => {
  return (
    <Paper sx={{ width: "fit-content" }}>
      <Box sx={{ width: "auto", height: "auto", m: "50px" }}>
        <Typography variant="h1">Account View</Typography>
      </Box>
    </Paper>
  );
};

export default AccountPage;
