import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
/* icons */
import { useEffect, useState } from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { motion } from "framer-motion";
import MUIDataTable from "mui-datatables";
/* local */
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import dayjs from "dayjs";
import {
  useMarcasAllAtleta,
} from "../../../shared/hooks/useMarcas";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";
import { theme } from "../../../shared/style-components/theme/themeTable";
import { columns } from "./const/tableColumns";
import { options } from "../../../shared/consts/TABLE_OPTIONS";
import Loader from "../../../shared/components/Loader";
import { IconButton } from "@mui/material";

declare module "@mui/material/styles" {
  interface Components {
    [key: string]: any;
  }
}
export default function TableRecords({ idAtleta }: { idAtleta: any }) {
  const { data, mutate, isPending } = useMarcasAllAtleta();
  useEffect(() => {
    mutate({ id: idAtleta });
  }, [idAtleta]);
  const [scale1, setScale1] = useState(false);


  const modifiedData = data?.data?.map((item: any, index: number) => {
    const id = index + 1;

    const {
      tipo_prueba_id,
      competencia,
      tipo_prueba,
      prueba,
      posicion,
      resultado,
      ubicacion,
      fecha,
    } = item;
    const Ubicacion = (
      <Typography display={"flex"} flexDirection={"column"}>
        <Typography>{ubicacion.split(",")[0]}</Typography>
        <Typography>{ubicacion.split(",")[1]}</Typography>
        <Typography>{ubicacion.split(",")[2]}</Typography>
      </Typography>
    );
    const Resultado = tipo_prueba_id === 1 ? `${resultado} M` : `${resultado} `;
    const Fecha = dayjs(fecha).format("DD/MM/YYYY");
    return {
      id,
      competencia,
      tipo_prueba,
      prueba,
      posicion,
      Resultado,
      Ubicacion,
      Fecha,
    };
  });

  return (
    <>
      <Stack
        display={scale1 === true ? "flex" : "none"}
        width={"98vw"}
        height={"100dvh"}
        sx={{
          filter: "blur(15px)",
          bgcolor: "rgba(250,250,250,0.8)",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: 999,
        }}
      ></Stack>
      <Stack


        width={{ md: "60%", xs: "100%" }}
        alignItems={{ xs: "center", md: "initial" }}
      >
        <Stack
          height={"100%"}
          width={{ xs: "95%", lg: scale1 === true ? "80%" : "100%" }}
        >
          {!isPending && data && (
            <Stack borderRadius={"13px"} width={"100%"}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileInView={{ scale: scale1 === true ? 1.1 : 1 }}
                style={{
                  zIndex: 999,
                  position: scale1 === true ? "absolute" : "initial",
                  top: scale1 === true ? "25%" : 0,
                  left: scale1 === true ? "25%" : 0,
                }}
                viewport={{ once: true }}
              >
                <Stack
                  width={"100%"}
                  display={{ md: "flex", xs: "none" }}
                  alignItems={"flex-end"}
                >
                  <IconButton onClick={() => setScale1(!scale1)}>
                    <OpenInFullRoundedIcon color="secondary" />
                  </IconButton>
                </Stack>
                <ThemeProvider theme={theme}>
                  <MUIDataTable
                    title={"Marcas Realizadas"}
                    data={modifiedData}
                    columns={columns}
                    options={options}
                    
                  />
                </ThemeProvider>
              </motion.div>
            </Stack>
          )}
          {isPending && Loader("9rem", 10)}
          {!isPending && !data && (
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
                  Marcas no encontradas
                </Typography>
              </Stack>
            </motion.div>
          )}
        </Stack>
      </Stack>
    </>
  );
}
