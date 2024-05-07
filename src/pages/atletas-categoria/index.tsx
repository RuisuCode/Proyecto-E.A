import Badge from "@mui/material/Badge/Badge";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
/* local */
import { columns } from "./const/tableColumns";
import { theme } from "../../shared/style-components/theme/themeTable";
import { options } from "../../shared/consts/TABLE_OPTIONS";
/* icons */
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import LanIcon from "@mui/icons-material/Lan";
import {
  useGetAtletas,
  useGetAtletasAdmin,
} from "../../shared/hooks/useAtlets";

import HelpIcon from "@mui/icons-material/Help";
import { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, Tooltip } from "@mui/material";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "../../shared/styles/menuStyles.css";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Loader from "../../shared/components/Loader";
import { Variants, motion } from "framer-motion";
import dayjs from "dayjs";
import getAge2 from "./hooks/getAge2";
import { useStore } from "zustand";
import { UseAuthStore } from "../../store/UserStore";
import { useEntrenadorEstatus } from "../../shared/hooks/useCoach";

declare module "@mui/material/styles" {
  interface Components {
    [key: string]: any;
  }
}
export default function AtletasCatg() {
  const authStore = useStore(UseAuthStore);
  const rol: any = authStore.rolId;
  const entity: number = rol;
  const { data, isLoading, refetch } =
    entity === 999 ? useGetAtletasAdmin() : useGetAtletas();
  const navigate = useNavigate();
  const { mutateAsync } = useEntrenadorEstatus();

  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 300,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const renderOptions = (id: string, index: number, estatus: string) => {
    return (
      <Stack>
        {entity !== 999 && (
          <Stack key={index}>
            <Button
              startIcon={<AccountCircleIcon sx={{ fontSize: "28px" }} />}
              variant="outlined"
              sx={{ mb: 1 }}
              onClick={() => navigate(`/atleta/${id}`)}
            >
              <Typography textTransform={"capitalize"}> Perfil</Typography>
            </Button>
          </Stack>
        )}
        {entity === 999 && (
          <Stack key={index} direction={"row"} justifyContent={"space-around"}>
            <Tooltip title="Perfil" arrow>
              <IconButton
                color="primary"
                sx={{ mb: 1, width: "40px", height: "40px" }}
                onClick={() => navigate(`/atleta/${id}`)}
              >
                <AccountCircleIcon sx={{ fontSize: "28px" }} />
              </IconButton>
            </Tooltip>

            {estatus === "Activo" && (
              <Tooltip title="Desactivar" arrow>
                <IconButton
                  color="error"
                  sx={{ mb: 1, width: "40px", height: "40px" }}
                  onClick={() => mutateAsync({ id: id }).then(() => refetch())}
                >
                  <NoAccountsIcon sx={{ fontSize: "28px" }} />
                </IconButton>
              </Tooltip>
            )}
            {estatus === "Inactivo" && (
              <Tooltip title="Activar" arrow>
                <IconButton
                  color="success"
                  sx={{ mb: 1, width: "40px", height: "40px" }}
                  onClick={() => mutateAsync({ id: id }).then(() => refetch())}
                >
                  <HowToRegOutlinedIcon sx={{ fontSize: "28px" }} />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
        )}
      </Stack>
    );
  };
  const modifiedData = data?.map((item: any, index: number) => {
    const {
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      fecha_nacimiento,
    } = item;
    const { cedula, id, estatus } = item.User_id;
    const { categoria } = item.datosDeportivos;
    const Estatus = (
      <Typography
        textAlign={"center"}
        borderRadius={"13px"}
        color={"white"}
        bgcolor={estatus === "Activo" ? "#228800" : "#8f1402"}
      >
        {estatus}{" "}
      </Typography>
    );
    const Day = Number(dayjs(fecha_nacimiento).format("D"));
    const Month = Number(dayjs(fecha_nacimiento).format("M"));
    const Year = Number(dayjs(fecha_nacimiento).format("YYYY"));

    const edad = getAge2(Day, Month, Year);
    const fechaCtg = dayjs(fecha_nacimiento).format("DD/MM/YYYY");
    return {
      id,
      Estatus,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      cedula,
      categoria,
      fechaCtg,
      edad,
      options: renderOptions(id, index, estatus),
    };
  });
  useEffect(() => {
    refetch();
  }, []);
  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={{ xs: "100vw", md: "100%" }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          my={5}
          sx={{ width: { md: "80%", xs: "95vw" } }}
        >
          <Badge
            sx={{
              background: "#E84730",
              borderRadius: "10px",
              boxShadow: 4,
              height: 40,
              width: "auto",
              px: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              gap: 2,
            }}
          >
            <LanIcon sx={{ color: "#fff" }} fontSize="medium" />
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
              Listado de Atletas por Categoría
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

        <Stack height={"100%"} width={{ xs: "95%", lg: "80%" }}>
          {!isLoading && data && (
            <Stack>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <ThemeProvider theme={theme}>
                  <MUIDataTable
                    title={"Atletas Por Categoría"}
                    data={modifiedData}
                    columns={columns(entity)}
                    options={options}
                  />
                </ThemeProvider>
              </motion.div>
            </Stack>
          )}
          {isLoading && Loader("9rem", 10)}
          {!isLoading && !data && (
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
                  Atletas no encontrados
                </Typography>
              </Stack>
            </motion.div>
          )}
        </Stack>
      </Stack>
    </>
  );
}
