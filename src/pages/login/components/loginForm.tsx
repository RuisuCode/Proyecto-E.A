import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ILogin } from "../interfaces/iLogin";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import BadgeIcon from "@mui/icons-material/Badge";
import LockIcon from "@mui/icons-material/Lock";

import {
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Stack,
  OutlinedInput,
  CircularProgress,
} from "@mui/material";
import RecoveryPassword from "./RecoveryPassword";
import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<ILogin> = (data) => mutate(data);
  return (
    <>
      <Stack
        gap={3}
        width={{ xs: "100%", md: "32vw" }}
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        mr={{ xs: 0, md: 5 }}
      >
        <FormControl>
          <FormLabel sx={{ fontSize: "18px", textAlign: "center" }}>
            Cedula
          </FormLabel>
          <OutlinedInput
            sx={{
              height: "45px",
              boxShadow: 1,
              borderRadius: "5em",
            }}
            type="number"
            error={errors.cedula && true}
            endAdornment={<BadgeIcon color="secondary" sx={{ ml: 1, mr: 1 }} />}
            placeholder="Ingrese su cédula"
            {...register("cedula", {
              required: {
                value: true,
                message: "Este campo es requerido.",
              },
              minLength: {
                value: 8,
                message: "Debe tener un mínimo de 8 dígitos",
              },
              maxLength: {
                value: 10,
                message: "El máximo de dígitos que debe ingresar es 10",
              },
            })}
          />
          <FormHelperText sx={{ color: "#000" }}>
            {errors.cedula?.message && errors.cedula.message}
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel sx={{ fontSize: "18px", textAlign: "center" }}>
            Contraseña
          </FormLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            error={errors.password && true}
            placeholder="Ingrese su contraseña"
            sx={{ height: "45px", boxShadow: 1, borderRadius: "5em" }}
            endAdornment={<LockIcon color="secondary" sx={{ ml: 1, mr: 1 }} />}
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
          <FormHelperText sx={{ color: "#000" }}>
            {errors.password?.message && errors.password.message}
          </FormHelperText>
        </FormControl>

        {!isPending && (
          <Stack alignItems={"center"}>
            <button
              className="learn-more"
              style={{ width: "80%", borderRadius: "5em" }}
            >
              <span>Iniciar sesión</span>
            </button>
          </Stack>
        )}
        {isPending && (
          <Stack justifyContent="center" alignItems="center">
            <CircularProgress color="primary" />
          </Stack>
        )}
      </Stack>
      <Stack
        textAlign={"right"}
        my={{ xs: 2, md: 0, lg: 2 }}
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack flexDirection={"row"}></Stack>
        <Stack mt={{ xs: "6vh", md: 0, lg: "5vh" }}>
          <RecoveryPassword />
        </Stack>
      </Stack>
    </>
  );
}
