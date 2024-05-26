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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Switch, { SwitchProps } from "@mui/material/Switch";
import "dayjs/locale/es";
import { FormControlLabel, IconButton, Tooltip } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

import CloseIcon from "@mui/icons-material/Close";
import { IEntre } from "../../agregar-entrenador/interface/IEntre";
import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FullScreen,
  ImagePreview,
} from "@files-ui/react";
import { useEditCoach, useGetCoachID } from "../../../shared/hooks/useCoach";

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

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#EB5D47" : "#E84730",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#E84730",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function ModalEditEntrenador({ dataB }: { dataB: any }) {
  const { refetch } = useGetCoachID();
  const { mutate, isPending } = useEditCoach();

  const fechaB = dayjs(dataB?.fecha_nacimiento);
  const [open, setOpen] = useState(false);
  const [gen, setGen] = useState("");
  const [changeImg, setChangeImg] = useState(false);
  const [extFiles, setExtFiles] = useState<any>([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const URL: string = import.meta.env.VITE_BACKEND;

  const [cedulaC, setCedulaC] = useState(false);
  const [fecha, setFecha] = useState(null);
  const { control } = useForm();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCedulaC(event.target.checked);
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IEntre>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<IEntre> = (data: IEntre) => editAtleta(data);

  const editAtleta = (data: IEntre) => {
    const Fecha = dayjs(fecha).format("DD/MM/YYYY");
    const sendData = {
      primer_nom: data?.primer_nombre,
      segundo_nom: data?.segundo_nombre,
      primer_ape: data?.primer_apellido,
      segundo_ape: data?.segundo_apellido,
      genero: gen,
      changeCedula: cedulaC,
      fechaNacimiento: Fecha,
      foto: changeImg === true ? extFiles[0]?.file : undefined,
      grado_academico: data?.grd_aca,
      cedula: cedulaC ? data?.cedula : null,
      telefono: data?.telefono,
      telefono_casa: data?.telefono_casa,
      email: data?.email,
    };

    mutate(sendData, {
      onSuccess: () => {
        setOpen(false);
        refetch();
        setExtFiles([]);
        setChangeImg(false);
        setCedulaC(false);
      },
    });
  };
  useEffect(() => {
    const genX = dataB?.genero;
    const fechaX = dataB?.fecha_nacimiento;

    if (genX) {
      setGen(genX);
    }
    if (fechaX) {
      setFecha(fechaX);
    }

    if (dataB) {
      setValue("primer_nombre", dataB?.primer_nom);
      setValue("segundo_nombre", dataB?.segundo_nom);
      setValue("primer_apellido", dataB?.primer_ape);
      setValue("segundo_apellido", dataB?.segundo_ape);
      setValue("grd_aca", dataB?.grado_academico);

      setValue("telefono", dataB?.telefono);
      setValue("telefono_casa", dataB?.telefono_casa);
      setValue("email", dataB?.email);
    }
  }, [dataB]);

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
    setExtFiles([]);
    setChangeImg(false);
    setCedulaC(false);
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

  const img =
    import.meta.env.MODE !== "production"
      ? `${URL}/uploads/coaches/${dataB?.foto}`
      : `${URL}uploads/coaches/${dataB?.foto}`;
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Tooltip title="Editar datos" arrow>
          <IconButton
            onClick={handleOpen}
            sx={{
              bgcolor: "#fff",
              boxShadow: 3,
              "&:hover": { bgcolor: "#fff", boxShadow: 10 },
            }}
          >
            <DriveFileRenameOutlineIcon fontSize="large" color="primary" />
          </IconButton>
        </Tooltip>
      </motion.div>
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
                    color={"#E84730"}
                  >
                    Editar Entrenador
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
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={"bold"}
                color={"#b9b4b1"}
              >
                Datos personales
              </Typography>
              <Stack
                width={"100%"}
                direction={{ md: "row", xs: "column" }}
                alignItems={"center"}
              >
                <FormControl
                  sx={{
                    height: "90px",
                    px: 1,
                    width: { xs: "95%", md: "85%", lg: "75%" },
                  }}
                  variant="standard"
                >
                  <FormLabel sx={{ fontWeight: "bold" }}>
                    Primer Nombre
                  </FormLabel>
                  <OutlinedInput
                    type="string"
                    defaultValue={dataB?.primer_nom}
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
                    {...register("primer_nombre")}
                  />
                  <FormHelperText sx={{ color: "#000" }}>
                    {errors.primer_nombre?.message &&
                      errors.primer_nombre.message}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  sx={{
                    height: "90px",
                    px: 1,
                    width: { xs: "95%", md: "85%", lg: "75%" },
                  }}
                  variant="standard"
                >
                  <FormLabel sx={{ fontWeight: "bold" }}>
                    Segundo Nombre
                  </FormLabel>
                  <OutlinedInput
                    type="string"
                    defaultValue={dataB?.segundo_nom}
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
                    {...register("segundo_nombre", { required: false })}
                  />
                  <FormHelperText sx={{ color: "#000" }}>
                    {errors.segundo_nombre?.message &&
                      errors.segundo_nombre.message}
                  </FormHelperText>
                </FormControl>
              </Stack>
              <Stack
                width={"100%"}
                direction={{ md: "row", xs: "column" }}
                alignItems={"center"}
              >
                <FormControl
                  sx={{
                    height: "90px",
                    px: 1,
                    width: { xs: "95%", md: "85%", lg: "75%" },
                  }}
                  variant="standard"
                >
                  <FormLabel sx={{ fontWeight: "bold" }}>
                    Primer Apellido
                  </FormLabel>
                  <OutlinedInput
                    type="string"
                    defaultValue={dataB?.primer_ape}
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
                    {...register("primer_apellido")}
                  />
                  <FormHelperText sx={{ color: "#000" }}>
                    {errors.primer_apellido?.message &&
                      errors.primer_apellido.message}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  sx={{
                    height: "90px",
                    px: 1,
                    width: { xs: "95%", md: "85%", lg: "75%" },
                  }}
                  variant="standard"
                >
                  <FormLabel sx={{ fontWeight: "bold" }}>
                    Segundo Apellido
                  </FormLabel>
                  <OutlinedInput
                    type="string"
                    defaultValue={dataB?.segundo_ape}
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
                    {...register("segundo_apellido")}
                  />
                  <FormHelperText sx={{ color: "#000" }}>
                    {errors.segundo_apellido?.message &&
                      errors.segundo_apellido.message}
                  </FormHelperText>
                </FormControl>
              </Stack>
              <Stack
                width={"100%"}
                direction={{ md: "row", xs: "column" }}
                alignItems={"center"}
              >
                <FormControl sx={{ px: 1, width: { xs: "95%", md: "100%" } }}>
                  <FormLabel sx={{ fontWeight: "bold" }}>Fecha</FormLabel>
                  <Controller
                    name="FechaNacimiento"
                    control={control}
                    defaultValue={fechaB}
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
                            mb: 1,
                            ".MuiOutlinedInput-root": {
                              borderRadius: "10px",
                              border: "solid 1px #b9b4b1 ",
                              height: "55px",
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
                    {errors.fechnac?.message && errors.fechnac.message}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  sx={{
                    px: 1,
                    width: { xs: "95%", md: "100%" },
                    height: "90px",
                  }}
                >
                  <FormLabel
                    sx={{
                      fontSize: "16px",
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Genero
                  </FormLabel>
                  <Select
                    required
                    defaultValue={dataB?.genero}
                    onChange={(e) => setGen(String(e.target.value))}
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
                    <MenuItem value={"m"}>Masculino</MenuItem>
                    <MenuItem value={"f"}>Femenino</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack
                width={"100%"}
                direction={{ md: "row", xs: "column" }}
                justifyContent={cedulaC ? "space-around" : "initial"}
                alignItems={{ xs: "center", md: "initial" }}
                px={1}
              >
                <FormControlLabel
                  control={
                    <IOSSwitch
                      sx={{ m: 1 }}
                      checked={cedulaC}
                      onChange={handleChange}
                    />
                  }
                  label={
                    <Typography color={"#808080"}>Cambiar cedula</Typography>
                  }
                />
                {cedulaC && (
                  <FormControl
                    sx={{
                      height: "90px",
                      px: 1,
                      width: { xs: "100%", md: "50%" },
                    }}
                    variant="standard"
                  >
                    <FormLabel sx={{ fontWeight: "bold" }}>Cedula</FormLabel>
                    <OutlinedInput
                      type="number"
                      defaultValue={dataB?.User_id?.cedula}
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
                      {...register("cedula")}
                    />
                    <FormHelperText sx={{ color: "#000" }}>
                      {errors.segundo_apellido?.message &&
                        errors.segundo_apellido.message}
                    </FormHelperText>
                  </FormControl>
                )}
              </Stack>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={"bold"}
                color={"#b9b4b1"}
              >
                Datos Academicos
              </Typography>
              <Stack
                width={"100%"}
                direction={{ md: "row", xs: "column" }}
                alignItems={"center"}
              >
                <FormControl
                  sx={{
                    px: 1,
                    width: { xs: "95%", md: "100%" },
                    height: "90px",
                  }}
                >
                  <FormLabel
                    sx={{
                      fontSize: "16px",
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Nivel Académico
                  </FormLabel>
                  <Select
                    required
                    defaultValue={dataB?.grado_academico}
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
                    {...register("grd_aca")}
                  >
                    <MenuItem value={""} disabled>
                      Seleccione un nivel académico
                    </MenuItem>
                    <MenuItem value={"Técnico Superior"}>
                      Técnico Superior
                    </MenuItem>
                    <MenuItem value={"Licenciado"}>Licenciado</MenuItem>
                    <MenuItem value={"PostGrado"}>PostGrado</MenuItem>
                    <MenuItem value={"Maestría"}>Maestría</MenuItem>
                    <MenuItem value={"Doctorado"}>Doctorado</MenuItem>
                    <MenuItem value={"Ingeniero"}>Ingeniero</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack
                bgcolor={"#f5f5f5"}
                p={1}
                py={2}
                my={1}
                width={{ md: "50%", xs: "100%" }}
                borderRadius={"13px"}
                height={{ md: "auto", xs: "300px" }}
                border={"1px solid #b9b4b1"}
              >
                <FormLabel
                  sx={{ textAlign: "center", py: 0, fontWeight: "bold" }}
                  required
                >
                  Foto de perfil
                </FormLabel>
                <Stack
                  height={"100%"}
                  alignItems={"center"}
                  display={changeImg === false ? "flex" : "none"}
                  justifyContent={"center"}
                >
                  <img
                    src={img}
                    width={"50%"}
                    height={"auto"}
                    style={{ marginBottom: 1 }}
                  />
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

              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={"bold"}
                color={"#b9b4b1"}
              >
                Datos de comunicación
              </Typography>
              <Stack
                width={"100%"}
                direction={{ md: "row", xs: "column" }}
                alignItems={"center"}
              >
                <FormControl
                  sx={{
                    height: "90px",
                    px: 1,
                    width: { xs: "95%", md: "85%", lg: "75%" },
                  }}
                  variant="standard"
                >
                  <FormLabel sx={{ fontWeight: "bold" }}>Telefono</FormLabel>
                  <OutlinedInput
                    type="number"
                    defaultValue={dataB[0]?.telefono}
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
                    {...register("telefono")}
                  />
                  <FormHelperText sx={{ color: "#000" }}>
                    {errors.telefono?.message && errors.telefono.message}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  sx={{
                    height: "90px",
                    px: 1,
                    width: { xs: "95%", md: "85%", lg: "75%" },
                  }}
                  variant="standard"
                >
                  <FormLabel sx={{ fontWeight: "bold" }}>
                    Telefono de casa
                  </FormLabel>
                  <OutlinedInput
                    type="number"
                    defaultValue={dataB?.telefono_casa}
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
                    {...register("telefono_casa")}
                  />
                  <FormHelperText sx={{ color: "#000" }}>
                    {errors.telefono?.message && errors.telefono.message}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  sx={{
                    height: "90px",
                    px: 1,
                    width: { xs: "95%", md: "85%", lg: "75%" },
                  }}
                  variant="standard"
                >
                  <FormLabel sx={{ fontWeight: "bold" }}>
                    Correo electronico
                  </FormLabel>
                  <OutlinedInput
                    type="email"
                    defaultValue={dataB[0]?.email}
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
                    {...register("email")}
                  />
                  <FormHelperText sx={{ color: "#000" }}>
                    {errors.email?.message && errors.email.message}
                  </FormHelperText>
                </FormControl>
              </Stack>
              <Stack>
                {!isPending && (
                  <motion.div whileHover={{ scale: 1.05 }}>
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
                        Editar Entrenador
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
