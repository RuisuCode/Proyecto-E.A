import { Stack } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function Grafica() {
  const data = [
    {
      name: "#1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "#2",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "#3",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "#3",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "#4",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "#5",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "#6",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <Stack display={{ md: "none", xs: "flex" }} minWidth={"100%"}>
      <LineChart
        width={350}
        height={270}
        data={data}
        margin={{ top: 5, right: 30, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </Stack>
  );
}
export function GraficaMd() {
  const data = [
    {
      name: "#1",
      tiempo: 4000,
      distancia: 2400,
      amt: 2400,
    },
    {
      name: "#2",
      tiempo: 3000,
      distancia: 1398,
      amt: 2210,
    },
    {
      name: "#3",
      tiempo: 2000,
      distancia: 9800,
      amt: 2290,
    },
    {
      name: "#3",
      tiempo: 2780,
      distancia: 3908,
      amt: 2000,
    },
    {
      name: "#4",
      tiempo: 1890,
      distancia: 4800,
      amt: 2181,
    },
    {
      name: "#5",
      tiempo: 2390,
      distancia: 3800,
      amt: 2500,
    },
    {
      name: "#6",
      tiempo: 3490,
      distancia: 4300,
      amt: 2100,
    },
  ];

  return (
    <Stack
      display={{ md: "flex", xs: "none" }}
      alignItems={"center"}
      minWidth={"100%"}
    >
      <LineChart
        width={600}
        height={270}
        data={data}
        margin={{ top: 5, right: 30, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="distancia" stroke="#8884d8" />
        <Line type="monotone" dataKey="tiempo" stroke="#82ca9d" />
      </LineChart>
    </Stack>
  );
}
