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
import Switch, { SwitchProps } from "@mui/material/Switch";

import styled from "@mui/material/styles/styled";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { FormControlLabel, IconButton } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import CloseIcon from "@mui/icons-material/Close";
import { IAtlets } from "../../agregar-atletas/interface/IAtlets";
import { useEditAtlets, useGetAtletaId } from "../../../shared/hooks/useAtlets";
import getAge2 from "../../atletas-categoria/hooks/getAge2";
import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FullScreen,
  ImagePreview,
} from "@files-ui/react";

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

export default function ModalEditAtleta({ dataB }: { dataB: any }) {
  const { refetch } = useGetAtletaId();
  const { mutate, isPending } = useEditAtlets();
  const URL: string = import.meta.env.VITE_BACKEND;


  const fechaB = dayjs(dataB[0]?.fecha_nacimiento);
  const [open, setOpen] = useState(false);
  const [cedulaC, setCedulaC] = useState(false);
  const [gen, setGen] = useState("");
  const [categoria, setCategoria] = useState("");
  const [changeImg, setChangeImg] = useState(false);
  const [extFiles, setExtFiles] = useState<any>([]);
  const [imageSrc, setImageSrc] = useState(undefined);

  const [nivel, setNivel] = useState("");
  const [repre, setRepre] = useState(false);
  const [parentesco, setParentesco] = useState("");
  const [fecha, setFecha] = useState(null);
  const { control } = useForm();
  const Edad = getAge2(
    Number(dayjs(dataB[0]?.fecha_nacimiento).format("DD")),
    Number(dayjs(dataB[0]?.fecha_nacimiento).format("MM")),
    Number(dayjs(dataB[0]?.fecha_nacimiento).format("YYYY"))
  );
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IAtlets>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<IAtlets> = (data: IAtlets) => editAtleta(data);

  const editAtleta = (data: IAtlets) => {
    const Fecha = dayjs(fecha).format("DD/MM/YYYY");
    const sendData = {
      primer_nombre: data?.primer_nombre,
      segundo_nombre: data?.segundo_nombre,
      primer_apellido: data?.primer_apellido,
      segundo_apellido: data?.segundo_apellido,
      genero: gen,
      fechaNacimiento: Fecha,
      cedula: data?.cedula,
      changeCedula: cedulaC,
      estatura: data?.estatura,
      estatura_sentd: data?.estatura_sentd,
      foto: changeImg === true ? extFiles[0]?.file : undefined,
      peso: data?.peso,
      categoria: categoria,
      nivel: nivel,
      envergadura: data?.envergadura,
      telefono: data?.telefono,
      email: data?.email,
      repre: repre,
      nombre_repre: data?.nombre_repre,
      cedula_repre: data?.cedula_repre,
      apellido_repre: data?.apellido_repre,
      parentesco: parentesco,
      telefono_repre: data?.telefono_repre,
      email_repre: data?.email_repre,
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
    const genX = dataB[0]?.genero;
    const fechaX = dataB[0]?.fecha_nacimiento;
    const categoriaX = dataB[1]?.categoria;
    const nivelX = dataB[1]?.nivel;
    const parentescoX = dataB[3]?.parentesco;

    if (genX) {
      setGen(genX);
    }
    if (fechaX) {
      setFecha(fechaX);
    }
    if (categoriaX) {
      setCategoria(categoriaX);
    }
    if (nivelX) {
      setNivel(nivelX);
    }
    if (parentescoX) {
      setParentesco(parentescoX);
    }

    if (dataB) {
      setValue("primer_nombre", dataB[0]?.primer_nombre);
      setValue("segundo_nombre", dataB[0]?.segundo_nombre);
      setValue("primer_apellido", dataB[0]?.primer_apellido);
      setValue("segundo_apellido", dataB[0]?.segundo_apellido);
      setValue("cedula", dataB[4]);
      setValue("estatura", dataB[2]?.estatura);
      setValue("estatura_sentd", dataB[2]?.estatura_sentd);
      setValue("peso", dataB[2]?.peso);
      setValue("envergadura", dataB[2]?.envergadura);
      setValue("telefono", dataB[0]?.telefono);
      setValue("email", dataB[0]?.email);
    }
    if (dataB[3] !== null) {
      setValue("nombre_repre", dataB[3]?.nombre_repre);
      setValue("apellido_repre", dataB[3]?.apellido_repre);
      setValue("cedula_repre", dataB[3]?.cedula_repre);
      setValue("parentesco", dataB[3]?.parentesco);
      setValue("telefono_repre", dataB[3]?.telefono_repre);
      setValue("email_repre", dataB[3]?.email_repre);
    }

    if (Edad < 18) {
      setRepre(true);
    } else setRepre(false);
  }, [dataB, repre, Edad]);

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
    setCedulaC(false);
    setExtFiles([]);
    setChangeImg(false);
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
      ? `${URL}/uploads/atlets/${dataB[0]?.foto}`
      : `${URL}uploads/atlets/${dataB[0]?.foto}`;

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
      <Stack width={"100%"} alignItems={{ xs: "center", md: "flex-end" }}>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            startIcon={<EditOutlinedIcon />}
            sx={{
              width: "auto",
              px: 3,
              borderRadius: "2rem",
              "&:hover": { background: "#E84730" },
            }}
            variant="contained"
            onClick={handleOpen}
          >
            <Typography textTransform={"initial"}>Editar datos</Typography>
          </Button>
        </motion.div>
      </Stack>
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
                    Editar Atleta
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
                    defaultValue={dataB[0]?.primer_nombre}
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
                    defaultValue={dataB[0]?.segundo_nombre}
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
                    defaultValue={dataB[0]?.primer_apellido}
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
                    defaultValue={dataB[0]?.segundo_apellido}
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
                direction={{ md: "row", xs: "column" }}
                width={"100%"}
                alignItems={"center"}
                px={1}
                justifyContent={!cedulaC ? "flex-start" : "center"}
              >
                <FormControlLabel
                  control={
                    <IOSSwitch
                      sx={{ m: 1 }}
                      checked={cedulaC}
                      onChange={() => setCedulaC(!cedulaC)}
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
                      defaultValue={dataB[4]}
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
                    defaultValue={dataB[0]?.genero}
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
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={"bold"}
                color={"#b9b4b1"}
              >
                Datos deportivos
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
                    Nivel
                  </FormLabel>
                  <Select
                    required
                    onChange={(e) => setNivel(String(e.target.value))}
                    defaultValue={dataB[1]?.nivel}
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
                    <MenuItem value={"Iniciación"}>Iniciación</MenuItem>
                    <MenuItem value={"En desarrollo"}>En desarrollo</MenuItem>
                    <MenuItem value={"Competitivo"}>Competitivo</MenuItem>
                    <MenuItem value={"Alto rendimiento"}>
                      Alto rendimiento
                    </MenuItem>
                  </Select>
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
                    Categoría
                  </FormLabel>
                  <Select
                    required
                    onChange={(e) => setCategoria(String(e.target.value))}
                    defaultValue={dataB[1]?.categoria}
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
                    <MenuItem value={"Mini"}>Mini</MenuItem>
                    <MenuItem value={"Semilla"}>Semilla</MenuItem>
                    <MenuItem value={"Compota"}>Compota</MenuItem>
                    <MenuItem value={`Pre infantil "A"`}>
                      Pre infantil "A"
                    </MenuItem>
                    <MenuItem value={`Pre infantil "B"`}>
                      Pre infantil "B"
                    </MenuItem>
                    <MenuItem value={"Infantil"}>Infantil</MenuItem>
                    <MenuItem value={"Menor"}>Menor</MenuItem>
                    <MenuItem value={"Juvenil"}>Juvenil</MenuItem>
                    <MenuItem value={"Junior"}>Junior</MenuItem>
                    <MenuItem value={"Mayor"}>Mayor</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={"bold"}
                color={"#b9b4b1"}
              >
                Datos geneticos
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
                    Estatura(cm)
                  </FormLabel>
                  <OutlinedInput
                    type="number"
                    defaultValue={dataB[2]?.estatura}
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
                    {...register("estatura")}
                  />
                  <FormHelperText sx={{ color: "#000" }}>
                    {errors.estatura?.message && errors.estatura.message}
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
                    Estatura sentado(cm)
                  </FormLabel>
                  <OutlinedInput
                    type="number"
                    defaultValue={dataB[2]?.estatura_sentd}
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
                    {...register("estatura_sentd")}
                  />
                  <FormHelperText sx={{ color: "#000" }}>
                    {errors.estatura_sentd?.message &&
                      errors.estatura_sentd.message}
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
                  <FormLabel sx={{ fontWeight: "bold" }}>Peso(kg)</FormLabel>
                  <OutlinedInput
                    type="string"
                    defaultValue={dataB[2]?.peso}
                    error={errors.peso && true}
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
                    {...register("peso", {
                      pattern: {
                        value: /[0-9]+([,][0-9]+)?$/,
                        message: "El valor ingresado debe tener decimales",
                      },
                    })}
                  />
                  <FormHelperText sx={{ color: "#000" }}>
                    {errors.peso?.message && errors.peso.message}
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
                    Envergadura(cm)
                  </FormLabel>
                  <OutlinedInput
                    type="number"
                    defaultValue={dataB[2]?.envergadura}
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
                    {...register("envergadura")}
                  />
                  <FormHelperText sx={{ color: "#000" }}>
                    {errors.envergadura?.message && errors.envergadura.message}
                  </FormHelperText>
                </FormControl>
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
              {dataB[3] !== null && (
                <Stack
                  width={"100%"}
                  alignItems={"center"}
                  display={dataB[3] === null ? "none" : "flex"}
                >
                  <Typography
                    variant="body2"
                    fontSize={"16px"}
                    fontWeight={"bold"}
                    color={"#b9b4b1"}
                  >
                    Datos del representante
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
                      <FormLabel sx={{ fontWeight: "bold" }}>Nombre</FormLabel>
                      <OutlinedInput
                        type="string"
                        defaultValue={dataB[3]?.nombre_repre}
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
                        {...register("nombre_repre")}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.nombre_repre?.message &&
                          errors.nombre_repre.message}
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
                        Apellido
                      </FormLabel>
                      <OutlinedInput
                        type="string"
                        defaultValue={dataB[3]?.apellido_repre}
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
                        {...register("apellido_repre")}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.apellido_repre?.message &&
                          errors.apellido_repre.message}
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
                        width: { xs: "95%", md: "100%" },
                      }}
                      variant="standard"
                    >
                      <FormLabel sx={{ fontWeight: "bold" }}>Cedula</FormLabel>
                      <OutlinedInput
                        type="number"
                        defaultValue={dataB[3]?.cedula_repre}
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
                        {...register("cedula_repre")}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.cedula_repre?.message &&
                          errors.cedula_repre.message}
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
                        Parentesco
                      </FormLabel>
                      <Select
                        required
                        onChange={(e) => setParentesco(String(e.target.value))}
                        defaultValue={dataB[3]?.parentesco}
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
                        <MenuItem value={"Padre"}>Padre</MenuItem>
                        <MenuItem value={"Madre"}>Madre</MenuItem>
                        <MenuItem value={"Tio/a"}>Tio/a</MenuItem>
                        <MenuItem value={"Primo/a"}>Primo/a</MenuItem>
                        <MenuItem value={"Abuelo/a"}>Abuelo/a</MenuItem>
                        <MenuItem value={"Otro/a"}>Otro/a</MenuItem>
                      </Select>
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
                        Telefono del representante
                      </FormLabel>
                      <OutlinedInput
                        type="number"
                        defaultValue={dataB[3]?.telefono_repre}
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
                        {...register("telefono_repre")}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.telefono_repre?.message &&
                          errors.telefono_repre.message}
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
                        Correo electronico del representante
                      </FormLabel>
                      <OutlinedInput
                        type="email"
                        defaultValue={dataB[3]?.email_repre}
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
                        {...register("email_repre")}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.email_repre?.message &&
                          errors.email_repre.message}
                      </FormHelperText>
                    </FormControl>
                  </Stack>
                </Stack>
              )}
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
                        Editar atleta
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
