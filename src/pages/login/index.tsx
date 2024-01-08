import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { StyledBackground } from "../../shared/style-components/styledBackground";
import LoginForm from "./components/loginForm";
import Image from "../../shared/style-components/Image";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { motion } from "framer-motion";
import "../../shared/styles/button.css";
import Fab from "@mui/material/Fab";

export default function Login() {
  return (
    <>
      <StyledBackground>
        <Stack
          width={{ md: "100%" }}
          height={{ md: "100%" }}
          alignItems={{ md: "flex-end" }}
        >
          <Box
            style={{
              width: "100%",
              filter: "drop-shadow(-3px 3px 10px  #f2e6e1)",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              flexDirection={"row"}
              color={"#fff"}
              alignItems={"flex-end"}
              // height={"550px"}
              // borderRadius={"15px"}
              // position={"absolute"}
              // alignItems={"center"}
              justifyContent={"center"}
              // top={0}
              // mt={"30px"}
              sx={{
                width: { xs: "100vw", lg: "100%" },
                height: { xs: "100vh", lg: "100vh" },
                opacity: { xs: 1, md: 1 },
                // boxShadow: { xs: 5, md: 5, lg: 5, xl: 5 },
                border: "transparent",
                // borderRadius: "20px",
                zIndex: { xs: 0, md: "999" },
                clipPath: { xs: 0, md: "circle(50% at 94% 53%)" },
              }}
            >
              <Box
                bgcolor={"#fff"}
                color={"#000"}
                width={"100%"}
                boxShadow={5}
                // borderRadius={"2rem"}
                sx={{
                  height: { xs: "100%", md: "100%" },
                  justifyContent: "space-evenly",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Stack
                  flexDirection={"column"}
                  alignItems={{ xs: "center", md: "flex-end" }}
                  justifyContent={"center"}
                  mr={{ xs: 0, md: "11vw" }}
                >
                  <Image />
                </Stack>
                <Stack
                  alignItems={{ xs: "center", md: "flex-end" }}
                  mr={{ xs: 0, md: "9vw" }}
                  my={"5px"}
                  textAlign={"center"}
                >
                  <Typography
                    color={"#333"}
                    fontSize={"3em"}
                    fontWeight={"bold"}
                    variant="inherit"
                  >
                    Bienvenido! <WavingHandIcon fontSize="inherit" />
                  </Typography>
                </Stack>
                <Stack
                  alignItems={{ xs: "center", md: "flex-end" }}
                  mr={{ xs: 0, md: 8 }}
                  my={"5px"}
                  textAlign={"center"}
                >
                  <Typography
                    color={"#333"}
                    fontSize={{ xs: "1.8vh", md: "1.1vw" }}
                    fontStyle={"italic"}
                    variant="inherit"
                  >
                    Por favor ingrese los datos correspondientes para continuar
                  </Typography>
                </Stack>
                <Stack alignItems={{ xs: "center", md: "flex-end" }} mx={3}>
                  <LoginForm />
                </Stack>
                {/* <a style={{ color: "#000" }} href="/pruebas.html">
                  pruebas
                </a> */}
                <Stack
                  mb={2}
                  justifyContent="center"
                  alignItems={{ xs: "center", md: "flex-end" }}
                  mr={{ xs: 0, md: 18 }}
                >
                  <Typography
                    variant="body2"
                    fontSize={{ xs: "1.8vh", md: "1.1vw" }}
                    textAlign="center"
                    display={"flex"}
                    flexDirection={"row"}
                  >
                    <CopyrightIcon
                      sx={{
                        color: "#E84730",
                        fontWeight: "bold",
                        fontSize: { md: "1.3vw" },
                      }}
                    />
                    Universidad Bolivariana de Venezuela <br /> del Estado
                    Monagas-
                    {new Date().getFullYear()}
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </StyledBackground>
    </>
  );
}
