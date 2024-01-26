import { Box, Stack, Typography } from "@mui/material";
import Logoubv from "../assets/cropped-logo-estandarte-ubv-4.png";
import deltaAtletics from "../assets/banner.png";

export default function Footer() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        width={"100%"}
        sx={{
          backgroundColor: "#fff",
          paddingY: 1,
          paddingX: 2,
          position: "relative",
          bottom: 0,
          minHeight: "17vh",
        }}
      >
        <Box>
          <Box component="img" src={deltaAtletics} sx={{ width: "13em" }} />
        </Box>

        <Stack alignItems="center">
          <Typography fontWeight={600} fontSize="14px">
            Universidad Bolivariana del estado Monagas
          </Typography>
          <Typography fontSize="12px">
            Todos los derechos reservados. © {new Date().getFullYear()}
          </Typography>
        </Stack>

        <Box sx={{ height: "60", width: "220px" }}>
          <Box component="img" src={Logoubv} sx={{ width: "13em" }} />
        </Box>
      </Stack>
    </>
  );
}
