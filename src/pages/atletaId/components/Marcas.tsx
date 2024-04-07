import { Button, Stack, Typography } from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { motion } from "framer-motion";
import { AiFillInfoCircle } from "react-icons/ai";
import ModalRegistro from "./ModalRegistroMarcas";
import { useGetMarcas2 } from "../../../shared/hooks/useMarcas";
import dayjs from "dayjs";
import Loader from "../../../shared/components/Loader";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Marcas() {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useGetMarcas2();
  const location = useLocation();
  const id = location.pathname.split("/")[2];


  useEffect(() => {
    refetch();
  }, []);
  return (
    <Stack minWidth={"100%"} minHeight={"100%"}>
      <Stack
        direction={"column"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
        mb={2}
      >
        <Stack
          sx={{
            bgcolor: "#ED6D5A",
            width: { xs: "100%", md: "40%" },
            height: "50px",
            borderRadius: "15px",

            border: "5px solid",
            color: "#ffff",
          }}
          direction={"row"}
        >
          <Stack justifyContent={"center"} alignItems={"center"} px={1}>
            <AiFillInfoCircle
              fontWeight={"bold"}
              size={"25px"}
              color="#f8e6d9"
            />
          </Stack>
          <Stack
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"85%"}
            direction={"row"}
            px={1}
          >
            <Typography
              fontStyle={"italic"}
              fontWeight={"bold"}
              width={"100%"}
              textAlign={"center"}
              color={"#f8e6d9"}
            >
              Marcas del atleta mas recientes:
            </Typography>
          </Stack>
        </Stack>
        {isLoading && Loader("40px", 0)}
        {!isLoading && data && (
          <Stack width={"100%"} alignItems={"center"}>
            {data?.map((item: any, index: number) => {
              return (
                <Stack
                  key={index}
                  sx={{
                    bgcolor: "#E84730",
                    width: { xs: "100%", md: "70%" },
                    height: { xs: "150px", md: "70px" },
                    borderRadius: "5px",
                    mb: 2,
                    border: "5px solid",
                    borderColor: "#ED6D5A",
                    color: "#ffff",
                  }}
                  direction={"row"}
                >
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    bgcolor="#E84730"
                    borderRadius={"5px"}
                    width={"20%"}
                  >
                    <Typography fontWeight={"bold"}>{item?.id}</Typography>
                  </Stack>
                  <Stack
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    bgcolor={"#ED6D5A"}
                    width={"80%"}
                    direction={"row"}
                    px={1}
                  >
                    <Stack width={"53.33%"}>
                      <Typography fontStyle={"italic"} textAlign={"center"}>
                        {item?.prueba}
                      </Typography>
                      <Typography textAlign={"center"} fontWeight={"bold"}>
                        {item?.competencia}
                      </Typography>
                    </Stack>
                    <Stack
                      width={"46.66%"}
                      direction={{ xs: "column", md: "row" }}
                    >
                      <Stack width={"50%"} direction={"column"}>
                        <Typography textAlign={"center"} fontWeight={"bold"}>
                          Fecha
                        </Typography>
                        <Typography textAlign={"center"} fontWeight={"bold"}>
                          {dayjs(item?.fecha).format("DD/MM/YYYY")}
                        </Typography>
                      </Stack>
                      <Stack width={"50%"} direction={"column"}>
                        <Typography textAlign={"center"} fontWeight={"bold"}>
                          Posición
                        </Typography>
                        <Typography textAlign={"center"} fontWeight={"bold"}>
                          {item?.posicion}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack width={"23.33%"} direction={"column"}>
                      <Typography textAlign={"center"} fontWeight={"bold"}>
                        {item?.tipo_prueba_id === 1 ? "Distancia" : "Tiempo"}
                      </Typography>
                      <Typography textAlign={"center"} fontWeight={"bold"}>
                        {item?.resultado}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        )}
        {!isLoading && !data && (
          <Typography>Datos no encontrados...</Typography>
        )}
      </Stack>
      <Stack
        gap={2}
        justifyContent={"space-between"}
        direction={"row"}
        width={"100%"}
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <ModalRegistro />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            sx={{ borderRadius: "2em", "&:hover": { background: "#E84730" } }}
            endIcon={<ReceiptLongIcon />}
            variant="contained"
            onClick={() => navigate(`/marcas/${id}/marcas_all`)}
          >
            <Typography textTransform={"capitalize"}>Ver mas marcas</Typography>
          </Button>
        </motion.div>
      </Stack>
    </Stack>
  );
}
