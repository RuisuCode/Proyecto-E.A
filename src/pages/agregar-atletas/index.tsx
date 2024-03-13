import Badge from "@mui/material/Badge/Badge";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
import { useForm, SubmitHandler } from "react-hook-form";

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
// import { useState } from "react";
import Button from "@mui/material/Button/Button";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import "dayjs/locale/es";

export default function agregarAtletas() {
  const Theme = theme;
  const StyledDatePicker = styled(DatePicker)({
    ".MuiPickersToolbar-root": {
      borderRadius: 19,
      borderWidth: 1,
      border: "1px solid",
    },
  });

  // const [setGen] = useState("");
  const { mutate, isPending } = useAggAtlets();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAtlets>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<IAtlets> = (data) => mutate(data);
  // const handleChange = (event: SelectChangeEvent) => {
  //   setGen(event.target.value as string);
  // };

  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"}>
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
            <Typography fontSize={"0.9em"} fontWeight={"bold"} color="#fff">
              <NavigateNextIcon />
            </Typography>
            <Typography
              fontSize={"0.9em"}
              fontWeight={"bold"}
              letterSpacing={1.5}
              color="#fff"
            >
              {/* {location.pathname.split("/")[1]} */}
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
            gap={1}
            height={"100%"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <Grid md={5.9}>
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
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Primer Nombre
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          height: "45px",
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
                          height: "45px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="text"
                        placeholder="Ingrese su segundo nombre"
                        error={errors.segundo_nombre && true}
                        {...register("segundo_nombre", {
                          required: {
                            value: true,
                            message: "Este campo es requerido.",
                          },
                        })}
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
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Primer Apellido
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          height: "45px",
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
                        Segundo Apeliido
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          height: "45px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="text"
                        placeholder="Ingrese su segundo appelido"
                        error={errors.segundo_apellido && true}
                        {...register("segundo_apellido", {
                          required: {
                            value: true,
                            message: "Este campo es requerido.",
                          },
                        })}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.segundo_apellido?.message &&
                          errors.segundo_apellido.message}
                      </FormHelperText>
                    </FormControl>
                  </Stack>
                  <Stack direction={{ md: "row", xs: "column" }}>
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: { md: "50%", xs: "100%" },
                        height: "10vh",
                      }}
                    >
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Cedula
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          height: "45px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="number"
                        placeholder="Ingrese su cedula"
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
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Genero
                      </FormLabel>
                      <Select
                        id="demo-simple-select"
                        // onChange={handleChange}
                        sx={{
                          borderRadius: "1em",
                          height: "45px",
                        }}
                      >
                        {/*     <MenuItem disabled value="1">
                          <em>Placeholder</em>
                        </MenuItem> */}
                        <MenuItem value={"m"}>Masculino</MenuItem>
                        <MenuItem value={"f"}>Femenino</MenuItem>
                      </Select>
                      {/* ! colocar el registro */}
                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                  </Stack>
                  <Stack>
                    <FormControl sx={{ my: 1, px: 1, height: "10vh" }}>
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale="es"
                      >
                        <StyledDatePicker
                          label={"Fecha de nacimiento"}
                          theme={Theme}
                          sx={{
                            ".MuiOutlinedInput-root": {
                              borderRadius: "1em",
                            },
                          }}
                        />
                      </LocalizationProvider>

                      <FormHelperText
                        sx={{
                          color: "#000",
                        }}
                      ></FormHelperText>
                    </FormControl>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid md={5.9}>
              {/* datos de comunicacion */}{" "}
              {/*  <Stack
                width={"100%"}
                bgcolor={"#fff"}
                borderRadius={"1em"}
                my={1}
                boxShadow={3}
                justifyContent={"space-between"}
                height={"100%"}
              >
                <Typography
                  width={"100%"}
                  bgcolor={"#f5f5f5"}
                  letterSpacing={1}
                  align="center"
                >
                  Datos de Comunicación
                </Typography>
                <Stack>
                  <FormControl sx={{ my: 1, px: 1 }}>
                    <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                      Dirección
                    </FormLabel>
                    <OutlinedInput
                      sx={{
                        height: "45px",
                        boxShadow: 1,
                        borderRadius: "1em",
                      }}
                      type="text"
                      error={true}
                      placeholder="Ingrese su dirección"
                    />
                    <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                  </FormControl>
                </Stack>
                <Stack>
                  <FormControl sx={{ my: 1, px: 1 }}>
                    <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                      Teléfono
                    </FormLabel>
                    <OutlinedInput
                      sx={{
                        height: "45px",
                        boxShadow: 1,
                        borderRadius: "1em",
                      }}
                      type="number"
                      error={true}
                      placeholder="Ingrese su numero de teléfono"
                    />
                    <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                  </FormControl>
                </Stack>
              </Stack> */}
              <Stack
                width={"100%"}
                bgcolor={"#fff"}
                borderRadius={"1em"}
                my={1.5}
                boxShadow={3}
                height={"48%"}
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
                  <Stack direction={{ md: "row", xs: "column" }}>
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: { md: "50%", xs: "100%" },
                        height: "10vh",
                      }}
                    >
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Estatura
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          height: "45px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="number"
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
                        my: 1,
                        px: 1,
                        width: { md: "50%", xs: "100%" },
                        height: "10vh",
                      }}
                    >
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Peso
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          height: "45px",
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
                  </Stack>
                  <Stack direction={{ md: "row", xs: "column" }}>
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: { md: "50%", xs: "100%" },
                        height: "10vh",
                      }}
                    >
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Envergadura
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          height: "45px",
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
                        my: 1,
                        px: 1,
                        width: { md: "50%", xs: "100%" },
                        height: "10vh",
                      }}
                    >
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Tipo de Sangre
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          height: "45px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="text"
                        placeholder="Ingrese su tipo de sangre"
                        error={errors.tiposangre && true}
                        {...register("tiposangre", {
                          required: {
                            value: true,
                            message: "Este campo es requerido.",
                          },
                        })}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.tiposangre?.message &&
                          errors.tiposangre.message}
                      </FormHelperText>
                    </FormControl>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                width={"100%"}
                bgcolor={"#fff"}
                borderRadius={"1em"}
                my={1}
                boxShadow={3}
                height={"48%"}
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
                  Datos Deportivos
                </Typography>
                <Stack justifyContent={"space-around"} height={"100%"}>
                  <Stack direction={{ md: "row", xs: "column" }}>
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: { md: "50%", xs: "100%" },
                        height: "10vh",
                      }}
                    >
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Categoría
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          height: "45px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="text"
                        placeholder="Ingrese su categoría asignada"
                        error={errors.categoria && true}
                        {...register("categoria", {
                          required: {
                            value: true,
                            message: "Este campo es requerido.",
                          },
                        })}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.categoria?.message && errors.categoria.message}
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
                        Especialidad
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          height: "45px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="text"
                        placeholder="Ingrese su especialidad"
                        error={errors.especialidad && true}
                        {...register("especialidad", {
                          required: {
                            value: true,
                            message: "Este campo es requerido.",
                          },
                        })}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.especialidad?.message &&
                          errors.especialidad.message}
                      </FormHelperText>
                    </FormControl>
                  </Stack>
                  <Stack direction={{ md: "row", xs: "column" }}>
                    <FormControl
                      sx={{
                        my: 1,
                        px: 1,
                        width: { md: "50%", xs: "100%" },
                        height: "10vh",
                      }}
                    >
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Observaciones
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          height: "45px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="text"
                        // placeholder="Ing"
                        error={errors.observaciones && true}
                        {...register("observaciones", {
                          required: {
                            value: true,
                            message: "Este campo es requerido.",
                          },
                        })}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.observaciones?.message &&
                          errors.observaciones.message}
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
                        Marcas
                      </FormLabel>
                      <OutlinedInput
                        sx={{
                          height: "45px",
                          boxShadow: 1,
                          borderRadius: "1em",
                        }}
                        type="text"
                        placeholder="Ingrese su marca personal"
                        error={errors.marcas && true}
                        {...register("marcas", {
                          required: {
                            value: true,
                            message: "Este campo es requerido.",
                          },
                        })}
                      />
                      <FormHelperText sx={{ color: "#000" }}>
                        {errors.marcas?.message && errors.marcas.message}
                      </FormHelperText>
                    </FormControl>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Stack my={2}>
            {/* <Button
              endIcon={<SendIcon />}
              className="learn-more"
              style={{ width: "80%", borderRadius: "5em", height: "35px" }}
            >
              Enviar
            </Button> */}
            {!isPending && (
              <Stack alignItems={"center"}>
                <Button
                  endIcon={<SendIcon />}
                  className="learn-more"
                  type="submit"
                  style={{ width: "80%", borderRadius: "5em", height: "35px" }}
                >
                  Enviar
                </Button>
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
