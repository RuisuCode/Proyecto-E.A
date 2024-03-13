import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LoginForm from "./components/loginForm";
import Image from "../../shared/style-components/Image";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { motion, AnimatePresence } from "framer-motion";
import "../../shared/styles/button.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import backgroundImg from "../../shared/assets/background3.jpg";
import backgroundImg2 from "../../shared/assets/atleta-login.jpg";
import backgroundImg3 from "../../shared/assets/backgroundImg4.jpg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "../../shared/consts/API_SERVICES";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { UseAuthStore } from "../../store/UserStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const Variants = {
    offscreen: {
      x: 1300,
      opacity: 0,
      scale: 0.8,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
  };
  const queryClient = useQueryClient();
  const token = UseAuthStore((state: any) => state.token);
  const dataToken: any = [{ token }];
  const { mutateAsync } = useMutation({
    mutationFn: () => apiService.post(dataToken, "/verify_token"),
    onSuccess: () => {
      queryClient.clear();
      toast.success("sesión restaurada");
    },
    onError: () => {
      sessionStorage.removeItem("auth");
    },
  });
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage) {
      mutateAsync().then(() => navigate("/inicio"));
    }
  }, []);

  useEffect(() => {
    setIsVisible(window.innerWidth >= 768);
  }, [window.innerWidth]);

  return (
    <>
      <Box
        sx={{
          zIndex: -2,
          display: "flex",
          position: "absolute",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={20000}
          showArrows={false}
          showIndicators={true}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img
              src={backgroundImg}
              style={{ backgroundSize: "cover", height: "100vh" }}
            />
          </div>
          <div>
            <img
              src={backgroundImg2}
              style={{ backgroundSize: "cover", height: "100vh" }}
            />
          </div>
          <div>
            <img
              src={backgroundImg3}
              style={{ backgroundSize: "cover", height: "100vh" }}
            />
          </div>
        </Carousel>
      </Box>

      <Stack
        width={{ md: "100%" }}
        height={{ md: "100%" }}
        alignItems={{ md: "flex-end" }}
        overflow={"hidden"}
        zIndex={999}
      >
        <AnimatePresence>
          {isVisible && (
            <motion.div
              variants={Variants}
              viewport={{ once: true }}
              initial="offscreen"
              animate="onscreen"
              transition={{
                ease: [0, 0.71, 0.2, 1.01],
                duration: 1,
                delay: 0.2,
              }}
              style={{
                width: "100%",
                // filter: "drop-shadow(-3px 3px 10px  #f2e6e1)",
              }}
            >
              {/*  <Box
                style={{
                  width: "100%",
                }}
              >
              </Box> */}
              <motion.div
                viewport={{ once: true }}
                initial={{ filter: "drop-shadow(-4px 3px 10px  #f2e6e1)" }}
                animate={{ filter: "drop-shadow(-6px 3px 15px  #F77540)" }}
                transition={{
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 8,
                  delay: 0.3,
                }}
                style={{
                  width: "100%",
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  flexDirection={"row"}
                  color={"#fff"}
                  alignItems={"flex-end"}
                  justifyContent={"center"}
                  sx={{
                    width: { xs: "100vw", lg: "100%" },
                    height: { xs: "100vh", lg: "100vh" },
                    opacity: { xs: 1, md: 1 },

                    border: "transparent",

                    zIndex: { xs: 0, md: "999" },
                    clipPath: { xs: 0, md: "circle(50% at 94% 53%)" },
                  }}
                >
                  <Box
                    bgcolor={"#fff"}
                    color={"#000"}
                    width={"100%"}
                    boxShadow={5}
                    sx={{
                      height: { xs: "100%", md: "100%" },
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: 8,
                      }}
                      transition={{
                        ease: [0, 0.71, 0.2, 1.01],
                        duration: 1,
                        delay: 1.1,
                      }}
                    >
                      <Stack
                        flexDirection={"column"}
                        alignItems={{ xs: "center", md: "flex-end" }}
                        justifyContent={"center"}
                        mr={{ xs: 0, md: "12vw" }}
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
                          fontSize={"2.8em"}
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
                          Por favor ingrese los datos correspondientes para
                          continuar
                        </Typography>
                      </Stack>
                      <Stack
                        alignItems={{ xs: "center", md: "flex-end" }}
                        mx={3}
                      >
                        <LoginForm />
                      </Stack>

                      <Stack
                        mt={{ xs: 4, md: 0, lg: 2 }}
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
                              transform: "rotateY(180deg)",
                            }}
                          />
                          Universidad Bolivariana de Venezuela <br />
                          del Estado Monagas-
                          {new Date().getFullYear()}
                        </Typography>
                      </Stack>
                    </motion.div>
                  </Box>
                </Stack>
              </motion.div>
            </motion.div>
          )}
          {!isVisible && (
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
                justifyContent={"center"}
                sx={{
                  width: { xs: "100vw", lg: "100%" },
                  height: { xs: "100vh", lg: "100vh" },
                  opacity: { xs: 1, md: 1 },
                  border: "transparent",
                  zIndex: { xs: 0, md: "999" },
                  clipPath: { xs: 0, md: "circle(50% at 94% 53%)" },
                }}
              >
                <Box
                  bgcolor={"#fff"}
                  color={"#000"}
                  width={"100%"}
                  boxShadow={5}
                  sx={{
                    height: { xs: "100%", md: "100%" },
                    justifyContent: "space-evenly",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      ease: [0, 0.71, 0.2, 1.01],
                      duration: 1,
                      delay: 1.1,
                    }}
                  >
                    <Stack
                      flexDirection={"column"}
                      alignItems={{ xs: "center", md: "flex-end" }}
                      justifyContent={"center"}
                      mr={{ xs: 0, md: "12vw" }}
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
                        Por favor ingrese los datos correspondientes para
                        continuar
                      </Typography>
                    </Stack>
                    <Stack alignItems={{ xs: "center", md: "flex-end" }} mx={3}>
                      <LoginForm />
                    </Stack>

                    <Stack
                      mt={4}
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
                  </motion.div>
                </Box>
              </Stack>
            </Box>
          )}
        </AnimatePresence>
      </Stack>
    </>
  );
}
