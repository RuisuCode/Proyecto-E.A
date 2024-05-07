import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge/Badge";
import Grid from "@mui/material/Grid/Grid";
import { motion } from "framer-motion";
import Box from "@mui/material/Box/Box";
import CardMedia from "@mui/material/CardMedia/CardMedia";

/* local */

/* icons */
import HelpIcon from "@mui/icons-material/Help";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventIcon from "@mui/icons-material/Event";
import { useNavigate } from "react-router-dom";
import { useGetEvents } from "../../shared/hooks/useEvents";
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import dayjs from "dayjs";
import Loader from "../../shared/components/Loader";
import ModalDeleteEvent from "./components/ModalDelete";
import ModalEditEvent from "./components/ModalEdit";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: { xs: "98%", md: "auto" },
  bgcolor: "background.paper",
  border: "2px solid #EF7E6C",
  borderRadius: "13px",
  boxShadow: 24,
  overflowY: "scroll",
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Eventos() {
  const navigate = useNavigate();
  const { data: events, refetch, isPending } = useGetEvents();
  useEffect(() => {
    refetch();
  }, []);
  const URL: string = import.meta.env.VITE_BACKEND;
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const handleOpen = (data: any) => {
    setSelectedEvent(data);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const variants = {
    open: {
      clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={{ xs: "100vw", md: "100%" }}
        height={"auto"}
        gap={{ xs: 0, lg: 3 }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          mt={{ xs: 6, lg: 5 }}
          mb={{ xs: 3, lg: 3 }}
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
              py: { xs: 3, md: 0 },
            }}
          >
            <CalendarMonthIcon sx={{ color: "#fff" }} fontSize="medium" />
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
              fontSize={"medium"}
              fontWeight={"bold"}
              letterSpacing={{ xs: 0, lg: 1.5 }}
              color="#fff"
            >
              Listado de Eventos
            </Typography>
          </Badge>
          <Stack
            direction={{ xs: "column", lg: "row" }}
            gap={3}
            alignItems={"center"}
          >
            <Stack alignItems={"flex-end"}>
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
                  py: { xs: 3, md: 0 },
                }}
                onClick={() => navigate("/add-event")}
              >
                <EventIcon sx={{ color: "#fff" }} />
                <Typography
                  color={"#fff"}
                  fontSize={"medium"}
                  fontWeight={"bold"}
                >
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
        <Stack width={{ xs: "98%", lg: "90%" }} alignItems={"center"}>
          {!isPending && events?.data.length !== 0 && (
            <Typography
              color={"#b9b4b1"}
              fontWeight={"bold"}
              textAlign={"center"}
              mb={2}
              variant="h5"
            >
              Seleccione un evento para ver mas información
            </Typography>
          )}
          {!isPending && (
            <Grid
              container
              direction={{ lg: "row", xs: "column" }}
              justifyContent={"space-between"}
              width={"100%"}
              gap={{ xs: 2 }}
            >
              {events?.data.map((item: any, index: number, index2: number) => {
                return (
                  <Grid key={index} width={{ xs: "100%", lg: "45%" }}>
                    <Stack
                      bgcolor={"transparent"}
                      borderRadius={"4px"}
                      sx={{
                        minWidth: { xs: "100%", lg: "auto" },
                        height: "350px",
                      }}
                      alignItems={"center"}
                    >
                      <motion.div
                        whileHover={{
                          transform: "translateY(-15px)",
                          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                        }}
                        style={{
                          overflowY: "hidden",
                          width: "100%",
                          height: 430,
                          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                          borderTopRightRadius: "1em",
                          borderTopLeftRadius: "1em",
                          borderBottomLeftRadius: "1em",
                          borderBottomRightRadius: "1em",
                        }}
                      >
                        <Stack
                          flexDirection={"row"}
                          component={"div"}
                          width={{ xs: "100%", lg: "auto" }}
                          height={"100%"}
                        >
                          <Stack width={"55%"}>
                            <Box
                              sx={{
                                height: "90%",
                                width: "100%",
                                zIndex: 30,
                                pt: 2,

                                bgcolor: "#fff",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                              onClick={() => handleOpen(item)}
                            >
                              <Typography variant="h5" align="center">
                                {item?.nombre}
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                display={"flex"}
                                alignItems={"center"}
                                textAlign={"justify"}
                                justifyContent={"center"}
                                color="text.secondary"
                                height={"70%"}
                                px={2}
                                pt={1}
                              >
                                {item?.descripcion}
                              </Typography>
                            </Box>
                            <Stack
                              direction={"row"}
                              width={"100%"}
                              overflow={"hidden"}
                            >
                              <ModalDeleteEvent data={item} />
                              <ModalEditEvent dataB={item} />
                            </Stack>
                          </Stack>
                          <CardMedia
                            sx={{
                              height: 400,
                              zIndex: 10,
                              width: "45%",

                              boxShadow: 10,
                            }}
                            component={"div"}
                            onClick={() => handleOpen(item)}
                            image={`${URL}uploads/events/${item?.flyer}`}
                          />
                        </Stack>
                      </motion.div>
                    </Stack>
                    <Modal
                      key={index2}
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="parent-modal-title"
                      aria-describedby="parent-modal-description"
                    >
                      <motion.div
                        animate={open ? "open" : "closed"}
                        exit={{ opacity: 0 }}
                        variants={variants}
                      >
                        <Box sx={{ ...style, width: { md: 700, xs: "100%" } }}>
                          <Stack
                            component={"form"}
                            alignItems={"center"}
                            justifyContent={"space-evenly"}
                            width={"100%"}
                            height={"100%"}
                            gap={0.5}
                            py={1}
                          >
                            <Stack
                              width={"100%"}
                              direction={"row"}
                              alignItems={"center"}
                            >
                              <Stack width={"98%"} alignItems={"center"}>
                                <Typography
                                  variant="h5"
                                  component={"h2"}
                                  fontWeight={"bold"}
                                  id="parent-modal-title"
                                  color={"#EB5D47"}
                                >
                                  {`Datos del Evento ${selectedEvent?.nombre}`}
                                </Typography>
                              </Stack>
                              <Stack width={"2%"}>
                                <IconButton
                                  onClick={() => handleClose()}
                                  sx={{ "&:hover": { bgcolor: "transparent" } }}
                                >
                                  <CloseIcon fontSize="large" />
                                </IconButton>
                              </Stack>
                            </Stack>
                            <Stack
                              direction={{ md: "row", xs: "column" }}
                              width={"100%"}
                              height={"80%"}
                              gap={1}
                            >
                              <Stack
                                direction={"column"}
                                mt={2}
                                gap={2}
                                width={"50%"}
                              >
                                <Stack direction={"column"} gap={0.5}>
                                  <Typography
                                    component={"h3"}
                                    fontWeight={"bold"}
                                    variant="subtitle1"
                                  >
                                    Descripción:
                                  </Typography>
                                  <Typography
                                    component={"h3"}
                                    variant="subtitle1"
                                    textAlign={"justify"}
                                  >
                                    {selectedEvent?.descripcion}
                                  </Typography>
                                </Stack>
                                <Stack direction={"row"} gap={0.5}>
                                  <Typography
                                    component={"h3"}
                                    fontWeight={"bold"}
                                    variant="subtitle1"
                                  >
                                    País:
                                  </Typography>
                                  <Typography
                                    component={"h3"}
                                    variant="subtitle1"
                                  >
                                    {selectedEvent?.pais}
                                  </Typography>
                                </Stack>
                                <Stack direction={"row"} gap={0.5}>
                                  <Typography
                                    component={"h3"}
                                    fontWeight={"bold"}
                                    variant="subtitle1"
                                  >
                                    Estado:
                                  </Typography>
                                  <Typography
                                    component={"h3"}
                                    variant="subtitle1"
                                  >
                                    {selectedEvent?.estado}
                                  </Typography>
                                </Stack>
                                <Stack direction={"row"} gap={0.5}>
                                  <Typography
                                    component={"h3"}
                                    fontWeight={"bold"}
                                    variant="subtitle1"
                                  >
                                    Localidad:
                                  </Typography>
                                  <Typography
                                    component={"h3"}
                                    variant="subtitle1"
                                  >
                                    {selectedEvent?.localidad}
                                  </Typography>
                                </Stack>
                                <Stack direction={"row"} gap={0.5}>
                                  <Typography
                                    component={"h3"}
                                    fontWeight={"bold"}
                                    variant="subtitle1"
                                  >
                                    Fecha de inicio:
                                  </Typography>
                                  <Typography
                                    component={"h3"}
                                    variant="subtitle1"
                                  >
                                    {dayjs(selectedEvent?.fecha_ini).format(
                                      "DD/MM/YYYY h:mm A"
                                    )}
                                  </Typography>
                                </Stack>
                                <Stack direction={"row"} gap={0.5}>
                                  <Typography
                                    component={"h3"}
                                    fontWeight={"bold"}
                                    variant="subtitle1"
                                  >
                                    Fecha de Cierre:
                                  </Typography>
                                  <Typography
                                    component={"h3"}
                                    variant="subtitle1"
                                  >
                                    {dayjs(selectedEvent?.fecha_cie).format(
                                      "DD/MM/YYYY h:mm A"
                                    )}
                                  </Typography>
                                </Stack>
                              </Stack>
                              <Stack
                                width={{ md: "50%", xs: "100%" }}
                                direction={"column"}
                              >
                                <Typography
                                  component={"h3"}
                                  fontWeight={"bold"}
                                  align="center"
                                  variant="subtitle1"
                                >
                                  Flyer:
                                </Typography>
                                <Avatar
                                  sx={{
                                    bgcolor: "#f5f5f5",
                                    width: "100%",
                                    height: "auto",
                                  }}
                                  src={`${URL}uploads/events/${selectedEvent?.flyer}`}
                                  variant="square"
                                />
                              </Stack>
                            </Stack>
                          </Stack>
                        </Box>
                      </motion.div>
                    </Modal>
                  </Grid>
                );
              })}
            </Grid>
          )}
          {isPending && Loader("10vw", 5)}
          {!isPending && events?.data.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Stack alignItems={"center"} justifyContent={"center"} mt={10}>
                <EventBusyIcon sx={{ fontSize: "11rem", color: "#EF7E6C" }} />
                <Typography
                  fontWeight={"bold"}
                  color={"#EF7E6C"}
                  fontSize={"2rem"}
                >
                  No hay eventos disponibles
                </Typography>
              </Stack>
            </motion.div>
          )}
        </Stack>
      </Stack>
    </>
  );
}
