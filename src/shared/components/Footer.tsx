import { Box, Stack, Typography } from "@mui/material";
import Logoubv from "../assets/cropped-logo-estandarte-ubv-4.png";
import deltaAtletics from "../assets/banner-sinfondo.png";

export default function Footer() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        width={"100%"}
        mt={1}
        sx={{
          backgroundColor: "transparent",
          paddingY: 1,
          paddingX: 2,
          position: "relative",
          bottom: "0.1",
          minHeight: "200",
        }}
      >
        <Box>
          <Box component="img" src={deltaAtletics} sx={{ width: "13em" }} />
        </Box>

        <Stack alignItems="center">
          <Typography
            fontWeight={600}
            sx={{ textShadow: " 0px 3px  #f5f5f5 " }}
            fontSize="14px"
          >
            Universidad Bolivariana del estado Monagas
          </Typography>
          <Typography fontSize="12px" sx={{ textShadow: " 0px 3px  #f5f5f5 " }}>
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
