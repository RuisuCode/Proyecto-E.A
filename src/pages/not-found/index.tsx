import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function notFound() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
        <Typography variant="h1">Epa! Aqui no eh!</Typography>
        <Box m={2}>
          <Button variant="contained" onClick={() => navigate(-1)}>
            Volver
          </Button>
        </Box>
      </Stack>
    </>
  );
}
