import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { StyledBackground } from "../../shared/style-components/theme/styledBackground";
import LoginForm from "./components/loginForm";
/* import IconButton from "@mui/material/IconButton"; */
import SkateboardingIcon from "@mui/icons-material/Skateboarding";
/* import backgroundImg from "../../shared/assets/atleta-login.jpg"; */

export default function Login() {
  return (
    <>
      <StyledBackground />
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack
          flexDirection={"row"}
          color={"#fff"}
          width={"1050px"}
          height={"600px"}
          borderRadius={"15px"}
          boxShadow={5}
          position={"absolute"}
          top={0}
          mt={"5%"}
          sx={{ opacity: 0.9 }}
        >
          <Box
            bgcolor={"#fff"}
            color={"#000"}
            width="41%"
            textAlign={"center"}
            borderRadius={"15px"}
            sx={{
              borderTopRightRadius: "0",
              borderBottomRightRadius: 0,
              /* filter: "blur(2px)", */
            }}
          >
            <Stack
              flexDirection={"row"}
              alignContent={"center"}
              justifyContent={"center"}
            >
              <SkateboardingIcon
                color="primary"
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "13px",
                  mt: "30%",
                  mr: "10px",
                }}
              />
              {/* <IconButton
                sx={{ mt: "22%", mr: "5px", height: "20px" }}
                color="primary"
              >
              </IconButton> */}
              <Typography mt={"28%"} mb={3} variant="h4">
                Ingresar
              </Typography>
            </Stack>
            <Stack mx={3}>
              <LoginForm />
            </Stack>
          </Box>
          <Box
            width={"59%"}
            textAlign={"center"}
            borderRadius={"15px"}
            sx={{
              background: `linear-gradient(212.38deg, rgba(232,71,48,1) 0%, rgba(240,243,244,0.3) 100%),url('')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: 0,
            }}
          >
            <Typography variant="h4" mt={"40%"} sx={{ background: "no" }}>
              <Typography variant="h4">
                Sistema Administrativo <br /> de la Escuela de Atletismo
              </Typography>
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
