import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
/* local */

/* icons */

import HandymanIcon from "@mui/icons-material/Handyman";

export default function maintenance() {
  return (
    <>
      <Stack
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ background: "#f8e6d9" }}
      >
        <HandymanIcon
          color="primary"
          sx={{
            fontSize: "20em",
          }}
        />
        <Typography
          letterSpacing={4}
          fontWeight={"bold"}
          align="center"
          fontSize={{ md: "30px", xs: "22px" }}
          color={"#1b2431"}
          sx={{ textShadow: "5px 5px 5px #F39E91" }}
        >
          Servicio en mantenimiento
        </Typography>
        {/*     <Stack width={"80%"} alignItems={"center"} height={"100%"}>
        </Stack> */}
      </Stack>
    </>
  );
}
