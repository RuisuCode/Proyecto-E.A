import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { DefaultizedPieValueType } from "@mui/x-charts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
/* local */
import "react-responsive-carousel/lib/styles/carousel.min.css";
/* icons */
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BadgeIcon from "@mui/icons-material/Badge";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function InicioAdmin() {
  const data = [
    { label: "Eventos Importantes", value: 10, color: "#8f1402", onclick: "" },
    { label: "Actividades pendientes", value: 5, color: "#ee6633" },
    { label: "Atletas Registrados", value: 20, color: "#648589" },
  ];
  const data2 = [
    { value: 10, color: "#8f1402", onclick: "" },
    { value: 5, color: "#ee6633" },
    { value: 20, color: "#648589" },
  ];
  const navigate = useNavigate();
  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          my={5}
          sx={{ width: { md: "80vw", xs: "95vw" } }}
        >
          <Badge
            sx={{
              background: "#E84730",
              borderRadius: "10px",
              boxShadow: 4,
              height: 40,
              width: "auto",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              paddingInline: 2,
            }}
          >
            <HomeRoundedIcon sx={{ color: "#fff" }} fontSize="medium" />
            <Typography fontSize={"0.9em"} fontWeight={"bold"} color="#fff">
              <NavigateNextIcon />
            </Typography>
            <Typography
              fontSize={"0.9em"}
              fontWeight={"bold"}
              letterSpacing={1.5}
              color="#fff"
            >
              {location.pathname.split("/")[1]}
            </Typography>
          </Badge>
          <Badge
            overlap="circular"
            sx={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "#E84730",
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
        <Stack
          sx={{
            background:
              "linear-gradient(270deg, rgba(255,177,166,1) 23%, rgba(255,216,210,1) 38%, rgba(251,245,244,1) 56%)",
            boxShadow: 5,
            width: { lg: "80vw", xs: "95%" },
            height: { xs: "100%", lg: "65vh" },
            my: 1,
            borderRadius: "1em",
          }}
        >
          <Grid
            direction={{ xs: "column", lg: "row" }}
            container
            width={"100%"}
            height={"auto"}
          >
            <Grid
              width={{ xs: "100%", lg: "50%", md: "50%" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDirection={"column"}
              height={"100%"}
              overflow={"hidden"}
            >
              <Stack width={"100%"} alignItems={"center"}>
                <Typography
                  fontWeight={"bold"}
                  color={"#404040"}
                  sx={{
                    textShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }}
                  letterSpacing={1}
                  mt={3}
                  mb={1}
                >
                  Resumen General
                </Typography>
              </Stack>
              <Stack
                mb={10}
                display={{
                  xs: "none",
                  md: "initial",
                  sm: "none",
                  lg: "initial",
                }}
              >
                <PieChart
                  sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                      fill: "white",
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                  }}
                  slotProps={{
                    legend: {
                      padding: { bottom: 20, right: 100 },
                    },
                  }}
                  series={[
                    {
                      paddingAngle: 5,
                      innerRadius: 40,
                      outerRadius: 100,
                      cornerRadius: 10,
                      data,
                      arcLabel: getArcLabel,
                    },
                  ]}
                  margin={{ right: 200 }}
                  width={630}
                  height={200}
                />
                <Stack width={"100%"} mt={3} height={100} alignItems={"center"}>
                  <Carousel
                    autoPlay={true}
                    interval={20000}
                    infiniteLoop={true}
                    showArrows={true}
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                  >
                    <div
                      style={{
                        backgroundColor: "transparent",
                        height: 100,
                        borderRadius: "1em",
                      }}
                    >
                      <Typography
                        textAlign={"center"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        height={"100%"}
                        fontWeight={"bold"}
                      >
                        Actividad 1
                      </Typography>
                    </div>
                    <div
                      style={{
                        backgroundColor: "transparent ",
                        height: 100,
                        borderRadius: "1em",
                      }}
                    >
                      <Typography
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        height={"100%"}
                        fontWeight={"bold"}
                      >
                        Actividad 2
                      </Typography>
                    </div>
                  </Carousel>
                </Stack>
              </Stack>
              {/* mobil */}
              <Stack
                display={{ sm: "initial", md: "none", lg: "none", xl: "none" }}
              >
                <PieChart
                  sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                      fill: "white",
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                  }}
                  series={[
                    {
                      paddingAngle: 5,
                      innerRadius: 40,
                      outerRadius: 100,
                      cornerRadius: 10,
                      data: data2,
                    },
                  ]}
                  margin={{ right: 5 }}
                  width={630}
                  height={200}
                />
                <Stack width={"100%"} mt={3} height={100} alignItems={"center"}>
                  <Carousel
                    autoPlay={true}
                    interval={20000}
                    infiniteLoop={true}
                    showArrows={true}
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                  >
                    <div
                      style={{
                        backgroundColor: "transparent",
                        height: 100,
                        borderRadius: "1em",
                      }}
                    >
                      <Typography
                        textAlign={"center"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        height={"100%"}
                        fontWeight={"bold"}
                      >
                        Actividad 1
                      </Typography>
                    </div>
                    <div
                      style={{
                        backgroundColor: "transparent ",
                        height: 100,
                        borderRadius: "1em",
                      }}
                    >
                      <Typography
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        height={"100%"}
                        fontWeight={"bold"}
                      >
                        Actividad 2
                      </Typography>
                    </div>
                  </Carousel>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              width={{ xs: "100%", lg: "50%", md: "50%" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              height={"95%"}
              overflow={"hidden"}
              mb={1}
            >
              <Typography
                fontWeight={"bold"}
                color={"#404040"}
                sx={{
                  textShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
                letterSpacing={1}
                mt={3}
                mb={1}
              >
                Datos del Entrenador
              </Typography>
              <IconButton
                sx={{
                  padding: 0,
                  zIndex: 999,
                  bgcolor: "#fff",
                  "&:hover": { background: "#fff" },
                }}
              >
                <AccountCircleIcon color="primary" sx={{ fontSize: 150 }} />
              </IconButton>
              <Card
                sx={{
                  maxWidth: 545,
                  width: 400,
                  borderRadius: "1em",
                  position: "relative",
                  bottom: 50,
                }}
              >
                <CardContent>
                  <Stack
                    direction={"row"}
                    alignContent={"center"}
                    justifyContent={"space-around"}
                  >
                    <Typography
                      mt={3}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      Nombre del entrenador
                    </Typography>
                    <IconButton
                      sx={{ mt: 2 }}
                      onClick={() => navigate("/config-user")}
                    >
                      <ManageAccountsIcon />
                    </IconButton>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"}>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BadgeIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Cedula"
                          secondary="000.000.000"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <SupervisedUserCircleIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Estado Civil"
                          secondary="Soltero"
                        />
                      </ListItem>
                    </List>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <PersonIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Edad" secondary="40" />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <CalendarMonthIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Fecha de Nacimiento"
                          secondary="Jan 7, 2014"
                        />
                      </ListItem>
                    </List>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </>
  );
}
