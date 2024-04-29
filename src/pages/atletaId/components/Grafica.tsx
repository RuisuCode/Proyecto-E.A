import {
  Button,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";
import { useGraficaPost } from "../../../shared/hooks/useMarcas";
import { useEffect, useState } from "react";
import { usePruebas } from "../../../shared/hooks/usePruebas";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import Loader from "../../../shared/components/Loader";

export default function Grafica() {
  const { mutate, data: data1, isPending } = useGraficaPost();
  const { data: pruebas, refetch } = usePruebas();
  const [pruebaG, setPruebaG] = useState("");
  const [tipoId, setTipoId] = useState(0);

  const ChangePrueba = (event: SelectChangeEvent) => {
    setPruebaG(event.target.value as string);
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Stack
      alignItems={"center"}
      minWidth={"100%"}
      sx={{ overflowX: { xs: "scroll", lg: "hidden" }, overflowY: "hidden" }}
    >
      <Stack alignItems={"center"} minWidth={"100%"}>
        <Stack
          direction={tipoId !== 0 ? "row" : "column"}
          alignItems={"center"}
          width={"100%"}
          height={{ md: "2.9em", xs: "2.9em" }}
          gap={1}
          my={4}
        >
          <Typography
            color={"primary"}
            fontWeight={"bold"}
            fontSize={"1.4em"}
            display={tipoId !== 0 ? "none" : "flex"}
          >
            Seleccione un tipo de prueba
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            height={"100%"}
            width={"100%"}
            mx={{ md: "10%", xs: "1" }}
          >
            <Stack
              direction={"row"}
              width={"100%"}
              height={"100%"}
              justifyContent={tipoId !== 0 ? "normal" : "space-around"}
            >
              <Button
                variant={tipoId !== 0 ? "contained" : "outlined"}
                sx={{
                  display: tipoId === 2 ? "none" : "flex",
                  borderRadius: "10px",
                }}
                onClick={() => setTipoId(1)}
              >
                <Typography textTransform={"initial"}>Prueba Campo</Typography>
              </Button>
              <Button
                variant={tipoId !== 0 ? "contained" : "outlined"}
                sx={{
                  display: tipoId === 1 ? "none" : "flex",
                  borderRadius: "10px",
                }}
                onClick={() => setTipoId(2)}
              >
                <Typography textTransform={"initial"}>Prueba Pista</Typography>
              </Button>
            </Stack>

            {tipoId !== 0 && tipoId === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Stack direction={"row"}>
                  <Select
                    value={pruebaG}
                    displayEmpty
                    onChange={ChangePrueba}
                    sx={{
                      height: "2.9em",
                      borderRadius: "10px",
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Seleccione una Prueba
                    </MenuItem>
                    {pruebas?.data?.map((item: any, index: number) => {
                      if (item.tipo_prueba_id === 1) {
                        return (
                          <MenuItem
                            key={index}
                            value={item.prueba}
                            onClick={() => mutate({ nombre: item.prueba })}
                          >
                            {item?.prueba}
                          </MenuItem>
                        );
                      }
                    })}
                  </Select>
                  <IconButton
                    sx={{ "&:hover": { bgcolor: "transparent" } }}
                    onClick={() => {
                      setTipoId(0), setPruebaG("");
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Stack>
              </motion.div>
            )}
            {tipoId !== 0 && tipoId === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Stack direction={"row"}>
                  <Select
                    value={pruebaG}
                    displayEmpty
                    onChange={ChangePrueba}
                    sx={{
                      height: "2.9em",
                      borderRadius: "10px",
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Seleccione una Prueba
                    </MenuItem>
                    {pruebas?.data?.map((item: any, index: number) => {
                      if (item.tipo_prueba_id === 2) {
                        return (
                          <MenuItem
                            key={index}
                            value={item.prueba}
                            onClick={() => mutate({ nombre: item.prueba })}
                          >
                            {item?.prueba}
                          </MenuItem>
                        );
                      }
                    })}
                  </Select>
                  <IconButton
                    sx={{ "&:hover": { bgcolor: "transparent" } }}
                    onClick={() => {
                      setTipoId(0), setPruebaG("");
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Stack>
              </motion.div>
            )}
          </Stack>
        </Stack>
        {pruebaG !== "" && !isPending && (
          <Stack>
            <Stack display={{ md: "flex", xs: "none" }}>
              <AreaChart
                width={700}
                height={400}
                data={data1?.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ee4328" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ee4328" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="nombre" display={"none"} />
                <YAxis
                  label={{
                    value: tipoId === 1 ? "Metro" : "Segundos",
                    angle: -90,
                    position: "insideLeft",
                    offset: 10,
                  }}
                  reversed={tipoId === 1 ? false : true}
                />
                <Tooltip labelFormatter={(value) => `Prueba: ${value}`} />
                <Legend iconType="circle" height={36} verticalAlign="top" />
                <Area
                  dataKey={"Marca"}
                  stroke="#ee4328"
                  fill={tipoId === 1 ? "url(#colorUv)" : "none"}
                  fillOpacity={1}
                  activeDot={{ r: 8 }}
                  dot={{ stroke: "red", strokeWidth: 5, strokeOpacity: 1 }}
                  type="monotone"
                />
              </AreaChart>
            </Stack>
            <Stack display={{ md: "none", xs: "flex" }}>
              <AreaChart
                width={350}
                height={400}
                data={data1?.data}
                margin={{
                  top: 5,
                  right: 0,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ee4328" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ee4328" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="nombre"
                  display={"none"} // para quitarle las key
                />
                <YAxis
                  label={{
                    value: tipoId === 1 ? "Metro" : "Minutos",
                    angle: -90,
                    position: "insideLeft",
                    offset: 15,
                  }}
                />
                <Tooltip />
                <Legend iconType="circle" height={36} verticalAlign="top" />
                <Area
                  dataKey={"Marcas"}
                  stroke="#ee4328"
                  fill="url(#colorUv)"
                  fillOpacity={1}
                  activeDot={{ r: 8 }}
                  dot={{ stroke: "red", strokeWidth: 5, strokeOpacity: 1 }}
                  type="monotone"
                />
              </AreaChart>
            </Stack>
          </Stack>
        )}
        {isPending && Loader("5vw", 0)}
      </Stack>
    </Stack>
  );
}
