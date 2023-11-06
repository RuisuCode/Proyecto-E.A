import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function InicioAdmin() {
  const navigate = useNavigate();
  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
        <h1>Dashboard</h1>
        <Box m={2}>
          <Button variant="contained" onClick={() => navigate(-1)}>
            Volver
          </Button>
        </Box>
      </Stack>
    </>
  );
}
