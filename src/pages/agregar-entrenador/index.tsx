import Badge from "@mui/material/Badge/Badge";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

/* local */
import { IEntre } from "./interface/IEntre";
/* icons */
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import HelpIcon from "@mui/icons-material/Help";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import FormLabel from "@mui/material/FormLabel/FormLabel";
import FormControl from "@mui/material/FormControl/FormControl";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import { theme } from "../../shared/style-components/theme/theme";
import SendIcon from "@mui/icons-material/Send";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Button from "@mui/material/Button/Button";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import "dayjs/locale/es";
import { useState } from "react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FullScreen,
  ImagePreview,
} from "@files-ui/react";
import { useAggCoach } from "../../shared/hooks/useCoach";

export default function agregarEntrenador() {
  const Theme = theme;
  const StyledDatePicker = styled(DatePicker)({
    ".MuiPickersToolbar-root": {
      borderRadius: 19,
      borderWidth: 1,
      border: "1px solid",
    },
  });

  const [gen, setGen] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [extFiles, setExtFiles] = useState<any>([]);
  const [imageSrc, setImageSrc] = useState(undefined);

  const { mutate, isPending } = useAggCoach();
  const { control } = useForm();
  const [fechaNac, setFechaNac] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IEntre>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<IEntre> = (data: IEntre) =>
    registerEntrenador(data);

  const registerEntrenador = (data: IEntre) => {
    const fecha = dayjs(fechaNac).format("DD/MM/YYYY");
    const sendData = {
      password: data?.contraseña,
      primer_nom: data?.primer_nombre,
      segundo_nom: data?.segundo_nombre,
      primer_ape: data?.primer_apellido,
      segundo_ape: data?.segundo_apellido,
      cedula: data?.cedula,
      genero: gen,
      grado_academico: data?.grd_aca,
      fechaNacimiento: fecha,
      telefono: data?.telefono,
      telefono_casa: data?.telefono_casa,
      foto: extFiles[0].file,
      email: data?.email,
    };

    mutate(sendData);
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

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={{ xs: "100vw", md: "100%" }}
        height={"100%"}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          my={5}
          sx={{ width: { md: "80vw", xs: "95vw" } }}
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
            <PersonAddIcon sx={{ color: "#fff" }} fontSize="medium" />
            <Typography
              display={"flex"}
              justifyContent={"center"}
              fontSize={"0.9em"}
              fontWeight={"bold"}
              color="#fff"
            >
              <NavigateNextIcon />
            </Typography>
            <Typography
              fontSize={"0.9em"}
              fontWeight={"bold"}
              letterSpacing={1.5}
              color="#fff"
            >
              Registrar Entrenador
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
          width={{ md: "80vw", xs: "95vw" }}
          height={"auto"}
          bgcolor={"#fff"}
          borderRadius={"1em"}
          boxShadow={5}
          px={{ md: 3, xs: 0 }}
          pb={3}
          sx={{ overflowX: "hidden" }}
          alignItems={"center"}
          onSubmit={handleSubmit(onSubmit)}
          component={"form"}
        >
          <Typography
            letterSpacing={3}
            bgcolor={"#E84730"}
            color={"#fff"}
            width={{ md: "110%", xs: "100%" }}
            align="center"
            fontWeight={"bold"}
            fontSize={"1.1em"}
          >
            Registrar Entrenador
          </Typography>
          <Grid
            container
            direction={{ md: "row", xs: "column" }}
            my={1}
            gap={2}
            height={"100%"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <Grid md={5.8}>
              <Stack
                width={"100%"}
                bgcolor={"#fff"}
                borderRadius={"1em"}
                my={1.5}
                boxShadow={3}
                height={"100%"}
              >
                <Typography
                  width={"100%"}
                  bgcolor={"#f5f5f5"}
                  letterSpacing={1}
                  align="center"
                  sx={{
                    borderTopLeftRadius: "1em",
                    borderTopRightRadius: "1em",
                  }}
                >
                  Datos Personales
                </Typography>
                <Stack justifyContent={"space-around"} height={"100%"}>
                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    justifyContent={"space-around"}
                  >
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: { md: "50%", xs: "100%" },
                        height: "10vh",
                      }}
                    >
                      <FormLabel
                        required
                        sx={{ fontSize: "16px", textAlign: "left" }}
                      >
                        Primer Nombre
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          minHeight: "35px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="text"
                        placeholder="Ingrese su primer nombre"
                        error={errors.primer_nombre && true}
                        {...register("primer_nombre", {
                          required: {
                            value: true,
                            message: "Este campo es requerido.",
                          },
                        })}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.primer_nombre?.message &&
                          errors.primer_nombre.message}{" "}
                      </FormHelperText>
                    </FormControl>
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: { md: "50%", xs: "100%" },
                        height: "10vh",
                      }}
                    >
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Segundo Nombre
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          minHeight: "35px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="text"
                        placeholder="Ingrese su segundo nombre"
                        error={errors.segundo_nombre && true}
                        {...register("segundo_nombre")}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {" "}
                        {errors.segundo_nombre?.message &&
                          errors.segundo_nombre.message}
                      </FormHelperText>
                    </FormControl>
                  </Stack>
                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    justifyContent={"space-around"}
                  >
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: { md: "50%", xs: "100%" },
                        height: "10vh",
                      }}
                    >
                      <FormLabel
                        required
                        sx={{ fontSize: "16px", textAlign: "left" }}
                      >
                        Primer Apellido
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          minHeight: "35px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="text"
                        placeholder="Ingrese su primer apellido"
                        error={errors.primer_apellido && true}
                        {...register("primer_apellido", {
                          required: {
                            value: true,
                            message: "Este campo es requerido.",
                          },
                        })}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.primer_apellido?.message &&
                          errors.primer_apellido.message}
                      </FormHelperText>
                    </FormControl>
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: { md: "50%", xs: "100%" },
                        height: "10vh",
                      }}
                    >
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Segundo Apellido
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          minHeight: "35px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="text"
                        placeholder="Ingrese su segundo apellido"
                        error={errors.segundo_apellido && true}
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
                    justifyContent={"center"}
                  >
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: { md: "50%", xs: "100%" },
                        height: "10vh",
                      }}
                    >
                      <FormLabel
                        required
                        sx={{ fontSize: "16px", textAlign: "left" }}
                      >
                        Cédula
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          minHeight: "35px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="number"
                        placeholder="Ingrese su cédula"
                        error={errors.cedula && true}
                        {...register("cedula", {
                          required: {
                            value: true,
                            message: "Este campo es requerido.",
                          },
                        })}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.cedula?.message && errors.cedula.message}
                      </FormHelperText>
                    </FormControl>
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: { md: "50%", xs: "100%" },
                        height: "10vh",
                      }}
                    >
                      <FormLabel
                        required
                        sx={{ fontSize: "16px", textAlign: "left" }}
                      >
                        Genero
                      </FormLabel>
                      <Select
                        id="Genero"
                        required
                        defaultValue={""}
                        displayEmpty
                        onChange={(e) => setGen(e.target.value)}
                        sx={{
                          borderRadius: "1em",
                          minHeight: "35px",
                          boxShadow: 1,
                        }}
                      >
                        <MenuItem value={""} disabled>
                          Seleccione un genero
                        </MenuItem>
                        <MenuItem value={"m"}>Masculino</MenuItem>
                        <MenuItem value={"f"}>Femenino</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                  <Stack>
                    <FormControl required sx={{ my: 1, px: 1, height: "10vh" }}>
                      <Controller
                        name="FechaNacimiento"
                        control={control}
                        defaultValue={fechaNac}
                        render={({ field }) => (
                          <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            adapterLocale="es"
                          >
                            <StyledDatePicker
                              label={"Fecha de nacimiento"}
                              theme={Theme}
                              {...field}
                              onChange={(newValue: any) => {
                                field.onChange(newValue);
                                setFechaNac(newValue);
                              }}
                              sx={{
                                ".MuiOutlinedInput-root": {
                                  height: { md: "3.2em", xs: "initial" },
                                  borderRadius: "1em",
                                  boxShadow: 1,
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
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid md={5.8}>
              <Stack
                width={"100%"}
                bgcolor={"#fff"}
                borderRadius={"1em"}
                my={1.5}
                pb={1}
                boxShadow={3}
                height={"47%"}
              >
                <Typography
                  width={"100%"}
                  bgcolor={"#f5f5f5"}
                  letterSpacing={1}
                  sx={{
                    borderTopLeftRadius: "1em",
                    borderTopRightRadius: "1em",
                  }}
                  align="center"
                >
                  Datos de acceso
                </Typography>
                <Stack justifyContent={"space-around"} height={"100%"}>
                  <FormControl
                    sx={{
                      px: 1,
                      width: "100%",
                      height: "10vh",
                    }}
                  >
                    <FormLabel
                      required
                      sx={{ fontSize: "16px", textAlign: "left" }}
                    >
                      Contraseña
                    </FormLabel>
                    <OutlinedInput
                      sx={{
                        minHeight: "35px",
                        boxShadow: 1,
                        borderRadius: "1em",
                      }}
                      type={showPassword ? "string" : "password"}
                      placeholder="Ingrese su contraseña"
                      endAdornment={
                        <IconButton
                          sx={{ mr: 1 }}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      }
                      error={errors.contraseña && true}
                      {...register("contraseña", {
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){4,8}$/,
                          message:
                            "La contraseña debe contener al menos una minúscula,mayúscula,numero y carácter especial.",
                        },
                        minLength: {
                          value: 4,
                          message: "Debe tener mínimo 4 caracteres",
                        },
                        maxLength: {
                          value: 8,
                          message: "Máximo 8 caracteres ",
                        },
                      })}
                    />
                    <FormHelperText sx={{ color: "#000" }}>
                      {errors.contraseña?.message && errors.contraseña.message}
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    sx={{
                      px: 1,
                      width: "100%",
                      height: "10vh",
                    }}
                  >
                    <FormLabel
                      required
                      sx={{ fontSize: "16px", textAlign: "left" }}
                    >
                      Repetir contraseña
                    </FormLabel>
                    <OutlinedInput
                      sx={{
                        minHeight: "35px",
                        boxShadow: 1,
                        borderRadius: "1em",
                      }}
                      type={showPassword2 ? "string" : "password"}
                      endAdornment={
                        <IconButton
                          sx={{ mr: 1 }}
                          onClick={() => setShowPassword2(!showPassword2)}
                        >
                          {showPassword2 ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      }
                      placeholder="Ingrese nuevamente su contraseña"
                      error={errors.repe_contraseña && true}
                      {...register("repe_contraseña", {
                        required: {
                          value: true,
                          message: "Este campo es requerido.",
                        },
                        validate: (value: string) => {
                          return (
                            value === watch("contraseña") ||
                            "Contraseñas diferentes "
                          );
                        },
                      })}
                    />
                    <FormHelperText sx={{ color: "#000" }}>
                      {errors.repe_contraseña?.message &&
                        errors.repe_contraseña.message}
                    </FormHelperText>
                  </FormControl>
                </Stack>
              </Stack>
              <Stack
                borderRadius={"1em"}
                my={1.5}
                pb={1}
                boxShadow={3}
                height={"50%"}
              >
                <Typography
                  width={"100%"}
                  bgcolor={"#f5f5f5"}
                  letterSpacing={1}
                  sx={{
                    borderTopLeftRadius: "1em",
                    borderTopRightRadius: "1em",
                  }}
                  align="center"
                >
                  Foto de Perfil
                </Typography>
                <Dropzone
                  onChange={updateFiles}
                  localization="ES-es"
                  value={extFiles}
                  required
                  accept=".png, .jpg"
                  maxFiles={1}
                  style={{ border: "none" }}
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
            </Grid>
            <Grid my={2} minWidth={"100%"}>
              <Stack
                width={"100%"}
                bgcolor={"#fff"}
                borderRadius={"1em"}
                my={1}
                boxShadow={3}
                height={"auto"}
              >
                <Typography
                  width={"100%"}
                  bgcolor={"#f5f5f5"}
                  letterSpacing={1}
                  sx={{
                    borderTopLeftRadius: "1em",
                    borderTopRightRadius: "1em",
                  }}
                  align="center"
                >
                  Datos de Comunicación
                </Typography>
                <Stack justifyContent={"space-between"} height={"100%"}>
                  <Stack direction={{ md: "row", xs: "column" }}>
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: "100%",
                        height: "10vh",
                      }}
                    >
                      <FormLabel
                        required
                        sx={{ fontSize: "16px", textAlign: "left" }}
                      >
                        Teléfono
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          minHeight: "35px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="number"
                        placeholder="Ingrese su Numero Telefónico"
                        error={errors.telefono && true}
                        {...register("telefono", {
                          pattern: {
                            value: /^\d{11}$/,
                            message: "Tiene que tener 11 caracteres",
                          },
                        })}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.telefono?.message && errors.telefono.message}
                      </FormHelperText>
                    </FormControl>
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: "100%",
                        height: "10vh",
                      }}
                    >
                      <FormLabel
                        required
                        sx={{ fontSize: "16px", textAlign: "left" }}
                      >
                        Teléfono de casa
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          minHeight: "35px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="number"
                        placeholder="Ingrese su Numero Telefónico de su casa"
                        error={errors.telefono_casa && true}
                        {...register("telefono_casa", {
                          pattern: {
                            value: /^\d{11}$/,
                            message: "Tiene que tener 11 caracteres",
                          },
                        })}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.telefono_casa?.message &&
                          errors.telefono_casa.message}
                      </FormHelperText>
                    </FormControl>
                  </Stack>
                  <Stack direction={{ md: "row", xs: "column" }}>
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: "100%",
                        height: "10vh",
                      }}
                    >
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Correo Electrónico
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          minHeight: "35px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="string"
                        placeholder="Ingrese su correo electrónico"
                        error={errors.email && true}
                        {...register("email")}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.email?.message && errors.email.message}
                      </FormHelperText>
                    </FormControl>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid my={1} minWidth={"100%"}>
              <Stack
                width={"100%"}
                bgcolor={"#fff"}
                borderRadius={"1em"}
                boxShadow={3}
                height={"auto"}
              >
                <Typography
                  width={"100%"}
                  bgcolor={"#f5f5f5"}
                  letterSpacing={1}
                  sx={{
                    borderTopLeftRadius: "1em",
                    borderTopRightRadius: "1em",
                  }}
                  align="center"
                >
                  Datos Académicos
                </Typography>
                <Stack justifyContent={"space-between"} height={"100%"}>
                  <Stack direction={{ md: "row", xs: "column" }}>
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: "100%",
                        height: "10vh",
                      }}
                    >
                      <FormLabel
                        required
                        sx={{ fontSize: "16px", textAlign: "left" }}
                      >
                        Nivel Académico
                      </FormLabel>

                      <Select
                        id="Genero"
                        required
                        defaultValue={""}
                        displayEmpty
                        sx={{
                          borderRadius: "1em",
                          minHeight: "35px",
                          boxShadow: 1,
                        }}
                        {...register("grd_aca", {
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          },
                        })}
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
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.grd_aca?.message && errors.grd_aca.message}
                      </FormHelperText>
                    </FormControl>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Stack>
            {!isPending && (
              <Stack alignItems={"center"}>
                <motion.div
                  whileHover={{
                    scale: watch("telefono") === undefined ? 1 : 1.05,
                  }}
                >
                  <Button
                    disabled={watch("telefono") === undefined ? true : false}
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
                      Registrar entrenador
                    </Typography>
                  </Button>
                </motion.div>
              </Stack>
            )}
            {isPending && (
              <Stack justifyContent="center" alignItems="center">
                <CircularProgress color="primary" />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
