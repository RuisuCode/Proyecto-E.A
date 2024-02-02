import Badge from "@mui/material/Badge/Badge";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Portal } from "@mui/base/Portal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { GridColDef } from "@mui/x-data-grid";
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridToolbar,
} from "@mui/x-data-grid";

// import { useDemoData } from '@mui/x-data-grid-generator';
/* local */

/* icons */
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

import HelpIcon from "@mui/icons-material/Help";
import React from "react";
export default function Atletas() {
  const todos = [
    {
      id: 1,
      name: "Juan Perez",
      ci: 9182792,

      fnac: "2022-03-01T14:48:00.000Z",
      catg: "Por definir",
    },
    {
      id: 2,
      name: "Benito Paez",
      ci: 9182792,
      fnac: "2022-03-01T14:48:00.000Z",
      catg: "Por definir",
    },
    {
      id: 3,
      name: "Simon Rodriguez",
      ci: 9182792,
      fnac: "2022-03-01T14:48:00.000Z",
      catg: "Por definir",
    },
    {
      id: 4,
      name: "Pedro Valdomero",
      ci: 9182792,
      fnac: "2022-03-01T14:48:00.000Z",
      catg: "Por definir",
    },
  ];

  // Otherwise filter will be applied on fields such as the hidden column id
  const columns: GridColDef[] = [
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
  ];

  function MyCustomToolbar(props: any) {
    return (
      <React.Fragment>
        <Portal container={() => document.getElementById("filter-panel")!}>
          <GridToolbarQuickFilter />
        </Portal>
        <GridToolbar {...props} />
      </React.Fragment>
    );
  }
  /*   const VISIBLE_FIELDS = [
    "name",
    "rating",
    "country",
    "dateCreated",
    "isAdmin",
  ]; */

  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          my={3}
          mt={{ xs: 6 }}
          sx={{ width: "80vw" }}
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
        <Stack
          my={3}
          bgcolor={"#fff"}
          p={2}
          borderRadius={"1em"}
          maxWidth={{ md: "70vw", xs: "auto" }}
          boxShadow={6}
        >
          <Grid container spacing={2}>
            <Grid item>
              <Box id="filter-panel" />
            </Grid>
            <Grid item style={{ height: 400, width: "100%" }}>
              <DataGrid
                style={{
                  borderRadius: "1em",
                  width: "auto",
                }}
                rows={todos}
                columns={columns}
                columnBuffer={2}
                columnThreshold={2}
                slots={{
                  toolbar: MyCustomToolbar,
                }}
                initialState={{
                  filter: {
                    filterModel: {
                      items: [],
                      quickFilterExcludeHiddenColumns: true,
                    },
                  },
                }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </>
  );
}
