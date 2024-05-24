import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import { AnimatePresence, motion } from "framer-motion";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";

/* local */

/* icons */
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import HelpIcon from "@mui/icons-material/Help";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BadgeIcon from "@mui/icons-material/Badge";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { FaPersonWalking } from "react-icons/fa6";
import AlignVerticalBottomOutlinedIcon from "@mui/icons-material/AlignVerticalBottomOutlined";
import { useGetAtletaId } from "../../shared/hooks/useAtlets";
import Tabs from "@mui/material/Tabs/Tabs";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import Tab from "@mui/material/Tab/Tab";
import { useState } from "react";
import Marcas from "./components/Marcas";
import Grafica from "./components/Grafica";
import Loader from "../../shared/components/Loader";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import dayjs from "dayjs";
import getAge2 from "../atletas-categoria/hooks/getAge2";
import ModalEditAtleta from "./components/ModalEditAtleta";
import ModalTestCooper from "./components/ModalTestCooper";
import ModalUpdateTestCooper from "./components/ModalUpdtTestCooper";

export default function AtletaId() {
  const { data: dataAtleta, isLoading } = useGetAtletaId();

  const [value, setValue] = useState(0);
  const URL: string = import.meta.env.VITE_BACKEND;

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <AnimatePresence mode="wait">
        <motion.div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
          style={{ minWidth: "100%", display: "flex", alignItems: "center" }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {value === index && (
            <Box
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              sx={{ p: 1.5 }}
            >
              {children}
            </Box>
          )}
        </motion.div>
      </AnimatePresence>
    );
  }

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
            <FaPersonWalking color="#fff" size="22px" />
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
              Datos del Atleta
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

        {!isLoading && dataAtleta && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Stack
              bgcolor={"#fff"}
              width={{ xs: "95vw", md: "65vw" }}
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
                p={3}
                px={{ md: 5, xs: 1 }}
                alignItems={"center"}
                display={"flex"}
              >
                <Stack
                  justifyContent={"space-between"}
                  width={"100%"}
                  direction={"row"}
                >
                  <Stack
                    gap={1}
                    mx={1}
                    width={"100%"}
                    my={1}
                    direction={"column"}
                  >
                    <ListItem sx={{ paddingInline: "0" }}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#E84730", mb: "1px" }}>
                          <AssignmentIndIcon sx={{ fontSize: "1.5em" }} />
                        </Avatar>
                      </ListItemAvatar>
                      <Stack
                        width={"100%"}
                        color={"#fff"}
                        flexDirection={"row"}
                        gap={1}
                      >
                        <Stack gap={1} direction={{ xs: "column", md: "row" }}>
                          {" "}
                          <Typography
                            fontWeight={"bold"}
                            fontSize={{ lg: "1.5em", xs: "1em" }}
                          >
                            {dataAtleta[0]?.primer_nombre}
                          </Typography>
                          <Typography
                            fontWeight={"bold"}
                            fontSize={{ lg: "1.5em", xs: "1em" }}
                          >
                            {" "}
                            {dataAtleta[0]?.segundo_nombre}
                          </Typography>
                        </Stack>
                        <Stack gap={1} direction={{ xs: "column", md: "row" }}>
                          {" "}
                          <Typography
                            fontWeight={"bold"}
                            fontSize={{ lg: "1.5em", xs: "1em" }}
                          >
                            {" "}
                            {dataAtleta[0]?.primer_apellido}
                          </Typography>
                          <Typography
                            fontWeight={"bold"}
                            fontSize={{ lg: "1.5em", xs: "1em" }}
                          >
                            {dataAtleta[0]?.segundo_apellido}
                          </Typography>
                        </Stack>
                      </Stack>
                    </ListItem>
                    <Stack gap={1} width={"100%"} direction={"row"}>
                      <ListItem sx={{ paddingInline: "0", width: "23.33%" }}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#E84730", mb: "1px" }}>
                            <BadgeIcon sx={{ fontSize: "1.5em" }} />
                          </Avatar>
                        </ListItemAvatar>
                        <Typography
                          width={"100%"}
                          color={"#fff"}
                          zIndex={99}
                          fontSize={{ lg: "1.5em", xs: "1.2em" }}
                          fontWeight={"bold"}
                        >
                          {dataAtleta[4]}
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{
                          display: { xs: "none", md: "flex" },
                          paddingInline: "0",
                          width: "43.33%",
                          justifyContent: "center",
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#E84730", mb: "1px" }}>
                            <LanOutlinedIcon sx={{ fontSize: "1.5em" }} />
                          </Avatar>
                        </ListItemAvatar>
                        <Typography
                          color={"#fff"}
                          fontSize={{ lg: "1.5em", xs: "1.2em" }}
                          fontWeight={"bold"}
                        >
                          {dataAtleta[1]?.categoria}
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{
                          display: { xs: "none", md: "flex" },
                          paddingInline: "0",
                          width: "23.33%",
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#E84730", mb: "1px" }}>
                            <AlignVerticalBottomOutlinedIcon
                              sx={{ fontSize: "1.5em" }}
                            />
                          </Avatar>
                        </ListItemAvatar>
                        <Typography
                          width={"100%"}
                          color={"#fff"}
                          fontSize={{ lg: "1.5em", xs: "1.2em" }}
                          fontWeight={"bold"}
                        >
                          {dataAtleta[1]?.nivel}
                        </Typography>
                      </ListItem>
                    </Stack>
                  </Stack>

                  <Avatar
                    src={
                      import.meta.env.MODE !== "production"
                        ? `${URL}/uploads/atlets/${dataAtleta[0]?.foto}`
                        : `${URL}uploads/atlets/${dataAtleta[0]?.foto}`
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
                </Stack>
              </Box>
              <Stack mt={8} width={"100%"}>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab
                        sx={{ width: "33.33%" }}
                        label={
                          <Typography
                            fontWeight={"bold"}
                            display={"flex"}
                            justifyContent={"center"}
                            textTransform={"capitalize"}
                          >
                            <AnalyticsIcon />
                            Estadísticas
                          </Typography>
                        }
                        {...a11yProps(0)}
                      />
                      <Tab
                        sx={{ width: "33.33%" }}
                        label={
                          <Typography
                            fontWeight={"bold"}
                            display={"flex"}
                            justifyContent={"center"}
                            textTransform={"capitalize"}
                          >
                            <PersonIcon sx={{ mt: { xs: 1, md: 0 } }} />
                            Datos Personales
                          </Typography>
                        }
                        {...a11yProps(1)}
                      />
                      <Tab
                        sx={{ width: "33.33%" }}
                        label={
                          <Typography
                            fontWeight={"bold"}
                            textTransform={"capitalize"}
                            display={"flex"}
                            justifyContent={"center"}
                          >
                            <ReceiptLongIcon sx={{ mt: { xs: 1, md: 0 } }} />
                            Marcas Personales
                          </Typography>
                        }
                        {...a11yProps(2)}
                      />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                    <Grafica />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <Stack minWidth={"100%"} minHeight={"100%"}>
                      <Grid
                        container
                        direction={{ md: "row", xs: "column" }}
                        rowSpacing={1}
                        height={"100%"}
                        width={"100%"}
                        mb={2}
                      >
                        <Grid px={1} width={"100%"} xs={2} sm={4} md={6}>
                          <Stack width={"100%"} gap={1}>
                            <Stack gap={2} flexDirection={"row"}>
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  Nombre:
                                </Typography>
                                <Typography>
                                  {dataAtleta[0]?.primer_nombre}
                                </Typography>
                              </Stack>

                              <Typography>
                                {dataAtleta[0]?.segundo_nombre}
                              </Typography>
                            </Stack>
                            <Stack gap={2} flexDirection={"row"}>
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  Apellido:
                                </Typography>
                                <Typography>
                                  {" "}
                                  {dataAtleta[0]?.primer_apellido}
                                </Typography>
                              </Stack>

                              <Typography>
                                {" "}
                                {dataAtleta[0]?.segundo_apellido}
                              </Typography>
                            </Stack>
                            <Stack
                              justifyContent={"space-between"}
                              gap={2}
                              flexDirection={"row"}
                            >
                              <Stack flexDirection={"row"}>
                                <Typography fontWeight={"bold"} mr={1}>
                                  Cédula:
                                </Typography>
                                <Typography> {dataAtleta[4]}</Typography>
                              </Stack>
                            </Stack>
                            <Stack flexDirection={"row"}>
                              <Typography
                                textAlign={"start"}
                                fontWeight={"bold"}
                                mr={1}
                              >
                                Genero:
                              </Typography>
                              <Typography>
                                {dataAtleta[0]?.genero === "m"
                                  ? "Masculino"
                                  : "Femenino"}
                              </Typography>
                            </Stack>
                            <Stack width={"100%"} gap={2} flexDirection={"row"}>
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  Teléfono:
                                </Typography>
                                <Typography>
                                  {dataAtleta[0]?.telefono === ""
                                    ? "No registrado"
                                    : dataAtleta[0]?.telefono}
                                </Typography>
                              </Stack>
                            </Stack>
                            <Stack flexDirection={"row"}>
                              <Typography
                                textAlign={"start"}
                                fontWeight={"bold"}
                                mr={1}
                              >
                                Correo:
                              </Typography>
                              <Typography>
                                {dataAtleta[0]?.email === null
                                  ? "No registrado"
                                  : dataAtleta[0]?.email}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Grid>

                        <Grid px={1} width={"100%"} xs={2} sm={4} md={6}>
                          <Stack
                            height={"100%"}
                            flexDirection={"column"}
                            gap={0.5}
                            justifyContent={"space-evenly"}
                          >
                            <Stack
                              justifyContent={"space-between"}
                              gap={0.1}
                              flexDirection={{ md: "row", xs: "column" }}
                            >
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={0.1}
                                >
                                  Estatura:
                                </Typography>
                                <Typography>
                                  {`${dataAtleta[2]?.estatura}CM`}
                                </Typography>
                              </Stack>
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={0.1}
                                >
                                  Estatura sentado:
                                </Typography>
                                <Typography>
                                  {`${dataAtleta[2]?.estatura_sentd}CM`}
                                </Typography>
                              </Stack>
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={0.1}
                                >
                                  Peso:
                                </Typography>
                                <Typography>{`${dataAtleta[2]?.peso}KG`}</Typography>
                              </Stack>
                            </Stack>

                            <Stack
                              justifyContent={"space-between"}
                              gap={2}
                              flexDirection={{ md: "row", xs: "column" }}
                            >
                              <Stack
                                alignItems={"center"}
                                flexDirection={"row"}
                              >
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  Test de Cooper:
                                </Typography>
                                <Typography>
                                  {dataAtleta[1]?.test_cooper === 0
                                    ? "No realizado"
                                    : `${dataAtleta[1]?.test_cooper} M`}
                                </Typography>
                              </Stack>
                              <Stack
                                display={
                                  dataAtleta[1]?.test_cooper != 0
                                    ? "none"
                                    : "flex"
                                }
                              >
                                <ModalTestCooper />
                              </Stack>
                              <Stack
                                display={
                                  dataAtleta[1]?.test_cooper === 0
                                    ? "none"
                                    : "flex"
                                }
                                flexDirection={"row"}
                              >
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  Calificación:
                                </Typography>
                                <Typography>
                                  {dataAtleta[1]?.cal_test_cooper}
                                </Typography>
                              </Stack>
                            </Stack>
                            <Stack
                              justifyContent={"space-between"}
                              gap={2}
                              display={
                                dataAtleta[1]?.test_cooper === 0
                                  ? "none"
                                  : "flex"
                              }
                              flexDirection={{ md: "row", xs: "column" }}
                            >
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  VO2Max:
                                </Typography>
                                <Typography>
                                  {dataAtleta[1]?.vo_2_max} L/min
                                </Typography>
                              </Stack>
                            </Stack>
                            <Stack
                              justifyContent={"space-between"}
                              gap={2}
                              flexDirection={{ md: "row", xs: "column" }}
                            >
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={0.5}
                                >
                                  Indice Cormico:
                                </Typography>
                                <Typography>
                                  {dataAtleta[2]?.indc_cormico}
                                </Typography>
                              </Stack>
                            </Stack>
                            <Stack
                              justifyContent={"space-between"}
                              gap={2}
                              flexDirection={{ md: "row", xs: "column" }}
                            >
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={0.5}
                                >
                                  Indice masa corporal:
                                </Typography>
                                <Typography>
                                  {dataAtleta[2]?.indc_masa}
                                </Typography>
                              </Stack>
                            </Stack>
                            <Stack
                              justifyContent={"space-between"}
                              gap={2}
                              flexDirection={{ md: "row", xs: "column" }}
                            >
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  Fecha de Nacimiento:
                                </Typography>
                                <Typography>
                                  {dayjs(
                                    dataAtleta[0]?.fecha_nacimiento
                                  ).format("DD/MM/YYYY")}
                                </Typography>
                              </Stack>
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  Edad:
                                </Typography>
                                <Typography>
                                  {getAge2(
                                    Number(
                                      dayjs(
                                        dataAtleta[0]?.fecha_nacimiento
                                      ).format("DD")
                                    ),
                                    Number(
                                      dayjs(
                                        dataAtleta[0]?.fecha_nacimiento
                                      ).format("MM")
                                    ),
                                    Number(
                                      dayjs(
                                        dataAtleta[0]?.fecha_nacimiento
                                      ).format("YYYY")
                                    )
                                  )}
                                </Typography>
                              </Stack>
                            </Stack>
                            <Stack
                              justifyContent={"space-between"}
                              gap={2}
                              flexDirection={"row"}
                            >
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  Tipo de Sangre:
                                </Typography>
                                <Typography>
                                  {dataAtleta[2]?.tipo_sangre}
                                </Typography>
                              </Stack>
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  Envergadura:
                                </Typography>
                                <Typography>
                                  {`${dataAtleta[2]?.envergadura} CM`}
                                </Typography>
                              </Stack>
                            </Stack>
                          </Stack>
                        </Grid>

                        <Grid
                          px={1}
                          width={"100%"}
                          xs={2}
                          sm={4}
                          md={dataAtleta[3] === null ? 12 : 6}
                          alignContent={"center"}
                        >
                          <Stack
                            height={"100%"}
                            flexDirection={"column"}
                            gap={1}
                            justifyContent={"space-evenly"}
                          >
                            <Stack
                              justifyContent={"space-between"}
                              gap={2}
                              flexDirection={"row"}
                            >
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  Categoría:
                                </Typography>
                                <Typography>
                                  {dataAtleta[1]?.categoria}
                                </Typography>
                              </Stack>
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  Nivel:
                                </Typography>
                                <Typography>{dataAtleta[1]?.nivel}</Typography>
                              </Stack>
                            </Stack>
                            <Stack
                              justifyContent={"space-between"}
                              gap={2}
                              flexDirection={"row"}
                            >
                              <Stack flexDirection={"column"}>
                                <Typography fontWeight={"bold"} mr={1}>
                                  Observaciones:
                                </Typography>
                                <Typography textAlign={"justify"}>
                                  {dataAtleta[1]?.observaciones === ""
                                    ? "Sin observaciones"
                                    : dataAtleta[1]?.observaciones}
                                </Typography>
                              </Stack>
                              <Stack flexDirection={"column"}>
                                <Typography fontWeight={"bold"} mr={1}>
                                  Formación académica:
                                </Typography>
                                <Typography textAlign={"justify"}>
                                  {dataAtleta[0]?.estudios === null
                                    ? "No registrado"
                                    : dataAtleta[0]?.estudios}
                                </Typography>
                              </Stack>
                            </Stack>
                          </Stack>
                        </Grid>
                        {dataAtleta[3] !== null && (
                          <Grid px={1} width={"100%"} xs={2} sm={4} md={6}>
                            <Stack
                              height={"100%"}
                              flexDirection={"column"}
                              gap={1}
                              justifyContent={"space-between"}
                            >
                              <Stack gap={2} flexDirection={"row"}>
                                <Stack flexDirection={"row"}>
                                  <Typography
                                    textAlign={"start"}
                                    fontWeight={"bold"}
                                    mr={1}
                                  >
                                    Representante:
                                  </Typography>
                                  <Typography>
                                    {" "}
                                    {dataAtleta[3]?.nombre_repre}
                                  </Typography>
                                </Stack>

                                <Typography>
                                  {dataAtleta[3]?.apellido_repre}
                                </Typography>
                              </Stack>
                              <Stack gap={2} flexDirection={"row"}>
                                <Stack flexDirection={"row"}>
                                  <Typography
                                    textAlign={"start"}
                                    fontWeight={"bold"}
                                    mr={1}
                                  >
                                    Cédula del representante:
                                  </Typography>
                                  <Typography>
                                    {" "}
                                    {dataAtleta[3]?.cedula_repre}
                                  </Typography>
                                </Stack>
                              </Stack>
                              <Stack gap={2} flexDirection={"row"}>
                                <Stack flexDirection={"row"}>
                                  <Typography
                                    textAlign={"start"}
                                    fontWeight={"bold"}
                                    mr={1}
                                  >
                                    Correo del Representante:
                                  </Typography>
                                  <Typography>
                                    {dataAtleta[3]?.email_repre === null
                                      ? "No registrado"
                                      : dataAtleta[3]?.email_repre}
                                  </Typography>
                                </Stack>
                              </Stack>

                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  Parentesco:
                                </Typography>
                                <Typography>
                                  {dataAtleta[3]?.parentesco}
                                </Typography>
                              </Stack>
                              <Stack flexDirection={"row"}>
                                <Typography
                                  textAlign={"start"}
                                  fontWeight={"bold"}
                                  mr={1}
                                >
                                  Teléfono:
                                </Typography>
                                <Typography>
                                  {`0${dataAtleta[3]?.telefono_repre}`}
                                </Typography>
                              </Stack>
                            </Stack>
                          </Grid>
                        )}
                      </Grid>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Stack
                          display={
                            dataAtleta[1]?.test_cooper != 0 ? "flex" : "none"
                          }
                        >
                          <ModalUpdateTestCooper
                            tcooper={dataAtleta[1]?.test_cooper}
                          />
                        </Stack>
                        <ModalEditAtleta dataB={dataAtleta} />
                      </Stack>
                    </Stack>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    <Marcas />
                  </CustomTabPanel>
                </Box>
              </Stack>
            </Stack>
          </motion.div>
        )}
        {isLoading && Loader("9rem", 10)}
        {!isLoading && !dataAtleta && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Stack alignItems={"center"} justifyContent={"center"} mt={10}>
              <NewReleasesIcon sx={{ fontSize: "11rem", color: "#EF7E6C" }} />
              <Typography
                fontWeight={"bold"}
                color={"#EF7E6C"}
                fontSize={"2rem"}
              >
                Error en el servidor
              </Typography>
            </Stack>
          </motion.div>
        )}
      </Stack>
    </>
  );
}
