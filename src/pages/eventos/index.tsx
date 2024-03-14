import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge/Badge";
import Grid from "@mui/material/Grid/Grid";
import { motion } from "framer-motion";
import Box from "@mui/material/Box/Box";
import CardMedia from "@mui/material/CardMedia/CardMedia";

/* local */
import img from "../../shared/assets/backgroundImg4.jpg";

/* icons */
import HelpIcon from "@mui/icons-material/Help";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Button from "@mui/material/Button/Button";
import EventIcon from "@mui/icons-material/Event";
import { useNavigate } from "react-router-dom";

export default function Eventos() {
  const navigate = useNavigate();

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={{ xs: "100vw", lg: "100%" }}
        height={"auto"}
        gap={{ xs: 0, lg: 3 }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          mt={{ xs: 6, lg: 5 }}
          mb={{ xs: 3, lg: 5 }}
          gap={1}
          sx={{ width: { md: "80vw", xs: "95vw" } }}
        >
          <Badge
            sx={{
              background: "#E84730",
              borderRadius: "10px",
              boxShadow: 4,
              height: 40,
              width: { xs: "50%", md: "auto" },
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              paddingInline: 2,
            }}
          >
            <CalendarMonthIcon sx={{ color: "#fff" }} fontSize="medium" />
            <Typography fontSize={"0.9em"} fontWeight={"bold"} color="#fff">
              <NavigateNextIcon />
            </Typography>
            <Typography
              fontSize={"medium"}
              letterSpacing={{ xs: 0, lg: 1.5 }}
              color="#fff"
            >
              {/* {location.pathname.split("/")[1]} */}
              Listado de Eventos
            </Typography>
          </Badge>
          <Stack
            direction={{ xs: "column", lg: "row" }}
            gap={3}
            alignItems={"center"}
          >
            <Stack alignItems={"flex-end"}>
              {/* <Button
                className="learn-more2"
                style={{ width: "auto", height: "45px", borderRadius: "2em" }}
                endIcon={<EventIcon />}
                onClick={() => navigate("/create-activities")}
              >
                Agregar evento
              </Button> */}
              <Badge
                sx={{
                  borderRadius: "10px",
                  background: "#E84730",

                  boxShadow: 4,
                  height: 40,
                  width: "auto",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  paddingInline: 2,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/create-activities")}
              >
                <EventIcon sx={{ color: "#fff" }} />
                <Typography color={"#fff"} fontSize={"medium"}>
                  {" "}
                  Agregar evento
                </Typography>
              </Badge>
            </Stack>
            <Badge
              overlap="circular"
              sx={{
                display: { xs: "none", md: "initial" },
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "#E84730",
                height: "40px",
              }}
            >
              <HelpIcon
                fontSize="large"
                sx={{
                  color: "#f5f5f5",
                  boxShadow: 4,
                  borderRadius: "50%",
                  padding: 0,
                  width: 40,
                  height: 40,
                }}
              />
            </Badge>
          </Stack>
        </Stack>
        <Stack width={{ xs: "95%", lg: "90%" }} alignItems={"center"}>
          <Grid
            container
            direction={{ md: "column", lg: "row", xs: "column" }}
            mt={2}
            width={"100%"}
            gap={{ xs: 2, lg: 10 }}
          >
            <Grid width={{ xs: "100%", lg: "45%" }}>
              <Stack
                bgcolor={"transparent"}
                borderRadius={"4px"}
                // boxShadow={2}
                // mx={{xs:1}}
                sx={{ minWidth: { xs: "100%", lg: 600 }, height: "300px" }}
                alignItems={"center"}
                // overflow={"hidden"}
              >
                <motion.div
                  whileHover={{
                    transform: "translateY(-15px)",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  style={{
                    overflowY: "hidden",
                    width: "95%",
                    height: 430,
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                    borderTopRightRadius: "1em",
                    borderTopLeftRadius: "1em",
                    borderBottomLeftRadius: "1em",
                    borderBottomRightRadius: "1em",
                    /*       borderBottomRightRadius: "1em",
                    borderBottomLeftRadius: "1em", */
                  }}
                >
                  <Stack flexDirection={"row"}>
                    <Box
                      sx={{
                        // borderRadius: "1em",
                        height: 300,
                        width: "55%",
                        zIndex: 30,
                        pt: 2,
                        // position: "relative",
                        // transform: "translateY(-70px)",

                        // borderBottomRightRadius: "1em",
                        /*      borderBottomLeftRadius: "1em", */
                        boxShadow: 5,
                        bgcolor: "#fff",
                        // border: "solid",
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "space-around",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        // borderRadius={"50%"}
                        component="div"
                        align="center"
                      >
                        Evento 1
                      </Typography>
                      <Typography
                        variant="body2"
                        display={"flex"}
                        alignItems={"center"}
                        // justifyContent={"center"}
                        align="center"
                        color="text.secondary"
                        height={"70%"}
                        px={2}
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <Stack
                        direction={"row"}
                        width={"100%"}
                        justifyContent={"space-around"}
                        gap={1}
                        pb={2}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            py: { xs: 3, md: 0 },
                            borderRadius: "1em",
                            boxShadow: 5,
                            width: "45%",
                            height: "40px",
                          }}
                        >
                          <Typography textTransform={"capitalize"}>
                            {" "}
                            Eliminar evento
                          </Typography>
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            py: { xs: 3, md: 0 },
                            borderRadius: "1em",
                            boxShadow: 5,
                            width: "40%",
                            height: "40px",
                          }}
                        >
                          <Typography textTransform={"capitalize"}>
                            {" "}
                            Ir al evento
                          </Typography>
                        </Button>
                      </Stack>
                    </Box>
                    <CardMedia
                      sx={{
                        height: 400,
                        zIndex: 10,
                        width: "45%",
                        // position: "relative",
                        /*        borderTopRightRadius: "1em", */
                        // borderTopLeftRadius: "1em",
                        // borderBottomRightRadius: "1em",
                        // transform: "translateY(50px)",
                        boxShadow: 10,
                      }}
                      image={img}
                    />
                  </Stack>
                </motion.div>
              </Stack>
            </Grid>
            <Grid width={{ xs: "100%", lg: "45%" }}>
              <Stack
                bgcolor={"transparent"}
                borderRadius={"4px"}
                // boxShadow={2}
                sx={{ minWidth: { xs: "100%", lg: 600 }, height: "300px" }}
                alignItems={"center"}
                // overflow={"hidden"}
              >
                <motion.div
                  whileHover={{
                    transform: "translateY(-15px)",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  style={{
                    overflowY: "hidden",
                    width: "95%",
                    height: 430,
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                    borderTopRightRadius: "1em",
                    borderTopLeftRadius: "1em",
                    borderBottomLeftRadius: "1em",
                    borderBottomRightRadius: "1em",
                    /*       borderBottomRightRadius: "1em",
                    borderBottomLeftRadius: "1em", */
                  }}
                >
                  <Stack flexDirection={"row"}>
                    <Box
                      sx={{
                        // borderRadius: "1em",
                        height: 300,
                        width: "55%",
                        zIndex: 30,
                        pt: 2,
                        // position: "relative",
                        // transform: "translateY(-70px)",

                        // borderBottomRightRadius: "1em",
                        /*      borderBottomLeftRadius: "1em", */
                        boxShadow: 5,
                        bgcolor: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "space-around",
                        // border: "solid",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        // borderRadius={"50%"}
                        component="div"
                        align="center"
                      >
                        Evento 2
                      </Typography>
                      <Typography
                        variant="body2"
                        display={"flex"}
                        alignItems={"center"}
                        // justifyContent={"center"}
                        align="center"
                        color="text.secondary"
                        height={"70%"}
                        px={2}
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <Stack
                        direction={"row"}
                        width={"100%"}
                        justifyContent={"space-around"}
                        gap={1}
                        pb={2}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "1em",
                            py: { xs: 3, md: 0 },
                            boxShadow: 5,
                            width: "45%",
                            height: "40px",
                          }}
                        >
                          <Typography textTransform={"capitalize"}>
                            {" "}
                            Eliminar evento
                          </Typography>
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            py: { xs: 3, md: 0 },
                            borderRadius: "1em",
                            boxShadow: 5,
                            width: "40%",
                            height: "40px",
                          }}
                        >
                          <Typography textTransform={"capitalize"}>
                            {" "}
                            Ir al evento
                          </Typography>
                        </Button>
                      </Stack>
                    </Box>
                    <CardMedia
                      sx={{
                        height: 400,
                        zIndex: 10,
                        width: "45%",
                        // position: "relative",
                        /*        borderTopRightRadius: "1em", */
                        // borderTopLeftRadius: "1em",
                        // borderBottomRightRadius: "1em",
                        // transform: "translateY(50px)",
                        boxShadow: 10,
                      }}
                      image={img}
                    />
                  </Stack>
                </motion.div>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </>
  );
}
