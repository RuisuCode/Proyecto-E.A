import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  components: {
    MUIDataTable: {
      styleOverrides: {
        root: {
          backgroundColor: "#red",
          width: "100%",
          borderRadius: "13px",
        },
        /* paper: {
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }, */
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5",
          borderRadius: "13px",
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          textAlign: "center",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "purple",
        },
        root: {
          // textAlign: "center",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {},
      },
    },
    MUIDataTableSelectCell: {
      styleOverrides: {
        headerCell: {
          backgroundColor: "white",
        },
      },
    },
    MuiTableFooter: {
      styleOverrides: {
        root: {
          "& .MuiToolbar-root": {
            backgroundColor: "white",
          },
        },
      },
    },
  },
});
