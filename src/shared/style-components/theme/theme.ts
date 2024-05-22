import { createTheme } from "@mui/material";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/900.css";
import "@fontsource/nunito/500-italic.css";
import { esES } from "@mui/x-date-pickers/locales";
const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#E84730", //E84730 color principal
        light: "#FFF3E0",
        dark: "#7c2d12",
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
      info: { main: "#fff" },
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
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: "transparent",
              width: "17px",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 15,
              backgroundColor: "#EB5D47",
              minHeight: 24,
              border: "3px solid #f5f5f5",
            },
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1050,
        lg: 1200,
        xl: 1536,
      },
    },
  },
  esES
);

export { theme };
