import { createTheme } from "@mui/material";
import "@fontsource/nunito/400.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#E84730",
      "50": "#fff7ed",
      "100": "#ffedd5",
      "200": "#fed7aa",
      "300": "#fdba74",
      "400": "#fb923c",
      "500": "#f97316",
      "600": "#ea580c",
      "700": "#c2410c",
      "800": "#9a3412",
      "900": "#7c2d12",
    },
    secondary: { main: "#fff" },
    info: { main: "#A970FF" },
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
