import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      // main: "#808e95",
      light: "#4f5b62",
      main: "#263238",
      dark: "#000a12",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e5ffff",
      main: "#b2dfdb",
      dark: "#82ada9",
      contrastText: "#000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
