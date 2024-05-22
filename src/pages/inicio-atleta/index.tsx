import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import HelpIcon from "@mui/icons-material/Help";
import { useStore } from "zustand";
import { UseAuthStore } from "../../store/UserStore";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import TableRecords from "./components/TableMarcas";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import AlignVerticalBottomOutlinedIcon from "@mui/icons-material/AlignVerticalBottomOutlined";

import getAge2 from "../atletas-categoria/hooks/getAge2";
import dayjs from "dayjs";
import GraficaInicioAtleta from "./components/Grafica";
import ModalRepresentante from "./components/ModalRepresentante";

export default function InicioAtleta() {
  const authStore = useStore(UseAuthStore);
  const datoUser: any = authStore.user;
  const URL: string = import.meta.env.VITE_BACKEND;

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={{ xs: "100vw", md: "100%" }}
        height={"auto"}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          my={4}
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
        <Stack width={{ md: "85vw", xs: "95vw" }} gap={1}>
          {/* en mobil */}
          <Stack
            sx={{
              background:
                "linear-gradient(0deg, rgba(232,71,48,1) 0%, rgba(239,126,108,1) 60%, rgba(249,206,200,1) 81%, rgb(245, 245, 245) 100%)",
            }}
            borderRadius={"13px"}
            boxShadow={4}
            p={1}
            width={"100%"}
            direction={"column"}
            display={{ md: "none", xs: "flex" }}
            height={"auto"}
            px={2}
            overflow={"hidden"}
          >
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              mr={2}
              width={"100%"}
            >
              <Avatar
                src={
                  import.meta.env.MODE !== "production"
                    ? `${URL}/uploads/atlets/${datoUser?.foto}`
                    : `${URL}uploads/atlets/${datoUser?.foto}`
                }
                sx={{
                  width: 250,
                  height: 250,
                  border: "4px solid #f5f5f5",
                  zIndex: 999,
                  bgcolor: "#fff",
                  boxShadow: 5,
                }}
              />
            </Stack>
            <Stack height={"200px"}>
              <Stack height={"50%"} alignItems={"center"}>
                <Typography
                  sx={{ transform: "translateY(18px)" }}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={1}
                  color={"#fff"}
                >
                  <Typography fontSize={"2em"}>
                    {datoUser?.primer_nombre}
                  </Typography>
                  <Typography fontSize={"2em"}>
                    {datoUser?.segundo_nombre}
                  </Typography>
                </Typography>
                <Typography
                  display={"flex"}
                  flexDirection={"row"}
                  color={"#fff"}
                  gap={1}
                >
                  <Typography
                    fontWeight={"bold"}
                    fontSize={{ md: "3.5em", xs: "2.5em" }}
                  >
                    {datoUser?.primer_apellido}
                  </Typography>
                  <Typography
                    fontWeight={"bold"}
                    fontSize={{ md: "3.5em", xs: "2.5em" }}
                  >
                    {datoUser?.segundo_apellido}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                height={"50%"}
                direction={"row"}
                gap={0.5}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Stack
                  direction={"row"}
                  height={"50%"}
                  gap={2}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                >
                  <ListItem sx={{ bgcolor: "#EF7E6C", borderRadius: "13px" }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "transparent", mb: "1px" }}>
                        <LanOutlinedIcon
                          sx={{ fontSize: "1.5em", color: "#fff" }}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Categoría"
                      primaryTypographyProps={{
                        color: "#fff",
                      }}
                      secondaryTypographyProps={{
                        color: "#f5f5f5",
                      }}
                      secondary={datoUser?.datosDeportivos?.categoria}
                    />
                  </ListItem>
                  <ListItem sx={{ bgcolor: "#EF7E6C", borderRadius: "13px" }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "transparent", mb: "1px" }}>
                        <AlignVerticalBottomOutlinedIcon
                          sx={{ fontSize: "1.5em", color: "#fff" }}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primaryTypographyProps={{
                        color: "#fff",
                      }}
                      secondaryTypographyProps={{
                        color: "#f5f5f5",
                      }}
                      primary="Nivel"
                      secondary={datoUser?.datosDeportivos?.nivel}
                    />
                  </ListItem>
                  <ModalRepresentante repre={datoUser?.representante} />
                </Stack>
              </Stack>
            </Stack>

            <Stack my={1} gap={1}>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Cedula:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.User_id?.cedula}
                  </Typography>
                </Typography>
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Genero:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.genero === "m" ? "Masculino" : "Femenino"}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Edad:
                  <Typography color={"#f5f5f5"}>
                    {getAge2(
                      Number(dayjs(datoUser?.fecha_nacimiento).format("DD")),
                      Number(dayjs(datoUser?.fecha_nacimiento).format("MM")),
                      Number(dayjs(datoUser?.fecha_nacimiento).format("YYYY"))
                    )}
                  </Typography>
                </Typography>
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Teléfono:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.telefono}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Fecha de nacimiento:
                  <Typography color={"#f5f5f5"}>
                    {dayjs(datoUser?.fecha_nacimiento).format("DD/MM/YYYY")}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Envergadura:
                  <Typography color={"#f5f5f5"}>
                    {`${datoUser?.datosGeneticos?.envergadura} CM`}
                  </Typography>
                </Typography>
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Estatura:
                  <Typography color={"#f5f5f5"}>
                    {`${datoUser?.datosGeneticos?.estatura} CM`}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Estatura sentado:
                  <Typography color={"#f5f5f5"}>
                    {`${datoUser?.datosGeneticos?.estatura_sentd} CM`}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Peso:
                  <Typography color={"#f5f5f5"}>
                    {`${datoUser?.datosGeneticos?.peso} KG`}
                  </Typography>
                </Typography>
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Tipo de sangre:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.datosGeneticos?.tipo_sangre}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
                display={
                  datoUser?.datosDeportivos?.test_cooper === 0 || NaN || null
                    ? "none"
                    : "flex"
                }
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Test de Cooper:
                  <Typography color={"#f5f5f5"}>
                    {`${datoUser?.datosDeportivos?.test_cooper} M`}
                  </Typography>
                </Typography>
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Calificación:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.datosDeportivos?.cal_test_cooper}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
                display={
                  datoUser?.datosDeportivos?.test_cooper === 0 || NaN || null
                    ? "none"
                    : "flex"
                }
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  VO2Max:
                  <Typography color={"#f5f5f5"}>
                    {`${datoUser?.datosDeportivos?.vo_2_max} L/min`}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Indice Cormico:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.datosGeneticos?.indc_cormico}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Indice masa corporal:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.datosGeneticos?.indc_masa}
                  </Typography>
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          {/* en pc */}
          <Stack
            sx={{
              background:
                "linear-gradient(96deg, rgba(232,71,48,1) 0%, rgba(239,126,108,1) 60%, rgba(249,206,200,1) 81%, rgb(245, 245, 245) 100%)",
            }}
            borderRadius={"13px"}
            boxShadow={4}
            p={1}
            width={"100%"}
            direction={"row"}
            display={{ md: "flex", xs: "none" }}
            height={"320px"}
            px={2}
          >
            <Stack height={"100%"} width={"38.33%"}>
              <Stack height={"50%"}>
                <Typography
                  sx={{ transform: "translateY(28px)" }}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={1}
                  color={"#fff"}
                >
                  <Typography fontSize={"2em"}>
                    {datoUser?.primer_nombre}
                  </Typography>
                  <Typography fontSize={"2em"}>
                    {datoUser?.segundo_nombre}
                  </Typography>
                </Typography>
                <Typography
                  display={"flex"}
                  flexDirection={"row"}
                  color={"#fff"}
                  gap={1}
                >
                  <Typography
                    fontWeight={"bold"}
                    fontSize={{ md: "3.5em", xs: "auto" }}
                  >
                    {datoUser?.primer_apellido}
                  </Typography>
                  <Typography
                    fontWeight={"bold"}
                    fontSize={{ md: "3.5em", xs: "auto" }}
                  >
                    {datoUser?.segundo_apellido}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                height={"50%"}
                direction={"row"}
                gap={0.5}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Stack
                  direction={"row"}
                  height={"50%"}
                  gap={2}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                >
                  <ListItem sx={{ bgcolor: "#EF7E6C", borderRadius: "13px" }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "transparent", mb: "1px" }}>
                        <LanOutlinedIcon
                          sx={{ fontSize: "1.5em", color: "#fff" }}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Categoría"
                      primaryTypographyProps={{
                        color: "#fff",
                      }}
                      secondaryTypographyProps={{
                        color: "#f5f5f5",
                      }}
                      secondary={datoUser?.datosDeportivos?.categoria}
                    />
                  </ListItem>
                  <ListItem sx={{ bgcolor: "#EF7E6C", borderRadius: "13px" }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "transparent", mb: "1px" }}>
                        <AlignVerticalBottomOutlinedIcon
                          sx={{ fontSize: "1.5em", color: "#fff" }}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primaryTypographyProps={{
                        color: "#fff",
                      }}
                      secondaryTypographyProps={{
                        color: "#f5f5f5",
                      }}
                      primary="Nivel"
                      secondary={datoUser?.datosDeportivos?.nivel}
                    />
                  </ListItem>
                  <ModalRepresentante repre={datoUser?.representante} />
                </Stack>
              </Stack>
            </Stack>

            <Stack width={"38.33%"} sx={{ fontSize: "10px" }} my={1} gap={1}>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Cedula:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.User_id?.cedula}
                  </Typography>
                </Typography>
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Genero:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.genero === "m" ? "Masculino" : "Femenino"}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Edad:
                  <Typography color={"#f5f5f5"}>
                    {getAge2(
                      Number(dayjs(datoUser?.fecha_nacimiento).format("DD")),
                      Number(dayjs(datoUser?.fecha_nacimiento).format("MM")),
                      Number(dayjs(datoUser?.fecha_nacimiento).format("YYYY"))
                    )}
                  </Typography>
                </Typography>
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Teléfono:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.telefono}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Fecha de nacimiento:
                  <Typography color={"#f5f5f5"}>
                    {dayjs(datoUser?.fecha_nacimiento).format("DD/MM/YYYY")}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Envergadura:
                  <Typography color={"#f5f5f5"}>
                    {`${datoUser?.datosGeneticos?.envergadura} CM`}
                  </Typography>
                </Typography>
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Estatura:
                  <Typography color={"#f5f5f5"}>
                    {`${datoUser?.datosGeneticos?.estatura} CM`}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Estatura sentado:
                  <Typography color={"#f5f5f5"}>
                    {`${datoUser?.datosGeneticos?.estatura_sentd} CM`}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Peso:
                  <Typography color={"#f5f5f5"}>
                    {`${datoUser?.datosGeneticos?.peso} KG`}
                  </Typography>
                </Typography>
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Tipo de sangre:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.datosGeneticos?.tipo_sangre}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
                display={
                  datoUser?.datosDeportivos?.test_cooper === 0 || NaN || null
                    ? "none"
                    : "flex"
                }
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Test de Cooper:
                  <Typography color={"#f5f5f5"}>
                    {`${datoUser?.datosDeportivos?.test_cooper} M`}
                  </Typography>
                </Typography>
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Calificación:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.datosDeportivos?.cal_test_cooper}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
                display={
                  datoUser?.datosDeportivos?.test_cooper === 0 || NaN || null
                    ? "none"
                    : "flex"
                }
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  VO2Max:
                  <Typography color={"#f5f5f5"}>
                    {`${datoUser?.datosDeportivos?.vo_2_max} L/min`}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Indice Cormico:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.datosGeneticos?.indc_cormico}
                  </Typography>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Typography
                  color={"#fff"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={0.2}
                  fontWeight={"bold"}
                >
                  Indice masa corporal:
                  <Typography color={"#f5f5f5"}>
                    {datoUser?.datosGeneticos?.indc_masa}
                  </Typography>
                </Typography>
              </Stack>
            </Stack>

            <Stack
              alignItems={"end"}
              justifyContent={"center"}
              mr={2}
              width={"28.33%"}
            >
              <Avatar
                src={
                  import.meta.env.MODE !== "production"
                    ? `${URL}/uploads/atlets/${datoUser?.foto}`
                    : `${URL}uploads/atlets/${datoUser?.foto}`
                }
                sx={{
                  width: 250,
                  height: 250,
                  border: "4px solid #f5f5f5",
                  zIndex: 999,
                  bgcolor: "#fff",
                  boxShadow: 5,
                }}
              />
            </Stack>
          </Stack>
          <Stack
            direction={{ md: "row", xs: "column" }}
            width={"100%"}
            gap={{ md: 0.5, xs: 1 }}
          >
            <TableRecords idAtleta={datoUser?.User_id?.id} />
            <GraficaInicioAtleta idAtleta={datoUser?.User_id?.id} />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
