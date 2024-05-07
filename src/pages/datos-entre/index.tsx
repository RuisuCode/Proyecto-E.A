import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

/* local */
import { useGetCoachID } from "../../shared/hooks/useCoach";

/* icons */
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import WcIcon from "@mui/icons-material/Wc";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import HelpIcon from "@mui/icons-material/Help";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import getAge2 from "../atletas-categoria/hooks/getAge2";
import dayjs from "dayjs";
import Loader from "../../shared/components/Loader";
import { useEffect } from "react";
import ModalEditEntrenador from "./components/ModalEdit";

export default function datosEntre() {
  const URL: string = import.meta.env.VITE_BACKEND;

  const { data: coach, isPending, refetch } = useGetCoachID();
  useEffect(() => {
    refetch();
  }, [coach]);
  return (
    <>
      <CssBaseline />
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={{ xs: "100vw", md: "100%" }}
      >
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
            <ManageAccountsIcon sx={{ color: "#fff" }} fontSize="medium" />
            <Typography
              display={"flex"}
              justifyContent={"center"}
              fontSize={"0.9em"}
              fontWeight={"bold"}
              color="#fff"
            >
              <NavigateNextIcon />
            </Typography>
            <Typography
              fontSize={"0.9em"}
              fontWeight={"bold"}
              letterSpacing={1.5}
              color="#fff"
            >
              {/* {location.pathname.split("/")[1]} */}
              Datos del Entrenador
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
        {!isPending && coach && (
          <Stack
            bgcolor={"#fff"}
            width={{ xs: "95vw", lg: "60vw" }}
            height={"auto"}
            borderRadius={"1em"}
            boxShadow={5}
            px={{ lg: 3, xs: 0 }}
            pb={3}
            sx={{ overflowX: "hidden" }}
            alignItems={"center"}
          >
            <Box
              width={{ lg: "110%", xs: "100%" }}
              height={{ md: "150px", xs: "200px" }}
              bgcolor={"#E84730"}
              borderRadius={"1em"}
              boxShadow={5}
              p={3}
              alignItems={"center"}
              display={"flex"}
            >
              <Avatar
                src={
                  import.meta.env.MODE !== "production"
                    ? `${URL}/uploads/coaches/${coach?.data?.foto}`
                    : `${URL}uploads/coaches/${coach?.data?.foto}`
                }
                sx={{
                  width: 150,
                  height: 150,
                  border: "4px solid #f5f5f5",
                  zIndex: 999,
                  bgcolor: "#fff",
                  position: "relative",
                  boxShadow: 5,
                  top: { md: 30, xs: 0 },
                  ml: 0.5,
                }}
              />

              <Stack
                justifyContent={"space-between"}
                width={"100%"}
                direction={"row"}
              >
                <Stack gap={1} mx={2} my={1} direction={"column"}>
                  <ListItem sx={{ paddingInline: "0" }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#E84730", mb: "1px" }}>
                        <AssignmentIndIcon sx={{ fontSize: "1.5em" }} />
                      </Avatar>
                    </ListItemAvatar>
                    <Typography
                      width={"100%"}
                      color={"#fff"}
                      fontSize={{ lg: "1.5em", xs: "1em" }}
                      fontWeight={"bold"}
                      display={"flex"}
                      flexDirection={{ md: "row", xs: "column" }}
                      gap={1}
                    >
                      <Stack direction={"row"} gap={1}>
                        <Typography
                          fontSize={{ lg: "1.5em", xs: "1em" }}
                          fontWeight={"bold"}
                        >
                          {coach?.data?.primer_nom}
                        </Typography>
                        <Typography
                          fontSize={{ lg: "1.5em", xs: "1em" }}
                          fontWeight={"bold"}
                        >
                          {coach?.data?.segundo_nom}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} gap={1}>
                        <Typography
                          fontSize={{ lg: "1.5em", xs: "1em" }}
                          fontWeight={"bold"}
                        >
                          {coach?.data?.primer_ape}
                        </Typography>
                        <Typography
                          fontSize={{ lg: "1.5em", xs: "1em" }}
                          fontWeight={"bold"}
                        >
                          {coach?.data?.segundo_ape}
                        </Typography>
                      </Stack>
                    </Typography>
                  </ListItem>
                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    gap={{ xs: 0, md: 2 }}
                  >
                    <ListItem sx={{ paddingInline: 0 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#E84730", mb: "1px" }}>
                          <BadgeIcon sx={{ fontSize: "1.5em" }} />
                        </Avatar>
                      </ListItemAvatar>
                      <Typography
                        width={"100%"}
                        color={"#fff"}
                        fontSize={{ lg: "1.5em", xs: "1 em" }}
                        fontWeight={"bold"}
                      >
                        {coach?.data?.User_id?.cedula}
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ paddingInline: "0" }}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#E84730", mb: "1px" }}>
                          <SchoolIcon sx={{ fontSize: "1.5em" }} />
                        </Avatar>
                      </ListItemAvatar>
                      <Typography
                        width={"100%"}
                        color={"#fff"}
                        fontSize={{ lg: "1.5em", xs: "1 em" }}
                        fontWeight={"bold"}
                      >
                        {coach?.data?.grado_academico}
                      </Typography>
                    </ListItem>
                  </Stack>
                </Stack>
                <Stack
                  justifyContent={"center"}
                  mr={2}
                  display={{ xs: "none", md: "flex" }}
                  alignItems={"end"}
                >
                  <ModalEditEntrenador dataB={coach?.data} />
                </Stack>
              </Stack>
            </Box>
            <Stack
              justifyContent={"center"}
              mr={{ lg: 2, xs: 5 }}
              my={1}
              width={"100%"}
              display={{ xs: "flex", md: "none" }}
              alignItems={"end"}
            >
              <ModalEditEntrenador dataB={coach?.data} />
            </Stack>
            <Box
              width={"100%"}
              height={"auto"}
              bgcolor={"#fff"}
              borderRadius={"1em"}
              mt={{ lg: 8, xs: 2 }}
              pb={3}
            >
              <Grid
                container
                direction={{ md: "row", xs: "column" }}
                justifyContent={"space-between"}
                gap={1}
              >
                <Grid
                  md={12}
                  boxShadow={2}
                  borderRadius={"1em"}
                  pb={1}
                  mb={{ xs: 2, md: 0 }}
                >
                  <Typography
                    width={"100%"}
                    sx={{
                      borderTopLeftRadius: "1em",
                      borderTopRightRadius: "1em",
                    }}
                    align="center"
                    bgcolor={"#f5f5f5"}
                  >
                    Datos personales
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignContent={"space-between"}
                    width={"100%"}
                  >
                    <List
                      sx={{
                        width: "50%",
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem sx={{ mb: 1 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#E84730" }}>
                            <WcIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Genero"
                          secondary={
                            coach?.data?.genero === "m"
                              ? "Masculino"
                              : "Femenino"
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#E84730" }}>
                            <SupervisedUserCircleIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Estatus"
                          secondary={coach?.data?.User_id?.estatus}
                        />
                      </ListItem>
                    </List>
                    <List
                      sx={{
                        width: "50%",
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#E84730" }}>
                            <PersonIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Edad"
                          secondary={getAge2(
                            Number(
                              dayjs(coach?.data?.fecha_nacimiento).format("DD")
                            ),
                            Number(
                              dayjs(coach?.data?.fecha_nacimiento).format("MM")
                            ),
                            Number(
                              dayjs(coach?.data?.fecha_nacimiento).format(
                                "YYYY"
                              )
                            )
                          )}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#E84730" }}>
                            <CalendarMonthIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Fecha de Nacimiento"
                          secondary={dayjs(
                            coach?.data?.fecha_nacimiento
                          ).format("DD/MM/YYYY")}
                        />
                      </ListItem>
                    </List>
                  </Stack>
                </Grid>
                <Grid md={12} boxShadow={2} pb={1} borderRadius={"1em"}>
                  <Typography
                    width={"100%"}
                    align="center"
                    sx={{
                      borderTopLeftRadius: "1em",
                      borderTopRightRadius: "1em",
                    }}
                    bgcolor={"#f5f5f5"}
                  >
                    Datos de Comunicación
                  </Typography>
                  <Stack
                    justifyContent={{ xs: "center", md: "initial" }}
                    alignItems={"center"}
                    height={"90%"}
                  >
                    <List
                      sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: { md: "row", xs: "column" },
                        justifyContent: "space-between",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#E84730" }}>
                            <MailOutlineIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Correo electrónico"
                          secondary={coach?.data?.email}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#E84730" }}>
                            <PhoneAndroidIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Teléfono"
                          secondary={coach?.data?.telefono}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#E84730" }}>
                            <PhoneAndroidIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Teléfono de casa"
                          secondary={coach?.data?.telefono_casa}
                        />
                      </ListItem>
                    </List>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        )}
        {isPending && Loader("10vw", 0)}
        {!isPending && !coach && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Stack alignItems={"center"} justifyContent={"center"} mt={10}>
              <SentimentVeryDissatisfiedIcon
                sx={{ fontSize: "11rem", color: "#EF7E6C" }}
              />
              <Typography
                fontWeight={"bold"}
                color={"#EF7E6C"}
                fontSize={"2rem"}
              >
                Entrenador no encontrado
              </Typography>
            </Stack>
          </motion.div>
        )}
      </Stack>
    </>
  );
}
