import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ILogin } from "../interfaces/iLogin";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import BadgeIcon from "@mui/icons-material/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";

import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Stack,
  OutlinedInput,
} from "@mui/material";
import RecoveryPassword from "./RecoveryPassword";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<ILogin> = (data) => Entrar(data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Entrar = (data: ILogin) => {
    if (data.ci === "10000000" && data.password === "admin") {
      Navigate("/inicio");
      toast.success("Logueo Exitoso!");
    } else {
      toast.error("Datos No registrados");
    }
  };

  return (
    <>
      <Stack gap={2} onSubmit={handleSubmit(onSubmit)} component="form">
        <FormControl>
          <FormLabel sx={{ fontSize: "18px", textAlign: "center" }}>
            Cedula
          </FormLabel>
          <OutlinedInput
            sx={{ height: "45px", boxShadow: 1 }}
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
          <FormLabel sx={{ fontSize: "18px", textAlign: "center" }}>
            Contraseña
          </FormLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            error={errors.password && true}
            sx={{ height: "45px", boxShadow: 1 }}
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
            height: "45px",
            borderRadius: "6px",
            fontSize: "20px",
            boxShadow: 5,
          }}
        >
          Iniciar sesión
        </Button>
        {/* colocar loading de carga */}
      </Stack>
      <Stack
        textAlign={"right"}
        my={2}
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack flexDirection={"row"}>
          <NavLink
            target="_blank"
            style={{ textDecoration: "none" }}
            to={"https://www.instagram.com/indem_oficial/"}
          >
            <FontAwesomeIcon
              style={{ marginRight: "40px" }}
              color="#E84730"
              size="xl"
              icon={faInstagram}
            />
          </NavLink>
          <NavLink
            target="_blank"
            to={"https://www.facebook.com/Asoatlemo/?locale=es_LA"}
          >
            <FontAwesomeIcon
              style={{ marginRight: "5px" }}
              color="#E84730"
              size="xl"
              icon={faFacebook}
            />
          </NavLink>
        </Stack>
        <Stack>
          <RecoveryPassword />
        </Stack>
      </Stack>
    </>
  );
}
