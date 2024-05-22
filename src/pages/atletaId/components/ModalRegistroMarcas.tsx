import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { IMarcas } from "../interface/IMarcas";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useGetMarcas2, useMarcas } from "../../../shared/hooks/useMarcas";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { PruebasCampo, PruebasPista } from "../../../shared/hooks/usePruebas";
import { Paises } from "../const/ubicacion";
import { theme } from "../../../shared/style-components/theme/theme";
import Loader from "../../../shared/components/Loader";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import styled from "@mui/material/styles/styled";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { IconButton } from "@mui/material";
import { useCiudades, useUbicacion } from "../../../shared/hooks/useUbicacion";

import SendIcon from "@mui/icons-material/Send";
import { GiPathDistance } from "react-icons/gi";
import AddchartIcon from "@mui/icons-material/Addchart";
import { FaClipboardList } from "react-icons/fa6";
import { GiSportMedal } from "react-icons/gi";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import CloseIcon from "@mui/icons-material/Close";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: { xs: "98%", md: "100vh" },
  bgcolor: "background.paper",
  border: "2px solid #EF7E6C",
  borderRadius: "13px",
  boxShadow: 24,
  overflowY: "scroll",
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalRegistro() {
  const { refetch } = useGetMarcas2();
  const { mutate, isPending } = useMarcas();
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

  const { data: Pais, mutate: mutPais, isPending: loadEstado } = useUbicacion();
  const {
    data: Ciudad,
    mutate: mutCiudad,
    isPending: loadCiudad,
  } = useCiudades();

  const [open, setOpen] = useState(false);
  const [typeTest, setTypeTest] = useState(0);
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [prueba, setPrueba] = useState("");
  const [fecha, setFecha] = useState(null);
  const { control } = useForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMarcas>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<IMarcas> = (data: IMarcas) =>
    registerMarca(data);

  const registerMarca = (data: IMarcas) => {
    const Fecha = dayjs(fecha).format("DD/MM/YYYY");
    const sendData = {
      ubicacion: `${pais},${estado},${ciudad}`,
      prueba: prueba,
      tipo_prueba_id: typeTest,
      competencia: data?.competencia,
      resultado: typeTest === 1 ? data?.distancia : data?.tiempo,
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
    setPais("");
    setEstado("");
    setCiudad("");
    setPrueba("");
    reset();
    setTypeTest(0);
  };
  const Theme = theme;

  const variants = {
    open: {
      clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
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
        sx={{ borderRadius: "2em", "&:hover": { background: "#E84730" } }}
        startIcon={<AddchartIcon />}
        onClick={handleOpen}
        variant="contained"
      >
        <Typography textTransform={"capitalize"}> Registrar Marca</Typography>
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
            <Stack
              component={"form"}
              onSubmit={handleSubmit(onSubmit)}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              width={"100%"}
              height={"100%"}
              gap={0.5}
              py={1}
            >
              <Stack width={"100%"} direction={"row"} alignItems={"center"}>
                <Stack width={"98%"} alignItems={"center"}>
                  <Typography
                    variant="h5"
                    component={"h2"}
                    fontWeight={"bold"}
                    id="parent-modal-title"
                    color={"#EB5D47"}
                  >
                    Registar Marcas
                  </Typography>
                </Stack>
                <Stack width={"2%"}>
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
                Colocar los datos de la marca realizada:
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
                  display: loadEstado || loadCiudad ? "none" : "flex",
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
                  defaultValue={""}
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
              {Pcampo && Loader("35px", 0)}
              {!Pcampo && (
                <Stack width={"100%"}>
                  {typeTest === 1 && (
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
                          sx={{ fontSize: "16px", textAlign: "left" }}
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
                          onChange={(e) => setPrueba(String(e.target.value))}
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
                          px: 1,
                          width: { xs: "95%", md: "85%", lg: "75%" },
                        }}
                        variant="standard"
                      >
                        <FormLabel sx={{ fontWeight: "bold" }} required>
                          Distancia(M,mm)
                        </FormLabel>
                        <OutlinedInput
                          type="string"
                          error={errors.distancia && true}
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
                              value: /[0-9]+([,][0-9]+)?$/,
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
                  )}
                </Stack>
              )}
              {Ppista && Loader("35px", 0)}
              {!Ppista && (
                <Stack width={"100%"}>
                  {typeTest === 2 && (
                    <Stack width={"100%"} alignItems={"center"}>
                      <FormControl
                        sx={{
                          my: 1,
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
                          onChange={(e) => setPrueba(String(e.target.value))}
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
                          px: 1,
                          height: "90px",
                          width: { xs: "100%", md: "85%", lg: "80%" },
                        }}
                        variant="standard"
                      >
                        <FormLabel sx={{ fontWeight: "bold" }} required>
                          Tiempo(min:ss:mili)
                        </FormLabel>
                        <OutlinedInput
                          type="string"
                          error={errors.tiempo && true}
                          startAdornment={
                            <InputAdornment position="start">
                              <AccessTimeIcon sx={{ fontSize: "25px" }} />
                            </InputAdornment>
                          }
                          endAdornment={
                            <InputAdornment position="end">
                              <Typography fontWeight={"bold"}>
                                00:00:00
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
                              value: /[0-9]+:[0-9]{2,2}:[0-9]{2,2}/,
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
                  )}
                </Stack>
              )}
              {prueba !== "" && (
                <Stack width={"100%"} alignItems={"center"}>
                  <FormControl
                    sx={{
                      px: 1,
                      height: "90px",
                      width: { xs: "100%", md: "85%", lg: "80%" },
                    }}
                    variant="standard"
                  >
                    <FormLabel sx={{ fontWeight: "bold" }} required>
                      Competencia
                    </FormLabel>
                    <OutlinedInput
                      type="string"
                      error={errors.competencia && true}
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
                      {errors.competencia?.message &&
                        errors.competencia.message}
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    required
                    sx={{ px: 1, width: { xs: "100%", md: "85%", lg: "80%" } }}
                  >
                    <FormLabel sx={{ fontWeight: "bold" }} required>
                      Fecha
                    </FormLabel>
                    <Controller
                      name="FechaNacimiento"
                      control={control}
                      defaultValue={fecha}
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
                      px: 1,
                      height: "90px",
                      width: { xs: "100%", md: "85%", lg: "80%" },
                    }}
                    variant="standard"
                  >
                    <FormLabel sx={{ fontWeight: "bold" }} required>
                      Posición
                    </FormLabel>
                    <OutlinedInput
                      type="number"
                      error={errors.posicion && true}
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
                </Stack>
              )}
              <Stack>
                {!isPending && (
                  <motion.div whileHover={{ scale: typeTest !== 0 ? 1.05 : 1 }}>
                    <Button
                      disabled={typeTest !== 0 ? false : true}
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
                        Registrar Marca
                      </Typography>
                    </Button>
                  </motion.div>
                )}
                {isPending && Loader("35px", 0)}
              </Stack>
            </Stack>
          </Box>
        </motion.div>
      </Modal>
    </div>
  );
}
