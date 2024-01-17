import { ThemeOptions } from "@mui/material";

// See https://coolors.co/visualizer/f0ead2-dde5b6-adc178-a98467-6c584c for palette

export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      light: "#dde5b6",
      main: "#adc178", // Olivine
      dark: "#6d803b",
    },
    secondary: {
      light: "#ae998c",
      main: "#6c584c", // Umber
      dark: "#40352e",
    },
    // error: {
    //   main: "#2962ff",
    // },
    // warning: {
    //   main: "#2962ff",
    // },
    // info: {
    //   main: "#2962ff",
    // },
    // success: {
    //   main: "#2962ff",
    // },
    text: {
      secondary: "#40352e", // Dark Umber
      primary: "#40352e", // Dark Umber
    },
    background: {
      default: "#f0ead2", // Parchment
      paper: "#f0ead2",
    },
  },
};
