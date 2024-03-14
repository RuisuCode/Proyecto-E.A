import Badge from "@mui/material/Badge/Badge";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import { Portal } from "@mui/base/Portal";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
/* import {
  DataGrid,
  GridToolbarQuickFilter,
  GridToolbar,
} from "@mui/x-data-grid"; */
import MUIDataTable from "mui-datatables";

/* local */

/* icons */
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

import HelpIcon from "@mui/icons-material/Help";
import React from "react";

declare module "@mui/material/styles" {
  interface Components {
    [key: string]: any;
  }
}

class BodyCellExample extends React.Component {
  getMuiTheme = () =>
    createTheme({
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
        MuiTableHead: {
          styleOverrides: {
            root: {
              textAlign: "center",
            },
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

  render() {
    const todos = [
      [1, "Juan Perez", 9182792, "2022-03-01T14", "Por definir"],
    ];
    const columns = [
      "ID",
      "Nombre",
      "Cedula",
      "Fecha de Nacimiento",
      "Acciones",
    ];
    const options = {
      filter: true,
      fixedHeader: true,
      FilterType: "dropdown",
      Responsive: "standard",
      textLabels: {
        body: {
          noMatch: "Lo sentimos, no pudimos encontrar ningún registro!",
        },
        pagination: {
          next: "Siguiente pagina",
          previous: "Pagina Anterior",
          rowsPerPage: "Filas por Pagina",
        },
      },
    };
    return (
      <ThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={"Atletas Por Nivel"}
          data={todos}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    );
  }
}

export default function AtletasNivel() {
  // Otherwise filter will be applied on fields such as the hidden column id
  /* const columns= [
    { field: "id", headerName: "ID", width: 90, flex: 0.1 },
    {
      field: "name",
      headerName: "Nombre",
      width: 200,
      editable: true,
      flex: 0.1,
    },
    {
      field: "ci",
      headerName: "Cedula",
      width: 200,
      editable: true,
      flex: 0.1,
    },
    {
      field: "fnac",
      headerName: "Fecha de nacimiento",
      type: "number",
      width: 220,
      editable: true,
      headerAlign: "center",
      flex: 0.1,
    },
    {
      field: "catg",
      headerName: "Categoria",
      type: "number",
      width: 210,
      editable: true,
      flex: 0.1,
    },
  ]; */

  /*   function MyCustomToolbar(props: any) {
    return (
      <React.Fragment>
        <Portal container={() => document.getElementById("filter-panel")!}>
          <GridToolbarQuickFilter />
        </Portal>
        <GridToolbar {...props} />
      </React.Fragment>
    );
  } */
  /*   const VISIBLE_FIELDS = [
    "name",
    "rating",
    "country",
    "dateCreated",
    "isAdmin",
  ]; */

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={{ xs: "100vw", lg: "100%" }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          my={5}
          sx={{ width: { md: "80vw", xs: "95vw" } }}
        >
          <Badge
            sx={{
              background: "#E84730",
              borderRadius: "10px",
              boxShadow: 4,
              height: 40,
              width: 280,
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <RecentActorsIcon sx={{ color: "#fff" }} fontSize="medium" />
            <Typography fontSize={"0.9em"} fontWeight={"bold"} color="#fff">
              <NavigateNextIcon />
            </Typography>
            <Typography
              fontSize={"0.9em"}
              fontWeight={"bold"}
              letterSpacing={1.5}
              color="#fff"
            >
              Listado de Atletas
            </Typography>
          </Badge>
          <Badge
            overlap="circular"
            sx={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "#E84730",
            }}
          >
            <HelpIcon
              fontSize="large"
              sx={{
                color: "#f5f5f5",
                boxShadow: 4,
                borderRadius: "50%",
                padding: 0,
                width: 40,
                height: 40,
              }}
            />
          </Badge>
        </Stack>
        <Stack width={{ xs: "95%", lg: "80%" }}>{<BodyCellExample />}</Stack>
      </Stack>
    </>
  );
}
