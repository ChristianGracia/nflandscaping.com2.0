import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    // primary: {
    //   main: purple[500],
    // },
    // secondary: {
    //   main: green[500],
    // },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: {
      textTransform: "none",
    },
  },
};

export default lightThemeOptions;
