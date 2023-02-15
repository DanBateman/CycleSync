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
      main: "#00947a",
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  fontFamily: "Source Sans Pro",
  typography: {
    fontFamily: "Source Sans Pro",
    button: {
      fontFamily: "Open Sans",
    },
  },
});

export default themeOptions;
