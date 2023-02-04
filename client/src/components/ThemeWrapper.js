import React from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import themeObject from "../styles/theme";

const ThemeWrapper = ({ children }) => {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={themeObject}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeWrapper;
