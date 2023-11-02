import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ILogin } from "../interfaces/iLogin";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import BadgeIcon from "@mui/icons-material/Badge";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Stack,
  OutlinedInput,
  Typography,
} from "@mui/material";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<ILogin> = (data) => console.log(data);

  return (
    <>
      <Stack gap={2} onSubmit={handleSubmit(onSubmit)} component="form">
        <FormControl>
          <FormLabel sx={{ fontSize: "18px" }}>Cedula</FormLabel>
          <OutlinedInput
            type="number"
            error={errors.ci && true}
            startAdornment={
              <IconButton sx={{ mr: 1 }}>
                <BadgeIcon />
              </IconButton>
            }
            {...register("ci", {
              required: {
                value: true,
                message: "Este campo es requerido.",
              },
            })}
          />
          {/* Colocar aqui un patron de numero cedula */}
        </FormControl>
        <FormHelperText sx={{ color: "#f00" }}>
          {errors.ci?.message && errors.ci.message}
        </FormHelperText>

        <FormControl>
          <FormLabel sx={{ fontSize: "18px" }}>Contraseña</FormLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            error={errors.password && true}
            startAdornment={
              <IconButton
                sx={{ mr: 1 }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            }
            {...register("password", {
              required: {
                value: true,
                message: "Este campo es requerido.",
              },
            })}
          />
        </FormControl>
        <FormHelperText sx={{ color: "#f00" }}>
          {errors.password?.message && errors.password.message}
        </FormHelperText>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            textTransform: "inherit",
            height: "48px",
            borderRadius: "6px",
            fontSize: "20px",
          }}
        >
          Iniciar sesión
        </Button>
        {/*  {!isLoading && (
        )}
        {isLoading && (
          <Stack justifyContent="center" alignItems="center" m={2}>
            <CircularProgress color="primary" />
          </Stack>
        )} */}
      </Stack>
      <Stack gap={4} sx={{ mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box />
        </Box>
      </Stack>
      <Stack alignItems={"right"} width={"100%"}>
        <Typography>Recuperar Contraseña</Typography>
      </Stack>
    </>
  );
}
