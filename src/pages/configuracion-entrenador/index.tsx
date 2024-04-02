import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

/* local */

/* icons */
import WcIcon from "@mui/icons-material/Wc";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import HelpIcon from "@mui/icons-material/Help";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BookIcon from "@mui/icons-material/Book";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PinDropIcon from "@mui/icons-material/PinDrop";

export default function configurarUser() {
  const navigate = useNavigate();
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
            height={"150px"}
            bgcolor={"#E84730"}
            borderRadius={"1em"}
            boxShadow={5}
            // mt={4}
            p={3}
            alignItems={"center"}
            display={"flex"}
          >
            <IconButton
              sx={{
                padding: 0,
                zIndex: 999,
                bgcolor: "#fff",
                position: "relative",
                boxShadow: 5,
                top: 50,
                ml: 1,
                "&:hover": { background: "#fff" },
              }}
            >
              <AccountCircleIcon color="primary" sx={{ fontSize: 150 }} />
            </IconButton>

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
                  >
                    Nombre del Entrenador Completo
                  </Typography>
                </ListItem>
                <ListItem sx={{ paddingInline: "0" }}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#E84730", mb: "1px" }}>
                      <BadgeIcon sx={{ fontSize: "1.5em" }} />
                    </Avatar>
                  </ListItemAvatar>
                  <Typography
                    width={"100%"}
                    color={"#fff"}
                    fontSize={{ lg: "1.5em", xs: "1.2em" }}
                    fontWeight={"bold"}
                  >
                    Cedula
                  </Typography>
                </ListItem>
              </Stack>
              <Stack
                justifyContent={"center"}
                mr={2}
                display={{ xs: "none", md: "flex" }}
                alignItems={"end"}
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <IconButton
                    onClick={() => navigate("/edit-config-user")}
                    sx={{
                      bgcolor: "#fff",
                      boxShadow: 3,
                      "&:hover": { bgcolor: "#fff", boxShadow: 10 },
                    }}
                  >
                    <DriveFileRenameOutlineIcon
                      fontSize="large"
                      color="primary"
                    />
                  </IconButton>
                </motion.div>
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
            <motion.div whileHover={{ scale: 1.1 }}>
              <IconButton
                onClick={() => navigate("/edit-config-user")}
                sx={{
                  bgcolor: "#fff",
                  boxShadow: 3,
                  "&:hover": { bgcolor: "#fff", boxShadow: 10 },
                }}
              >
                <DriveFileRenameOutlineIcon fontSize="large" color="primary" />
              </IconButton>
            </motion.div>
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
            >
              <Grid
                md={5.8}
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
                <Stack direction={"row"} alignItems={"center"}>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <ListItem sx={{ mb: 2 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#E84730" }}>
                          <WcIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Genero" secondary="Masculino" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#E84730" }}>
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
                        <Avatar sx={{ bgcolor: "#E84730" }}>
                          <PersonIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Edad" secondary="40" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#E84730" }}>
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
              </Grid>
              <Grid md={5.8} boxShadow={2} pb={1} borderRadius={"1em"}>
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
                  direction={"row"}
                  justifyContent={{ xs: "center", md: "initial" }}
                  alignItems={"center"}
                >
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#E84730" }}>
                          <PinDropIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Dirección"
                        secondary="000.000.000000000000000 0000000000000000 000   00000000  00"
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
                        secondary="0414-7666579"
                      />
                    </ListItem>
                  </List>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Box
            width={"100%"}
            height={"auto"}
            bgcolor={"#fff"}
            borderRadius={"1em"}
            boxShadow={2}
            mt={2}
          >
            <Typography
              width={"100%"}
              align="center"
              sx={{
                borderTopLeftRadius: "1em",
                borderTopRightRadius: "1em",
              }}
              bgcolor={"#f5f5f5"}
            >
              Datos de Académicos
            </Typography>
            <Stack
              my={1}
              alignItems={"center"}
              direction={"row"}
              width={"100%"}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#E84730" }}>
                    <SchoolIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Nivel académico"
                  secondary="Educación superior"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#E84730" }}>
                    <BookIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Especialidad" secondary="Educación" />
              </ListItem>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
