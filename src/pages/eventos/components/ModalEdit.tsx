import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { theme } from "../../../shared/style-components/theme/theme";
import Loader from "../../../shared/components/Loader";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import styled from "@mui/material/styles/styled";
import dayjs from "dayjs";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import "dayjs/locale/es";
import PublicIcon from "@mui/icons-material/Public";
import { IconButton, InputAdornment } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import SendIcon from "@mui/icons-material/Send";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CloseIcon from "@mui/icons-material/Close";
import { IEvents } from "../../agregar-eventos/interface/IEvents";
import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FullScreen,
  ImagePreview,
} from "@files-ui/react";
import { Paises } from "../../atletaId/const/ubicacion";
import { useCiudades, useUbicacion } from "../../../shared/hooks/useUbicacion";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useEditEvent, useGetEvents } from "../../../shared/hooks/useEvents";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: { xs: "98%", md: "100vh" },
  bgcolor: "background.paper",
  border: "2px solid #E84730",
  borderRadius: "13px",
  boxShadow: 24,
  overflowY: "scroll",
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalEditEvent({ dataB }: { dataB: any }) {
  const { refetch } = useGetEvents();
  const { mutate, isPending } = useEditEvent();
  const { data: Pais, mutate: mutPais, isPending: loadEstado } = useUbicacion();
  const {
    data: Ciudad,
    mutate: mutCiudad,
    isPending: loadCiudad,
  } = useCiudades();

  const today = dayjs();
  const [open, setOpen] = useState(false);
  const [changeImg, setChangeImg] = useState(false);
  const [fechaIni, setFechaIni] = useState(undefined);
  const [fechaCie, setFechaCie] = useState(undefined);
  const [extFiles, setExtFiles] = useState<any>([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [ciudad, setCiudad] = useState("");
  const URL: string = import.meta.env.VITE_BACKEND;

  const { control } = useForm();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IEvents>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<IEvents> = (data: IEvents) => editEvento(data);

  const editEvento = (data: IEvents) => {
    const sendData = {
      id: dataB?.id,
      pais: pais,
      estado: estado,
      localidad: ciudad,
      nombre: data?.nombre,
      descripcion: data?.descripcion,
      changeImg: changeImg,
      flyer: changeImg === true ? extFiles[0]?.file : undefined,
      fecha_ini: dayjs(fechaIni).format("DD/MM/YYYY h:mm A"),
      fecha_cie: dayjs(fechaCie).format("DD/MM/YYYY h:mm A"),
    };

    mutate(sendData, {
      onSuccess: () => {
        setExtFiles([]);
        setChangeImg(false);
        setOpen(false);
        refetch();
      },
    });
  };
  useEffect(() => {
    const fechaIniX = dataB?.fecha_ini;
    const fechaCieX = dataB?.fecha_cie;
    const paisX = dataB?.pais;
    const estadoX = dataB?.estado;
    const localidadX = dataB?.localidad;

    if (fechaIniX) {
      setFechaIni(fechaIniX);
    }
    if (fechaCieX) {
      setFechaCie(fechaCieX);
    }
    if (localidadX) {
      setCiudad(localidadX);
    }
    if (paisX) {
      setPais(paisX);
      mutPais({ pais: paisX });
    }
    if (estadoX) {
      setEstado(estadoX);
      mutCiudad({ pais: paisX, state: estadoX });
    }
    if (dataB) {
      setValue("nombre", dataB?.nombre);
      setValue("descripcion", dataB?.descripcion);
    }
  }, [dataB]);

  const updateFiles = (incommingFiles: any) => {
    setExtFiles(incommingFiles);
  };
  const onDelete = (id: any) => {
    setExtFiles(extFiles.filter((x: any) => x.id !== id));
  };
  const handleSee = (imageSource: any) => {
    setImageSrc(imageSource);
  };

  const handleAbort = (id: any) => {
    setExtFiles(
      extFiles.map((ef: any) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: "aborted" };
        } else return { ...ef };
      })
    );
  };
  const handleCancel = (id: any) => {
    setExtFiles(
      extFiles.map((ef: any) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: undefined };
        } else return { ...ef };
      })
    );
  };

  const StyledDatePicker = styled(DateTimePicker)({
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
    setExtFiles([]);
    setChangeImg(false);
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
  const img = `${URL}/uploads/events/${dataB?.flyer}`;
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          py: { xs: 3, md: 0 },
          borderRadius: "0",
          width: { xs: "100%", md: "105%" },
          height: "40px",
          mr: 3,
        }}
        onClick={handleOpen}
      >
        <Typography textTransform={"initial"}> Editar evento</Typography>
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
          <Box sx={{ ...style, width: { md: "75vw", xs: "100%" } }}>
            <Stack
              component={"form"}
              onSubmit={handleSubmit(onSubmit)}
              alignItems={"center"}
              justifyContent={"space-evenly"}
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
                    color={"#E84730"}
                  >
                    Editar evento
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
                textAlign={"center"}
              >
                Coloque los datos correspondientes que quiera modificar:
              </Typography>

              <Stack
                width={"100%"}
                direction={{ md: "row", xs: "column" }}
                height={"auto"}
                gap={{ xs: 7, md: 0 }}
              >
                <Stack
                  width={{ md: "50%", xs: "100%" }}
                  mb={{ xs: 5, md: 5 }}
                  alignItems={"center"}
                  gap={{ xs: 0, md: 1 }}
                  justifyContent={"space-evenly"}
                >
                  <FormControl
                    sx={{
                      height: "90px",
                      px: 1,
                      width: { xs: "100%", md: "95%" },
                    }}
                    variant="standard"
                  >
                    <FormLabel sx={{ fontWeight: "bold" }} required>
                      Nombre del Evento
                    </FormLabel>
                    <OutlinedInput
                      type="string"
                      error={errors.nombre && true}
                      defaultValue={dataB?.nombre}
                      startAdornment={
                        <InputAdornment position="start">
                          <EmojiEventsIcon fontSize="medium" />
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
                      {...register("nombre", {
                        required: {
                          value: true,
                          message: "Este campo es requerido",
                        },
                      })}
                    />
                    <FormHelperText sx={{ color: "#000" }}>
                      {errors.nombre?.message && errors.nombre.message}
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    sx={{
                      height: "90px",
                      px: 1,
                      width: { xs: "100%", md: "95%" },
                    }}
                    variant="standard"
                  >
                    <FormLabel sx={{ fontWeight: "bold" }} required>
                      Descripción
                    </FormLabel>
                    <OutlinedInput
                      type="string"
                      error={errors.descripcion && true}
                      defaultValue={dataB?.descripcion}
                      multiline
                      startAdornment={
                        <InputAdornment position="start">
                          <DescriptionIcon fontSize="medium" />
                        </InputAdornment>
                      }
                      sx={{
                        bgcolor: "#f5f5f5",
                        border: "none",
                        borderRadius: "10px",
                        minHeight: { md: "100%", xs: "150px" },

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
                      {...register("descripcion", {
                        required: {
                          value: true,
                          message: "Este campo es requerido",
                        },
                      })}
                    />
                    <FormHelperText sx={{ color: "#000" }}>
                      {errors.descripcion?.message &&
                        errors.descripcion.message}
                    </FormHelperText>
                  </FormControl>
                </Stack>
                <Stack
                  bgcolor={"#f5f5f5"}
                  p={1}
                  py={2}
                  width={{ md: "50%", xs: "100%" }}
                  borderRadius={"13px"}
                  height={{ md: "auto", xs: "300px" }}
                  border={"1px solid #b9b4b1"}
                >
                  <FormLabel
                    sx={{ textAlign: "center", py: 0, fontWeight: "bold" }}
                    required
                  >
                    Flyer del evento
                  </FormLabel>
                  <Stack
                    height={"100%"}
                    alignItems={"center"}
                    display={changeImg === false ? "flex" : "none"}
                    justifyContent={"center"}
                  >
                    <img src={img} width={"50%"} height={"auto"} />
                    <Button
                      variant="contained"
                      sx={{ textTransform: "initial", borderRadius: "10px" }}
                      onClick={() => setChangeImg(true)}
                    >
                      Cambiar imagen
                    </Button>
                  </Stack>
                  <Stack
                    height={"100%"}
                    display={changeImg === true ? "flex" : "none"}
                    pb={3}
                    gap={{ xs: 0.5, md: 2 }}
                    alignItems={"center"}
                  >
                    <Dropzone
                      onChange={updateFiles}
                      localization="ES-es"
                      minHeight="90%"
                      value={extFiles}
                      accept="image/*"
                      maxFiles={1}
                      maxFileSize={4 * 1024 * 1024}
                      label="Arrastre y suelte la imagen aquí o  haga click y seleccione una imagen "
                      uploadConfig={{
                        autoUpload: true,
                      }}
                    >
                      {extFiles.map((file: ExtFile) => (
                        <FileMosaic
                          {...file}
                          key={file.id}
                          onDelete={onDelete}
                          onSee={handleSee}
                          onAbort={handleAbort}
                          onCancel={handleCancel}
                          resultOnTooltip
                          alwaysActive
                          preview
                          info
                        />
                      ))}
                    </Dropzone>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "initial",
                        borderRadius: "10px",
                        width: "100px ",
                      }}
                      onClick={() => setChangeImg(false)}
                    >
                      Cancelar
                    </Button>
                    <Stack display={imageSrc !== undefined ? "flex" : "none"}>
                      <FullScreen
                        open={imageSrc !== undefined}
                        onClose={() => setImageSrc(undefined)}
                      >
                        <ImagePreview src={imageSrc} />
                      </FullScreen>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                direction={{ md: "row", xs: "column" }}
                width={"100%"}
                mt={2}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <FormControl
                  sx={{
                    px: 1,
                    width: { xs: "100%", md: "33.33%" },
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
                    defaultValue={dataB?.pais}
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
                      width: { xs: "100%", md: "33.33%" },
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
                      defaultValue={dataB?.estado}
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
                      width: { xs: "100%", md: "33.33%" },
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
                      defaultValue={dataB?.localidad}
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
              </Stack>
              <Stack width={"100%"} direction={{ md: "row", xs: "column" }}>
                <FormControl
                  required
                  sx={{ px: 1, width: { xs: "100%", md: "85%", lg: "80%" } }}
                >
                  <FormLabel sx={{ fontWeight: "bold" }} required>
                    Fecha Inicio
                  </FormLabel>
                  <Controller
                    name="fechaIni"
                    control={control}
                    defaultValue={dayjs(dataB?.fecha_ini)}
                    render={({ field }) => (
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale="es"
                      >
                        <StyledDatePicker
                          theme={Theme}
                          {...field}
                          ampm
                          ampmInClock
                          minDate={today}
                          onChange={(newValue: any) => {
                            field.onChange(newValue);
                            setFechaIni(newValue);
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
                    {errors.fechaIni?.message && errors.fechaIni.message}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  required
                  sx={{ px: 1, width: { xs: "100%", md: "85%", lg: "80%" } }}
                >
                  <FormLabel sx={{ fontWeight: "bold" }} required>
                    Fecha Cierre
                  </FormLabel>
                  <Controller
                    name="fechaCie"
                    control={control}
                    defaultValue={dayjs(dataB?.fecha_cie)}
                    render={({ field }) => (
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale="es"
                      >
                        <StyledDatePicker
                          theme={Theme}
                          {...field}
                          ampm
                          ampmInClock
                          minDate={fechaIni ? dayjs(fechaIni) : today}
                          onChange={(newValue: any) => {
                            field.onChange(newValue);
                            setFechaCie(newValue);
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
                    {errors.fechaCie?.message && errors.fechaCie.message}
                  </FormHelperText>
                </FormControl>
              </Stack>
              <Stack width={"100%"} alignItems={"center"} my={1}>
                {!isPending && (
                  <motion.div
                    whileHover={{
                      scale: 1,
                    }}
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
                      <Typography textTransform={"initial"}>
                        Editar evento
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
