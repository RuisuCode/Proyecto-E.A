import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FullScreen,
  ImagePreview,
} from "@files-ui/react";
/* local */

/* icons */
import DescriptionIcon from "@mui/icons-material/Description";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import HelpIcon from "@mui/icons-material/Help";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EventIcon from "@mui/icons-material/Event";
import { useCiudades, useUbicacion } from "../../shared/hooks/useUbicacion";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Paises } from "../atletaId/const/ubicacion";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Loader from "../../shared/components/Loader";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IEvents } from "./interface/IEvents";
import FormHelperText from "@mui/material/FormHelperText";
import { theme } from "../../shared/style-components/theme/theme";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import SendIcon from "@mui/icons-material/Send";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useAggEvents } from "../../shared/hooks/useEvents";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function agregarEvento() {
  const { data: Pais, mutate: mutPais, isPending: loadEstado } = useUbicacion();
  const {
    data: Ciudad,
    mutate: mutCiudad,
    isPending: loadCiudad,
  } = useCiudades();
  const today = dayjs();
  const { mutate, isPending } = useAggEvents();

  const [extFiles, setExtFiles] = useState<any>([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const [fechaIni, setFechaIni] = useState(undefined);
  const [fechaCie, setFechaCie] = useState(undefined);
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [ciudad, setCiudad] = useState("");
  const formData = new FormData();

  formData.append("image", extFiles[0]?.file);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IEvents>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<IEvents> = (data: IEvents) =>
    registerMarca(data);

  const registerMarca = (data: IEvents) => {
    const sendData = {
      pais: pais,
      estado: estado,
      localidad: ciudad,
      nombre: data?.nombre,
      descripcion: data?.descripcion,
      flyer: extFiles[0].file,
      fecha_ini: dayjs(fechaIni).format("DD/MM/YYYY h:mm A"),
      fecha_cie: dayjs(fechaCie).format("DD/MM/YYYY h:mm A"),
    };

    mutate(sendData);
  };
  const Theme = theme;

  const navigate = useNavigate();

  const updateFiles = (incommingFiles: any) => {
    setExtFiles(incommingFiles);
  };
  const onDelete = (id: any) => {
    setExtFiles(extFiles.filter((x: any) => x.id !== id));
  };
  const handleSee = (imageSource: any) => {
    setImageSrc(imageSource);
  };

  const StyledDatePicker = styled(DateTimePicker)({
    ".MuiPickersToolbar-root": {
      borderRadius: 19,
      borderWidth: 1,
      border: "1px solid",
    },
  });

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

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={{ xs: "100vw", lg: "100%" }}
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
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              paddingInline: 2,
            }}
          >
            <EventIcon sx={{ color: "#fff" }} fontSize="medium" />
            <Typography
              fontSize={{ lg: "0.9em", xs: "0.7em" }}
              display={"flex"}
              justifyContent={"center"}
              fontWeight={"bold"}
              color="#fff"
            >
              <NavigateNextIcon />
            </Typography>
            <Typography
              fontSize={{ lg: "0.9em", xs: "0.7em" }}
              fontWeight={"bold"}
              letterSpacing={1.5}
              color="#fff"
              component={"div"}
              onClick={() => navigate("/eventos")}
            >
              Eventos
            </Typography>
            <Typography
              fontSize={{ lg: "0.9em", xs: "0.7em" }}
              display={"flex"}
              justifyContent={"center"}
              fontWeight={"bold"}
              color="#fff"
            >
              <NavigateNextIcon />
            </Typography>
            <Typography
              fontSize={{ lg: "0.9em", xs: "0.7em" }}
              fontWeight={"bold"}
              letterSpacing={1.5}
              color="#fff"
            >
              Agregar
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
        <Stack
          width={"80%"}
          alignItems={"center"}
          height={"100%"}
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography
            color={"#b9b4b1"}
            variant="h6"
            textAlign={"center"}
            fontWeight={"bold"}
            mb={1}
          >
            Coloque los datos del evento a continuación:
          </Typography>
          <Stack
            width={"100%"}
            direction={{ md: "row", xs: "column" }}
            height={"auto"}
          >
            <Stack
              width={{ md: "50%", xs: "100%" }}
              mb={{ xs: 5, md: 5 }}
              alignItems={"center"}
              gap={{ xs: 0, md: 1 }}
              justifyContent={"flex-start"}
            >
              <FormControl
                sx={{
                  height: "90px",
                  px: 1,
                  width: { xs: "95%", md: "95%" },
                }}
                variant="standard"
              >
                <FormLabel sx={{ fontWeight: "bold" }} required>
                  Nombre del Evento
                </FormLabel>
                <OutlinedInput
                  type="string"
                  error={errors.nombre && true}
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
                  width: { xs: "95%", md: "95%" },
                }}
                variant="standard"
              >
                <FormLabel sx={{ fontWeight: "bold" }} required>
                  Descripción
                </FormLabel>
                <OutlinedInput
                  type="string"
                  error={errors.descripcion && true}
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
                    minHeight: "100%",

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
                  {errors.descripcion?.message && errors.descripcion.message}
                </FormHelperText>
              </FormControl>
            </Stack>
            <Stack
              bgcolor={"#f5f5f5"}
              p={1}
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
              <Dropzone
                onChange={updateFiles}
                localization="ES-es"
                minHeight="90%"
                value={extFiles}
                accept=".png, .jpg"
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
              <FullScreen
                open={imageSrc !== undefined}
                onClose={() => setImageSrc(undefined)}
              >
                <ImagePreview src={imageSrc} />
              </FullScreen>
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
                defaultValue={fechaIni}
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
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
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
                defaultValue={fechaCie}
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
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
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
                whileHover={{ scale: fechaCie !== undefined ? 1.05 : 1 }}
              >
                <Button
                  disabled={fechaCie !== undefined ? false : true}
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
                    Registrar Evento
                  </Typography>
                </Button>
              </motion.div>
            )}
            {isPending && Loader("35px", 0)}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
