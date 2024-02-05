import Badge from "@mui/material/Badge/Badge";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
import { esES } from "@mui/x-date-pickers/locales";
/* local */

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
import Select, { SelectChangeEvent } from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { useState } from "react";
import Button from "@mui/material/Button/Button";
export default function agregarAtletas() {
  const Theme = theme;
  const StyledDatePicker = styled(DatePicker)({
    ".MuiPickersToolbar-root": {
      color: "#bbdefb",
      borderRadius: 19,
      borderWidth: 1,
      borderColor: "#2196f3",
      border: "1px solid",
      backgroundColor: "#0d47a1",
    },
  });

  const [gen, setGen] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGen(event.target.value as string);
  };

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
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
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
                        error={true}
                        placeholder="Ingrese su primer nombre"
                      />
                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                    <FormControl
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
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
                        error={true}
                        placeholder="Ingrese su segundo nombre"
                      />
                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                  </Stack>
                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    justifyContent={"space-around"}
                  >
                    <FormControl
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
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
                        error={true}
                        placeholder="Ingrese su primer apellido"
                      />
                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                    <FormControl
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
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
                        error={true}
                        placeholder="Ingrese su primer nombre"
                      />

                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                  </Stack>
                  <Stack direction={{ md: "row", xs: "column" }}>
                    <FormControl
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
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
                        error={true}
                        placeholder="Ingrese su cedula"
                      />
                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                    <FormControl
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
                    >
                      <FormLabel sx={{ fontSize: "16px", textAlign: "left" }}>
                        Genero
                      </FormLabel>
                      <Select
                        id="demo-simple-select"
                        value={gen}
                        onChange={handleChange}
                        sx={{
                          borderRadius: "1em",
                          height: "45px",
                        }}
                      >
                        {/*     <MenuItem disabled value="1">
                          <em>Placeholder</em>
                        </MenuItem> */}
                        <MenuItem value={1}>Masculino</MenuItem>
                        <MenuItem value={2}>Femenino</MenuItem>
                      </Select>

                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                  </Stack>
                  <Stack>
                    <FormControl sx={{ my: 1, px: 1 }}>
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        localeText={
                          esES.components.MuiLocalizationProvider.defaultProps
                            .localeText
                        }
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
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
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
                        type="text"
                        error={true}
                        placeholder="Ingrese su estatura"
                      />

                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                    <FormControl
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
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
                        type="text"
                        error={true}
                        placeholder="Ingrese su peso"
                      />

                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                  </Stack>
                  <Stack direction={{ md: "row", xs: "column" }}>
                    <FormControl
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
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
                        type="text"
                        error={true}
                        placeholder="Ingrese su envergadura"
                      />

                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                    <FormControl
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
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
                        error={true}
                        placeholder="Ingrese su tipo de sangre"
                      />

                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
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
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
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
                        error={true}
                        placeholder="Ingrese su categoría asignada"
                      />

                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                    <FormControl
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
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
                        error={true}
                        placeholder="Ingrese su especialidad"
                      />

                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                  </Stack>
                  <Stack direction={{ md: "row", xs: "column" }}>
                    <FormControl
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
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
                        error={true}
                        // placeholder="Ing"
                      />

                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                    <FormControl
                      sx={{ my: 1, px: 1, width: { md: "50%", xs: "100%" } }}
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
                        error={true}
                        placeholder="Ingrese su marca personal"
                      />

                      <FormHelperText sx={{ color: "#000" }}></FormHelperText>
                    </FormControl>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Stack my={2}>
            <Button
              endIcon={<SendIcon />}
              className="learn-more"
              style={{ width: "80%", borderRadius: "5em", height: "35px" }}
            >
              Enviar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
