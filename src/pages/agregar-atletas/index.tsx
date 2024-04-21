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
import { IAtlets } from "./interface/IAtlets";
import { useAggAtlets } from "../../shared/hooks/useAtlets";
/* icons */
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
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
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import getAge from "./hooks/getAge";
import { motion } from "framer-motion";

export default function agregarAtletas() {
  const Theme = theme;
  const StyledDatePicker = styled(DatePicker)({
    ".MuiPickersToolbar-root": {
      borderRadius: 19,
      borderWidth: 1,
      border: "1px solid",
    },
  });

  const [gen, setGen] = useState("");
  const [tSangre, setTSangre] = useState("");
  const { mutate, isPending } = useAggAtlets();
  const { control } = useForm();
  const [fechaNac, setFechaNac] = useState(null);
  const [categoria, setCategoria] = useState("");
  const [repre, setRepre] = useState(false);
  const [parentesco, setParentesco] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAtlets>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<IAtlets> = (data: IAtlets) =>
    registerAtleta(data);
  const fechaCtg = Number(dayjs(fechaNac).format("YYYY"));
  const day = Number(dayjs(fechaNac).format("D"));
  const month = Number(dayjs(fechaNac).format("M"));
  const year = Number(dayjs(fechaNac).format("YYYY"));

  const edad = getAge(day, month, year);
  useEffect(() => {
    if (edad < 18) {
      setRepre(true);
    } else setRepre(false);
  }, [repre, edad]);

  useEffect(() => {
    const fechaNow = new Date().getFullYear();

    if (fechaNow - 5 === fechaCtg || fechaNow - 4 === fechaCtg) {
      setCategoria("Mini");
    } else if (fechaNow - 6 === fechaCtg || fechaNow - 7 === fechaCtg) {
      setCategoria("Semilla");
    } else if (fechaNow - 8 === fechaCtg || fechaNow - 9 === fechaCtg) {
      setCategoria("Compota");
    } else if (fechaNow - 10 === fechaCtg || fechaNow - 11 === fechaCtg) {
      setCategoria('Pre infantil "A"');
    } else if (fechaNow - 12 === fechaCtg || fechaNow - 13 === fechaCtg) {
      setCategoria('Pre infantil "B"');
    } else if (fechaNow - 14 === fechaCtg || fechaNow - 15 === fechaCtg) {
      setCategoria("Infantil");
    } else if (fechaNow - 16 === fechaCtg || fechaNow - 17 === fechaCtg) {
      setCategoria("Menor");
    } else if (fechaNow - 18 === fechaCtg || fechaNow - 19 === fechaCtg) {
      setCategoria("Juvenil");
    } else if (fechaNow - 18 === fechaCtg || fechaNow - 19 === fechaCtg) {
      setCategoria("Junior");
    } else if (fechaNow - 18 === fechaCtg || fechaNow - 19 === fechaCtg) {
      setCategoria("Mayor");
    } else setCategoria("Mayor");
  }, [fechaCtg]);

  const registerAtleta = (data: IAtlets) => {
    const fecha = dayjs(fechaNac).format("DD/MM/YYYY");
    const sendData = {
      primer_nombre: data?.primer_nombre,
      segundo_nombre: data?.segundo_nombre,
      primer_apellido: data?.primer_apellido,
      segundo_apellido: data?.segundo_apellido,
      cedula: data?.cedula,
      genero: gen,
      fechaNacimiento: fecha,
      estatura: data?.estatura,
      peso: data?.peso,
      categoria: categoria,
      envergadura: data?.envergadura,
      tipo_sangre: tSangre,
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

    mutate(sendData);
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
            <PersonAddAlt1Icon sx={{ color: "#fff" }} fontSize="medium" />
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
              Agregar Atletas
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
            Agregar Atleta
          </Typography>
          <Grid
            container
            direction={{ md: "row", xs: "column" }}
            my={1}
            gap={2}
            // columnGap={2}
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
                        Cedula
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
                                  height: {md:"3.2em",xs:'initial'},
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
                height={"100%"}
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
                  Datos Genéticos
                </Typography>
                <Stack justifyContent={"space-around"} height={"100%"}>
                  <FormControl
                    sx={{
                      // my: 1,
                      px: 1,
                      width: "100%",
                      height: "10vh",
                    }}
                  >
                    <FormLabel
                      required
                      sx={{ fontSize: "16px", textAlign: "left" }}
                    >
                      Estatura
                    </FormLabel>
                    <OutlinedInput
                      sx={{
                        minHeight: "35px",
                        boxShadow: 1,
                        borderRadius: "1em",
                      }}
                      type="float"
                      placeholder="Ingrese su estatura"
                      error={errors.estatura && true}
                      {...register("estatura", {
                        required: {
                          value: true,
                          message: "Este campo es requerido.",
                        },
                      })}
                    />
                    <FormHelperText sx={{ color: "#000" }}>
                      {errors.estatura?.message && errors.estatura.message}
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    sx={{
                      // my: 1,
                      px: 1,
                      width: "100%",
                      height: "10vh",
                    }}
                  >
                    <FormLabel
                      required
                      sx={{ fontSize: "16px", textAlign: "left" }}
                    >
                      Peso
                    </FormLabel>
                    <OutlinedInput
                      sx={{
                        minHeight: "35px",
                        boxShadow: 1,
                        borderRadius: "1em",
                      }}
                      type="number"
                      placeholder="Ingrese su peso"
                      error={errors.peso && true}
                      {...register("peso", {
                        required: {
                          value: true,
                          message: "Este campo es requerido.",
                        },
                      })}
                    />
                    <FormHelperText sx={{ color: "#000" }}>
                      {errors.peso?.message && errors.peso.message}
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    sx={{
                      px: 1,
                      width: "100%",
                      height: "10vh",
                    }}
                  >
                    <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                      Envergadura
                    </FormLabel>
                    <OutlinedInput
                      sx={{
                        minHeight: "35px",
                        boxShadow: 1,
                        borderRadius: "1em",
                      }}
                      type="number"
                      placeholder="Ingrese su envergadura"
                      error={errors.envergadura && true}
                      {...register("envergadura", {
                        required: {
                          value: true,
                          message: "Este campo es requerido.",
                        },
                      })}
                    />
                    <FormHelperText sx={{ color: "#000" }}>
                      {errors.envergadura?.message &&
                        errors.envergadura.message}
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
                      Tipo de Sangre
                    </FormLabel>

                    <Select
                      id="TipoSandre"
                      required
                      displayEmpty
                      defaultValue={""}
                      onChange={(e) => setTSangre(e.target.value)}
                      sx={{
                        borderRadius: "1em",
                        minHeight: "35px",
                        boxShadow: 1,
                      }}
                    >
                      <MenuItem value={""} disabled>
                        Seleccione un tipo de sangre
                      </MenuItem>
                      <MenuItem value={"A+"}>A+</MenuItem>
                      <MenuItem value={"A-"}>A-</MenuItem>
                      <MenuItem value={"B+"}>B+</MenuItem>
                      <MenuItem value={"B-"}>B-</MenuItem>
                      <MenuItem value={"O+"}>O+</MenuItem>
                      <MenuItem value={"O-"}>O-</MenuItem>
                      <MenuItem value={"AB+"}>AB+</MenuItem>
                      <MenuItem value={"AB-"}>AB-</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Stack>
            </Grid>
            {edad >= 18 && (
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
                          placeholder="Ingrese su Numero Telefonico"
                          error={errors.telefono && true}
                          {...register("telefono", {
                            required: {
                              value: true,
                              message: "Este campo es requerido.",
                            },
                            pattern: /^\d{11}$/,
                          })}
                        />
                        <FormHelperText sx={{ color: "#000" }}>
                          {errors.telefono?.message && errors.telefono.message}
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
            )}
            {edad < 18 && (
              <Grid minWidth={"100%"}>
                <Stack
                  width={"100%"}
                  bgcolor={"#fff"}
                  borderRadius={"1em"}
                  my={1}
                  boxShadow={3}
                  height={"100%"}
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
                    Datos de Comunicación del Atleta
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
                        <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                          Teléfono del Atleta
                        </FormLabel>
                        <OutlinedInput
                          sx={{
                            minHeight: "35px",
                            boxShadow: 1,
                            borderRadius: "1em",
                          }}
                          type="number"
                          placeholder="Ingrese su Numero Telefonico"
                          error={errors.telefono && true}
                          {...register("telefono", {
                            pattern: /^\d{11}$/,
                          })}
                        />
                        <FormHelperText sx={{ color: "#000" }}>
                          {errors.telefono?.message && errors.telefono.message}
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
                          Correo Electrónico del Atleta
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
                          {...register("email", {})}
                        />
                        <FormHelperText sx={{ color: "#000" }}>
                          {errors.email?.message && errors.email.message}
                        </FormHelperText>
                      </FormControl>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            )}
            {edad < 18 && (
              <Grid minWidth={"100%"}>
                <Stack
                  width={"100%"}
                  bgcolor={"#fff"}
                  borderRadius={"1em"}
                  my={1}
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
                    Datos del Representante del atleta
                  </Typography>
                  <Stack
                    justifyContent={"space-around"}
                    width={"100%"}
                    alignContent={"center"}
                    height={"100%"}
                  >
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
                          Nombre
                        </FormLabel>
                        <OutlinedInput
                          sx={{
                            minHeight: "35px",
                            boxShadow: 1,
                            borderRadius: "1em",
                          }}
                          type="text"
                          placeholder="Ingrese el nombre de su representante"
                          error={errors.nombre_repre && true}
                          {...register("nombre_repre", {
                            required: {
                              value: true,
                              message: "Este campo es requerido.",
                            },
                          })}
                        />
                        <FormHelperText sx={{ color: "#000" }}>
                          {errors.nombre_repre?.message &&
                            errors.nombre_repre.message}
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
                          Apellido
                        </FormLabel>
                        <OutlinedInput
                          sx={{
                            minHeight: "35px",
                            boxShadow: 1,
                            borderRadius: "1em",
                          }}
                          type="text"
                          placeholder="Ingrese el apellido del representante"
                          error={errors.apellido_repre && true}
                          {...register("apellido_repre", {
                            required: {
                              value: true,
                              message: "Este campo es requerido",
                            },
                          })}
                        />
                        <FormHelperText sx={{ color: "#000" }}>
                          {" "}
                          {errors.apellido_repre?.message &&
                            errors.apellido_repre.message}
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
                          Cédula
                        </FormLabel>
                        <OutlinedInput
                          sx={{
                            minHeight: "35px",
                            boxShadow: 1,
                            borderRadius: "1em",
                          }}
                          type="number"
                          placeholder="Ingrese la cedula del representante"
                          error={errors.cedula_repre && true}
                          {...register("cedula_repre", {
                            required: {
                              value: true,
                              message: "Este campo es requerido.",
                            },
                          })}
                        />
                        <FormHelperText sx={{ color: "#000" }}>
                          {errors.cedula_repre?.message &&
                            errors.cedula_repre.message}
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
                          Parentesco
                        </FormLabel>
                        <Select
                          id="Parentesco"
                          required
                          placeholder="Coloque su parentesco"
                          defaultValue={""}
                          onChange={(e) => setParentesco(e.target.value)}
                          sx={{
                            borderRadius: "1em",
                            minHeight: "45px",
                            boxShadow: 1,
                          }}
                        >
                          <MenuItem value={"Padre"}>Padre</MenuItem>
                          <MenuItem value={"Madre"}>Madre</MenuItem>
                          <MenuItem value={"Tio/a"}>Tio/a</MenuItem>
                          <MenuItem value={"Primo/a"}>Primo/a</MenuItem>
                          <MenuItem value={"Abuelo/a"}>Abuelo/a</MenuItem>
                          <MenuItem value={"Otro/a"}>Otro/a</MenuItem>
                        </Select>
                        <FormHelperText sx={{ color: "#000" }}>
                          {errors.parentesco?.message &&
                            errors.parentesco.message}
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
                          Teléfono
                        </FormLabel>
                        <OutlinedInput
                          sx={{
                            minHeight: "35px",
                            boxShadow: 1,
                            borderRadius: "1em",
                          }}
                          type="number"
                          placeholder="Ingrese el Telefono del representante"
                          error={errors.telefono_repre && true}
                          {...register("telefono_repre", {
                            required: {
                              value: true,
                              message: "Este campo es requerido.",
                            },
                            minLength: {
                              value: 11 || 12,
                              message:
                                "El numero de telefono debe tener mínimo 11 caracteres",
                            },
                          })}
                        />
                        <FormHelperText sx={{ color: "#000" }}>
                          {errors.telefono_repre?.message &&
                            errors.telefono_repre.message}
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
                          Correo Electrónico
                        </FormLabel>
                        <OutlinedInput
                          sx={{
                            minHeight: "35px",
                            boxShadow: 1,
                            borderRadius: "1em",
                          }}
                          type="email"
                          placeholder="Ingrese el correo electronico del representante"
                          error={errors.email_repre && true}
                          {...register("email_repre")}
                        />
                        <FormHelperText sx={{ color: "#000" }}>
                          {errors.email_repre?.message &&
                            errors.email_repre.message}
                        </FormHelperText>
                      </FormControl>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            )}
          </Grid>
          <Stack mt={2}>
            {!isPending && (
              <Stack alignItems={"center"}>
                <motion.div
                  whileHover={{ scale: !Number.isNaN(edad) ? 1.05 : 1 }}
                >
                  <Button
                    disabled={!Number.isNaN(edad) ? false : true}
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
                      Registrar Atleta
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
