import { createTheme } from "@mui/material/styles";
export let themeOptions = createTheme({
  //standard theme starts here
  palette: {
    mode: "light",
    primary: {
      main: "#FAA",
      light: "rgb(77, 129, 166)",
    },
    secondary: {
      main: "#8f61f2",
    },
    neutral: {
      main: "#80ffb3",
      light: "#80ffb3",
      contrastText: "#000000",
      dark: "#80ffb3",
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  fontFamily: "Source Sans Pro",
  typography: {
    fontFamily: "Questrial, Roboto, sans-serif",
    button: {
      fontFamily: "Questrial, Roboto, sans-serif",
    },
  },
});

export default themeOptions;
