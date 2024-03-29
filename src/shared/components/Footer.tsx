import { Box, Stack, Typography } from "@mui/material";
// import Logoubv from "../assets/cropped-logo-estandarte-ubv-4.png";
// import deltaAtletics from "../assets/banner-sinfondo.png";

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
          backgroundColor: "#f8e6d9",
          paddingY: 1,
          paddingX: 2,
          position: "relative",
          bottom: 0,
          minHeight: "100px",
          border: "solid 1px rgba(0, 0, 0, 0.14)",
          borderInline: "none",
          borderBottom: "none",
        }}
      >
        <Box>
          <Box sx={{ width: "13em" }} /> {/* component=img */}
        </Box>

        <Stack textAlign={"center"} height={"50px"} justifyContent={"center"}>
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
          <Box sx={{ width: "13em" }} />
        </Box>
      </Stack>
    </>
  );
}
