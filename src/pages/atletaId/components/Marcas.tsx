import { Button, Stack, Typography } from "@mui/material";
import AddchartIcon from "@mui/icons-material/Addchart";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { motion } from "framer-motion";
import { AiFillInfoCircle } from "react-icons/ai";
export default function Marcas() {
  const data = [
    {
      id: "1",
      tipo_de_prueba: "100 metros lisos",
      competencia: "Juegos Olímpicos",
      fecha: "10/08/2020",
      posicion: "1",
    },
    {
      id: "2",
      tipo_de_prueba: "Salto de longitud",
      competencia: "Campeonato Mundial",
      fecha: "15/09/2019",
      posicion: "3",
    },
  ];

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
            width={"80%"}
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
        <Stack
          sx={{
            bgcolor: "#E84730",
            width: { xs: "100%", md: "70%" },
            height: "70px",
            borderRadius: "5px",

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
            <Typography fontWeight={"bold"}>{data[0]?.id}</Typography>
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
              <Typography textAlign={"center"}>
                {data[0]?.tipo_de_prueba}
              </Typography>
              <Typography textAlign={"center"} fontWeight={"bold"}>
                {data[0]?.competencia}
              </Typography>
            </Stack>
            <Stack width={"23.33%"} direction={"column"}>
              <Typography textAlign={"center"} fontWeight={"bold"}>
                Fecha
              </Typography>
              <Typography textAlign={"center"} fontWeight={"bold"}>
                {data[0]?.fecha}
              </Typography>
            </Stack>
            <Stack width={"23.33%"} direction={"column"}>
              <Typography textAlign={"center"} fontWeight={"bold"}>
                Posición
              </Typography>
              <Typography textAlign={"center"} fontWeight={"bold"}>
                {data[0]?.posicion}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            bgcolor: "#E84730",
            width: { xs: "100%", md: "70%" },
            height: "70px",
            borderRadius: "5px",

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
            <Typography fontWeight={"bold"}>{data[1]?.id}</Typography>
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
              <Typography textAlign={"center"}>
                {data[1]?.tipo_de_prueba}
              </Typography>
              <Typography textAlign={"center"} fontWeight={"bold"}>
                {data[1]?.competencia}
              </Typography>
            </Stack>
            <Stack width={"23.33%"} direction={"column"}>
              <Typography textAlign={"center"} fontWeight={"bold"}>
                Fecha
              </Typography>
              <Typography textAlign={"center"} fontWeight={"bold"}>
                {data[1]?.fecha}
              </Typography>
            </Stack>
            <Stack width={"23.33%"} direction={"column"}>
              <Typography textAlign={"center"} fontWeight={"bold"}>
                Posición
              </Typography>
              <Typography textAlign={"center"} fontWeight={"bold"}>
                {data[1]?.posicion}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        gap={2}
        justifyContent={"space-between"}
        direction={"row"}
        width={"100%"}
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            sx={{ borderRadius: "2em", "&:hover": { background: "#E84730" } }}
            startIcon={<AddchartIcon />}
            variant="contained"
          >
            <Typography textTransform={"capitalize"}>
              {" "}
              Registrar Marca
            </Typography>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            sx={{ borderRadius: "2em", "&:hover": { background: "#E84730" } }}
            endIcon={<ReceiptLongIcon />}
            variant="contained"
          >
            <Typography textTransform={"capitalize"}>Ver mas marcas</Typography>
          </Button>
        </motion.div>
      </Stack>
    </Stack>
  );
}
