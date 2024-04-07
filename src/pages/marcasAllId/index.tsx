import Badge from "@mui/material/Badge/Badge";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
/* icons */
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HelpIcon from "@mui/icons-material/Help";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { FaListUl } from "react-icons/fa6";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Loader from "../../shared/components/Loader";
import { Variants, motion } from "framer-motion";
import { useGetMarcasAll } from "../../shared/hooks/useMarcas";
import MUIDataTable from "mui-datatables";
/* local */
import { columns } from "./const/tableColumns";
import { theme } from "../../shared/style-components/theme/themeTable";
import { options } from "../../shared/consts/TABLE_OPTIONS";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import dayjs from "dayjs";
import { useGetAtletaIdM } from "../../shared/hooks/useAtlets";
import ModalDelete from "./components/ModalDelete";
import "../../shared/styles/menuStyles.css";
import ModalEdit from "./components/ModalEdit";

declare module "@mui/material/styles" {
  interface Components {
    [key: string]: any;
  }
}
export default function MarcasAllId() {
  const { data, isLoading, refetch } = useGetMarcasAll();
  const { data: data_user } = useGetAtletaIdM();

  const navigate = useNavigate();
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
  useEffect(() => {
    refetch();
  }, []);
  const renderOptions = (index: number, Data: any) => {
    return (
      <Menu
        key={index}
        direction="left"
        position="auto"
        arrow={true}
        menuButton={
          <MenuButton className={"my-menu"}>
            <FaListUl />
          </MenuButton>
        }
        transition
      >
        <MenuItem className={"my-menuitem"}>
          <Stack width={"100%"}>
            <ModalEdit dataO={Data} />
          </Stack>
        </MenuItem>
        <MenuItem className={"my-menuitem"}>
          <Stack width={"100%"}>
            <ModalDelete data={Data} />
          </Stack>
        </MenuItem>
      </Menu>
    );
  };
  const modifiedData = data?.map((item: any, index: number) => {
    const {
      id,
      tipo_prueba_id,
      competencia,
      tipo_prueba,
      prueba,
      posicion,
      resultado,
      ubicacion,
      fecha,
    } = item;
    const Data = item;
    const Resultado = tipo_prueba_id === 1 ? `${resultado} M` : `${resultado} `;
    const Fecha = dayjs(fecha).format("DD/MM/YYYY");
    return {
      id,
      competencia,
      tipo_prueba,
      prueba,
      posicion,
      Resultado,
      ubicacion,
      Fecha,
      options: renderOptions(index, Data),
    };
  });

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
              height: "auto",
              px: 1,
              width: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              gap: 2,
            }}
          >
            <ReceiptLongIcon sx={{ color: "#fff" }} fontSize="medium" />
            <Stack direction={{ xs: "column", md: "row" }}>
              <Stack direction={"row"} alignItems={"center"}>
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
                  onClick={() => navigate(-1)}
                >
                  Atleta
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
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
                  Listado de Marcas del Atleta
                </Typography>
              </Stack>
            </Stack>
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
                    title={`Marcas de ${data_user?.data[0]} ${data_user?.data[1]}`}
                    data={modifiedData}
                    columns={columns}
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
