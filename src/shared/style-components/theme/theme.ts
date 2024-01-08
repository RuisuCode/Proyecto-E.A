import { createTheme } from "@mui/material";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/900.css";
import "@fontsource/nunito/500-italic.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#E84730", //E84730 color principal
      light: "#fff",
      "50": "#F9CEC8",
      "100": "#F39E91",
      "200": "#EF7E6C",
      "300": "#ED6D5A",
      "400": "#EB5D47",
      "500": "#E84730",
      "600": "#E73D23",
      "700": "#CA2E16",
      "800": "#9a3412",
      "900": "#7c2d12",
    },
    secondary: { main: "#5E6973" },
    info: { main: "#CA2E16" },
  },
  typography: {
    fontFamily: [
      "nunito",
      "Public Sans",
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
});

export { theme };
