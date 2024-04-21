import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import SendIcon from "@mui/icons-material/Send";
import {
  useGetMarcasAll,
  useUpdateMarcasAll,
} from "../../../shared/hooks/useMarcas";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { IMarcasEdit } from "../interface/IMarcasEdit";
import {
  styled,
  FormControl,
  FormLabel,
  Select,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  FormHelperText,
  IconButton,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FaClipboardList } from "react-icons/fa6";
import { GiPathDistance, GiSportMedal } from "react-icons/gi";
import Loader from "../../../shared/components/Loader";
import { theme } from "../../../shared/style-components/theme/theme";
import { Paises } from "../../atletaId/const/ubicacion";
import CloseIcon from "@mui/icons-material/Close";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { PruebasCampo, PruebasPista } from "../../../shared/hooks/usePruebas";
import "dayjs/locale/es";
import { useCiudades, useUbicacion } from "../../../shared/hooks/useUbicacion";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: { xs: "98%", md: "100vh" },
  bgcolor: "background.paper",
  border: "2px solid #0066ff",
  borderRadius: "13px",
  boxShadow: 24,
  overflowY: "scroll",
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalEdit({ dataO }: { dataO: any }) {
  const { refetch } = useGetMarcasAll();
  const [open, setOpen] = useState(false);
  const {
    mutateAsync: AsycC,
    data: pruebasCampo,
    isPending: Pcampo,
  } = PruebasCampo();
  const {
    mutateAsync: AsynP,
    data: pruebasPista,
    isPending: Ppista,
  } = PruebasPista();
  const [typeTest, setTypeTest] = useState(0);
  const [prueba, setPrueba] = useState("");
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [fecha, setFecha] = useState(null);
  const [id, setId] = useState(Number);
  const { control } = useForm();
  const { mutate, isPending } = useUpdateMarcasAll();
  const fechaO = dayjs(dataO?.fecha);
  useEffect(() => {
    const tipo = dataO?.tipo_prueba_id;
    const fechaX = dataO?.fecha;
    const paisX = dataO?.ubicacion.split(",")[0];
    const estadoX = dataO?.ubicacion.split(",")[1];
    const ciudadX = dataO?.ubicacion.split(",")[2];
    const pruebaX = dataO?.prueba;
    const idX = dataO?.id;
    if (idX) {
      setId(idX);
    }
    if (pruebaX) {
      setPrueba(pruebaX);
    }
    if (paisX) {
      setPais(paisX);
      mutPais({ pais: paisX });
    }
    if (estadoX) {
      setEstado(estadoX);
      mutCiudad({ pais: paisX, state: estadoX });
    }
    if (ciudadX) {
      setCiudad(ciudadX);
    }
    if (fechaX) {
      setFecha(fechaX);
    } else {
      setFecha(null);
    }
    if (tipo === 1) {
      AsycC();
    } else if (tipo === 2) {
      AsynP();
    }
  }, [dataO]);

  const { data: Pais, mutate: mutPais, isPending: loadEstado } = useUbicacion();
  const {
    data: Ciudad,
    mutate: mutCiudad,
    isPending: loadCiudad,
  } = useCiudades();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMarcasEdit>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<IMarcasEdit> = (data: IMarcasEdit) =>
    registerMarca(data);

  const registerMarca = (data: IMarcasEdit) => {
    const Fecha = dayjs(fecha).format("DD/MM/YYYY");
    const sendData = {
      id: id,
      ubicacion: `${pais},${estado},${ciudad}`,
      prueba: prueba,
      tipo_prueba_id: typeTest || dataO?.tipo_prueba_id,
      competencia: data?.competencia,
      resultado:
        typeTest || dataO?.tipo_prueba_id === 1
          ? data?.distancia
          : data?.tiempo,
      posicion: data?.posicion,
      fecha: Fecha,
    };

    mutate(sendData, {
      onSuccess: () => {
        handleClose();
        reset();
        setTypeTest(0);
        refetch();
      },
    });
  };
  const StyledDatePicker = styled(DatePicker)({
    ".MuiPickersToolbar-root": {
      borderRadius: 19,
      borderWidth: 1,
      border: "1px solid",
    },
  });
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    reset();
    setTypeTest(0);
  };
  const Theme = theme;

  const variants = {
    open: {
      clipPath: `circle(${700 * 2 + 200}px at 40px 40px)`,
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
    <div>
      <Button
        startIcon={<EditOutlinedIcon sx={{ fontSize: "28px" }} />}
        variant="text"
        sx={{ mb: 1 }}
        onClick={handleOpen}
        fullWidth
      >
        <Typography textTransform={"capitalize"}> Editar</Typography>
      </Button>
      <Modal
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
          <Box sx={{ ...style, width: { md: 500, xs: "100%" } }}>
            <Stack gap={2} alignItems={"center"} width={"100%"} height={"100%"}>
              <Stack
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
              >
                <Stack width={"100%"} direction={"row"} alignItems={"center"}>
                  <Stack width={"95%"} alignItems={"center"}>
                    <Typography
                      variant="h5"
                      component={"h2"}
                      fontWeight={"bold"}
                      id="parent-modal-title"
                      color={"#0066ff"}
                    >
                      Editar Marca
                    </Typography>
                  </Stack>
                  <Stack width={"5%"}>
                    <IconButton
                      onClick={() => handleClose()}
                      sx={{ "&:hover": { bgcolor: "transparent" } }}
                    >
                      <CloseIcon fontSize="large" />
                    </IconButton>
                  </Stack>
                </Stack>
                <Typography
                  component={"h3"}
                  color={"#b9b4b1"}
                  variant="subtitle1"
                >
                  Colocar los datos requeridos para modificar la marca:
                </Typography>
                <FormControl
                  sx={{
                    px: 1,
                    width: { xs: "100%", md: "85%", lg: "80%" },
                    height: "90px",
                  }}
                >
                  <FormLabel
                    required
                    sx={{
                      fontSize: "16px",
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    País
                  </FormLabel>
                  <Select
                    startAdornment={
                      <InputAdornment position="start">
                        <PublicIcon sx={{ fontSize: "25px" }} />
                      </InputAdornment>
                    }
                    required
                    defaultValue={dataO?.ubicacion.split(",")[0]}
                    onChange={(e) => setPais(String(e.target.value))}
                    sx={{
                      bgcolor: "#f5f5f5",
                      border: "none",
                      borderRadius: "10px",
                      minHeight: 50,

                      "& .MuiOutlinedInput": {
                        backgroundColor: "#f5f5f5",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                    }}
                  >
                    {Paises.map((item: any, index: number) => {
                      return (
                        <MenuItem
                          key={index}
                          value={item.name}
                          onClick={() => mutPais({ pais: item.name })}
                        >
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                {loadEstado && Loader("35px", 0)}
                {!loadEstado && pais !== "" && (
                  <FormControl
                    sx={{
                      px: 1,
                      width: { xs: "100%", md: "85%", lg: "80%" },
                      height: "90px",
                    }}
                  >
                    <FormLabel
                      required
                      sx={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontWeight: "bold",
                      }}
                    >
                      Estado
                    </FormLabel>
                    <Select
                      startAdornment={
                        <InputAdornment position="start">
                          <FaMapLocationDot size={"20px"} />
                        </InputAdornment>
                      }
                      required
                      defaultValue={dataO?.ubicacion.split(",")[1]}
                      onChange={(e) => setEstado(String(e.target.value))}
                      sx={{
                        bgcolor: "#f5f5f5",
                        border: "none",
                        borderRadius: "10px",
                        minHeight: 50,

                        "& .MuiOutlinedInput": {
                          backgroundColor: "#f5f5f5",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "transparent",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "transparent",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "transparent",
                          },
                        },
                      }}
                    >
                      {Pais?.data?.map((item: any, index: number) => {
                        return (
                          <MenuItem
                            key={index}
                            value={item.estado}
                            onClick={() =>
                              mutCiudad({ pais: pais, state: item.estado })
                            }
                          >
                            {item.estado}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                )}
                {loadCiudad && Loader("35px", 0)}
                {!loadCiudad && pais !== "" && estado !== "" && (
                  <FormControl
                    sx={{
                      px: 1,
                      width: { xs: "100%", md: "85%", lg: "80%" },
                      height: "90px",
                    }}
                  >
                    <FormLabel
                      required
                      sx={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontWeight: "bold",
                      }}
                    >
                      Localidad
                    </FormLabel>
                    <Select
                      startAdornment={
                        <InputAdornment position="start">
                          <FaLocationDot size={"20px"} />
                        </InputAdornment>
                      }
                      defaultValue={dataO?.ubicacion.split(",")[2]}
                      onChange={(e) => setCiudad(String(e.target.value))}
                      sx={{
                        bgcolor: "#f5f5f5",
                        border: "none",
                        borderRadius: "10px",
                        minHeight: 50,

                        "& .MuiOutlinedInput": {
                          backgroundColor: "#f5f5f5",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "transparent",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "transparent",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "transparent",
                          },
                        },
                      }}
                    >
                      {Ciudad?.data?.map((item: any, index: number) => {
                        return (
                          <MenuItem key={index} value={item.ciudad}>
                            {item.ciudad}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                )}
                <FormControl
                  sx={{
                    px: 1,
                    width: { xs: "100%", md: "85%", lg: "80%" },
                    height: "90px",
                  }}
                >
                  <FormLabel
                    required
                    sx={{
                      fontSize: "16px",
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Tipo de Prueba
                  </FormLabel>
                  <Select
                    id="Tipo de Prueba"
                    required
                    defaultValue={dataO?.tipo_prueba_id}
                    onChange={(e) => setTypeTest(Number(e.target.value))}
                    sx={{
                      bgcolor: "#f5f5f5",
                      border: "none",
                      borderRadius: "10px",
                      minHeight: 50,

                      "& .MuiOutlinedInput": {
                        backgroundColor: "#f5f5f5",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                    }}
                  >
                    <MenuItem value={1} onClick={() => AsycC()}>
                      Campo
                    </MenuItem>
                    <MenuItem value={2} onClick={() => AsynP()}>
                      Pista
                    </MenuItem>
                  </Select>
                </FormControl>
                {Pcampo && Loader("20px", 0)}
                {!Pcampo && (
                  <Stack width={"100%"}>
                    {typeTest === 1 ||
                      (dataO?.tipo_prueba_id === 1 && (
                        <Stack width={"100%"} alignItems={"center"}>
                          <FormControl
                            sx={{
                              px: 1,
                              width: { xs: "100%", md: "85%", lg: "80%" },
                              height: "90px",
                            }}
                          >
                            <FormLabel
                              required
                              sx={{
                                fontSize: "16px",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                              Prueba
                            </FormLabel>
                            <Select
                              id="Prueba"
                              required
                              startAdornment={
                                <InputAdornment position="start">
                                  <FaClipboardList size={"25px"} />
                                </InputAdornment>
                              }
                              defaultValue={dataO?.prueba}
                              onChange={(e) =>
                                setPrueba(String(e.target.value))
                              }
                              sx={{
                                bgcolor: "#f5f5f5",
                                border: "none",
                                borderRadius: "10px",
                                minHeight: 50,

                                "& .MuiOutlinedInput": {
                                  backgroundColor: "#f5f5f5",
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                  },
                                  "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                  },
                                  "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                      borderColor: "transparent",
                                    },
                                },
                              }}
                            >
                              {pruebasCampo?.data.map(
                                (item: any, index: number) => {
                                  return (
                                    <MenuItem
                                      key={index}
                                      value={item.nombre_prueba}
                                    >
                                      {item.nombre_prueba}
                                    </MenuItem>
                                  );
                                }
                              )}
                            </Select>
                          </FormControl>
                          <FormControl
                            sx={{
                              height: "90px",
                              width: { xs: "95%", md: "85%", lg: "75%" },
                            }}
                            variant="standard"
                          >
                            <FormLabel
                              sx={{ fontSize: "16px", fontWeight: "bold" }}
                              required
                            >
                              Distancia(M,mm)
                            </FormLabel>
                            <OutlinedInput
                              type="string"
                              error={errors.distancia && true}
                              defaultValue={dataO?.resultado}
                              startAdornment={
                                <InputAdornment position="start">
                                  <GiPathDistance size={"25px"} />
                                </InputAdornment>
                              }
                              endAdornment={
                                <InputAdornment position="end">
                                  <Typography fontWeight={"bold"}>M</Typography>
                                </InputAdornment>
                              }
                              sx={{
                                bgcolor: "#f5f5f5",
                                border: "none",
                                borderRadius: "10px",
                                minHeight: 50,

                                "& .MuiOutlinedInput": {
                                  backgroundColor: "#f5f5f5",
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                  },
                                  "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                  },
                                  "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                      borderColor: "transparent",
                                    },
                                },
                              }}
                              {...register("distancia", {
                                pattern: {
                                  value: /[0-9]+,[0-9]{2,2}/,
                                  message:
                                    "El valor ingresado debe tener decimales",
                                },
                              })}
                            />
                            <FormHelperText sx={{ color: "#000" }}>
                              {errors.distancia?.message &&
                                errors.distancia.message}
                            </FormHelperText>
                          </FormControl>
                        </Stack>
                      ))}
                  </Stack>
                )}
                {Ppista && Loader("25px", 0)}
                {!Ppista && (
                  <Stack width={"100%"}>
                    {typeTest === 2 ||
                      (dataO?.tipo_prueba_id === 2 && (
                        <Stack width={"100%"} alignItems={"center"}>
                          <FormControl
                            sx={{
                              px: 1,
                              width: { xs: "100%", md: "85%", lg: "80%" },
                              height: "90px",
                            }}
                          >
                            <FormLabel
                              required
                              sx={{
                                fontSize: "16px",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                              Prueba
                            </FormLabel>
                            <Select
                              id="Prueba"
                              required
                              defaultValue={dataO?.prueba}
                              startAdornment={
                                <InputAdornment position="start">
                                  <FaClipboardList size={"25px"} />
                                </InputAdornment>
                              }
                              onChange={(e) =>
                                setPrueba(String(e.target.value))
                              }
                              sx={{
                                bgcolor: "#f5f5f5",
                                border: "none",
                                borderRadius: "10px",
                                minHeight: 50,

                                "& .MuiOutlinedInput": {
                                  backgroundColor: "#f5f5f5",
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                  },
                                  "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                  },
                                  "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                      borderColor: "transparent",
                                    },
                                },
                              }}
                            >
                              {pruebasPista?.data.map(
                                (item: any, index: number) => {
                                  return (
                                    <MenuItem
                                      key={index}
                                      value={item.nombre_prueba}
                                    >
                                      {item.nombre_prueba}
                                    </MenuItem>
                                  );
                                }
                              )}
                            </Select>
                          </FormControl>
                          <FormControl
                            sx={{
                              height: "90px",
                              width: { xs: "95%", md: "85%", lg: "75%" },
                            }}
                            variant="standard"
                          >
                            <FormLabel
                              sx={{ fontSize: "16px", fontWeight: "bold" }}
                              required
                            >
                              Tiempo(mm:ss,mili)
                            </FormLabel>
                            <OutlinedInput
                              type="string"
                              error={errors.tiempo && true}
                              defaultValue={dataO?.resultado}
                              startAdornment={
                                <InputAdornment position="start">
                                  <AccessTimeIcon sx={{ fontSize: "25px" }} />
                                </InputAdornment>
                              }
                              endAdornment={
                                <InputAdornment position="end">
                                  <Typography fontWeight={"bold"}>
                                    00:00,00
                                  </Typography>
                                </InputAdornment>
                              }
                              sx={{
                                bgcolor: "#f5f5f5",
                                border: "none",
                                borderRadius: "10px",
                                minHeight: 50,

                                "& .MuiOutlinedInput": {
                                  backgroundColor: "#f5f5f5",
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                  },
                                  "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                  },
                                  "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                      borderColor: "transparent",
                                    },
                                },
                              }}
                              {...register("tiempo", {
                                pattern: {
                                  value: /[0-9]+:[0-9]{2,2},[0-9]{2,2}/,
                                  message:
                                    "El dato ingresado no es un tiempo valido",
                                },
                              })}
                            />
                            <FormHelperText sx={{ color: "#000" }}>
                              {errors.tiempo?.message && errors.tiempo.message}
                            </FormHelperText>
                          </FormControl>
                        </Stack>
                      ))}
                  </Stack>
                )}
                <FormControl
                  sx={{
                    height: "90px",
                    width: { xs: "95%", md: "85%", lg: "75%" },
                  }}
                  variant="standard"
                >
                  <FormLabel
                    sx={{ fontSize: "16px", fontWeight: "bold" }}
                    required
                  >
                    Competencia
                  </FormLabel>
                  <OutlinedInput
                    type="string"
                    error={errors.competencia && true}
                    defaultValue={dataO?.competencia}
                    startAdornment={
                      <InputAdornment position="start">
                        <EmojiEventsIcon sx={{ fontSize: "25px" }} />
                      </InputAdornment>
                    }
                    sx={{
                      bgcolor: "#f5f5f5",
                      border: "none",
                      borderRadius: "10px",
                      minHeight: 50,

                      "& .MuiOutlinedInput": {
                        backgroundColor: "#f5f5f5",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                    }}
                    {...register("competencia", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                  />
                  <FormHelperText sx={{ color: "#000" }}>
                    {errors.competencia?.message && errors.competencia.message}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  required
                  sx={{ px: 1, width: { md: "80%", xs: "100%" } }}
                >
                  <FormLabel
                    sx={{ fontSize: "16px", fontWeight: "bold" }}
                    required
                  >
                    Fecha
                  </FormLabel>
                  <Controller
                    name="FechaNacimiento"
                    control={control}
                    defaultValue={fechaO}
                    render={({ field }) => (
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale="es"
                      >
                        <StyledDatePicker
                          theme={Theme}
                          {...field}
                          onChange={(newValue: any) => {
                            field.onChange(newValue);
                            setFecha(newValue);
                          }}
                          sx={{
                            minWidth: "100%",
                            ".MuiOutlinedInput-root": {
                              borderRadius: "10px",
                              border: "solid 1px #b9b4b1 ",
                            },
                            "& .MuiOutlinedInput-root": {
                              backgroundColor: "#f5f5f5",
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                              },
                              "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                              },
                              "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                  borderColor: "transparent",
                                },
                            },
                          }}
                        />
                      </LocalizationProvider>
                    )}
                  />
                  <FormHelperText
                    sx={{
                      color: "#000",
                    }}
                  >
                    {errors.fecha?.message && errors.fecha.message}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  sx={{
                    height: "90px",
                    width: { xs: "95%", md: "85%", lg: "75%" },
                  }}
                  variant="standard"
                >
                  <FormLabel
                    sx={{ fontSize: "16px", fontWeight: "bold" }}
                    required
                  >
                    Posición
                  </FormLabel>
                  <OutlinedInput
                    type="number"
                    error={errors.posicion && true}
                    defaultValue={dataO?.posicion}
                    startAdornment={
                      <InputAdornment position="start">
                        <GiSportMedal size={"25px"} />
                      </InputAdornment>
                    }
                    sx={{
                      bgcolor: "#f5f5f5",
                      border: "none",
                      borderRadius: "10px",
                      minHeight: 50,

                      "& .MuiOutlinedInput": {
                        backgroundColor: "#f5f5f5",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                    }}
                    {...register("posicion", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                  />
                  <FormHelperText sx={{ color: "#000" }}>
                    {errors.posicion?.message && errors.posicion.message}
                  </FormHelperText>
                </FormControl>
                <Stack>
                  {!isPending && (
                    <motion.div
                      whileHover={{ scale: typeTest !== 0 ? 1.05 : 1 }}
                    >
                      <Button
                        endIcon={<SendIcon />}
                        variant="contained"
                        type="submit"
                        sx={{
                          width: "auto",
                          borderRadius: "5em",
                          height: "35px",
                          boxShadow: 4,
                          px: 3,
                          "&:hover": {
                            background: "#E84730",
                          },
                        }}
                      >
                        <Typography textTransform={"capitalize"}>
                          Editar Marca
                        </Typography>
                      </Button>
                    </motion.div>
                  )}
                  {isPending && Loader("35px", 0)}
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </motion.div>
      </Modal>
    </div>
  );
}
