import { createTheme } from "@mui/material";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/900.css";
import "@fontsource/nunito/500-italic.css";
import { esES } from "@mui/x-date-pickers/locales";
import { esES as dataGridesEs } from "@mui/x-data-grid";
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
            scrollbarColor: "#fffff #f8e6d9",
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
            /*   "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#2b2b2b",
            }, */
          },
        },
      },
    },
  },
  esES,
  dataGridesEs
);

export { theme };
