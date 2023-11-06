import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { StyledBackground } from "../../shared/style-components/theme/styledBackground";
import LoginForm from "./components/loginForm";
import Image from "../../shared/style-components/Image";

export default function Login() {
  return (
    <>
      <StyledBackground />
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          flexDirection={"row"}
          color={"#fff"}
          height={"550px"}
          borderRadius={"15px"}
          position={"absolute"}
          alignItems={"center"}
          justifyContent={"center"}
          top={0}
          mt={"30px"}
          sx={{
            width: { xs: "100vw", lg: "25%" },
            height: { xs: "100vh", lg: "560px" },
            opacity: { xs: 0.8, md: 0.9, lg: 0.9, xl: 0.9 },
            boxShadow: { xs: 5, md: 5, lg: 5, xl: 5 },
            mt: { xs: "1px", md: "50px", lg: "3%", xl: "90px" },
          }}
        >
          <Box
            bgcolor={"#fff"}
            color={"#000"}
            width={"100%"}
            borderRadius={"15px"}
            sx={{
              height: { xs: "100%", md: "100%" },
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundColor: { xs: "rgba(232,71,48,1)" },
                borderRadius: "15px",
                borderBottomRightRadius: { xs: 0, lg: 0 },
                borderBottomLeftRadius: { xs: 0, lg: 0 },
                height: "15px",
                position: "absolute",
                top: 0,
              }}
              color={"transparent"}
              width={"100%"}
            >
              .
            </Box>
            <Stack
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              my={4}
            >
              <Image />
            </Stack>
            <Stack my={"5px"} textAlign={"center"}>
              <Typography color={"#333"} fontSize={"16px"} variant="inherit">
                Sistema Administrativo <br /> de la Escuela de Atletismo
              </Typography>
            </Stack>
            <Stack mx={3}>
              <LoginForm />
            </Stack>
            <Stack mb={2} justifyContent="center" alignItems="center">
              <Typography variant="body2" textAlign="center">
                © Universidad Bolivariana de Venezuela <br /> del Estado
                Monagas-
                {new Date().getFullYear()}
              </Typography>
            </Stack>
            <Box
              sx={{
                backgroundColor: { xs: "rgba(232,71,48,1)" },
                borderRadius: "15px",
                borderTopRightRadius: { xs: 0, lg: 0 },
                borderTopLeftRadius: { xs: 0, lg: 0 },
                height: "15px",
                position: "absolute",
                bottom: "0",
                mb: 0,
              }}
              color={"transparent"}
              width={"100%"}
            >
              .
            </Box>
          </Box>
          {/* <Box
            textAlign={"center"}
            borderRadius={"15px"}
            minWidth={"59%"}
            // maxWidth={"100%"}
            sx={{
              width: { xs: 0, sm: 0, lg: "1" },
              height: { xs: 0, sm: 0, md: "100%", lg: "100%" },
              background: `linear-gradient(212.38deg, rgba(232,71,48,1) 0%, rgba(240,243,244,0.3) 100%),url('')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderTopLeftRadius: { lg: 0 },
              borderBottomLeftRadius: { lg: 0 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              sx={{ width: { xs: "0", md: "100%", lg: "100%", xl: "100%" } }}
            >
              <Typography
                sx={{
                  color: { xs: "transparent", lg: "#fff" },
                  fontSize: { xs: "0px", lg: "30px" },
                }}
              >
                Sistema Administrativo <br /> de la Escuela de Atletismo
              </Typography>
            </Stack>
          </Box> */}
        </Stack>
      </Stack>
    </>
  );
}
