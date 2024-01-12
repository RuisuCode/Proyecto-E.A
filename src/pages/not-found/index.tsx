import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import "../../shared/styles/notfound.css";

export default function notFound() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  return (
    <>
      <Box textAlign={"center"} className="notfound-ext">
        <Box className="notfound">
          <Box className="notfound-404">
            <h1>404</h1>
            <h2>Pagina no encontrada</h2>
          </Box>
        </Box>
        <Stack alignItems={"center"} width={"100vw"}>
          <Button
            sx={{
              height: "6vh",
              position: "absolute",
              bottom: "30vh",
            }}
            className="learn-more"
            onClick={() => navigate(-1)}
          >
            Volver
          </Button>
        </Stack>
      </Box>
    </>
  );
}
