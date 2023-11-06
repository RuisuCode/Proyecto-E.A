import {
  Link,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRecovery } from "../interfaces/iLogin";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Modal from "@mui/material/Modal";
//   import { useChangePassword, useRecoveryPassword } from '../hooks/useRecovery';

export default function RecoveryPassword() {
  const [open, setOpen] = useState(false);
  //   const [recoveryStep, setRecoveryStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const style = {
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", lg: 400 },
    bgcolor: "background.paper",
    border: "2px solid #E84730",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
  };

  // const { mutate: mutateRecoveryPasssword } = useRecoveryPassword();
  // const { mutate: mutateChangePassword } = useChangePassword();

  const handleModal = () => {
    setOpen(!open);
    reset();
  };
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IRecovery>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<IRecovery> = (data) => console.log(data);

  /*   const recovery = (data: IRecovery) => {
    if (recoveryStep === 0) {
      mutateRecoveryPasssword(data, {
        onSuccess: () => {
          setRecoveryStep(1);
        },
      });
    }
    if (recoveryStep === 1) {
      mutateChangePassword(data, {
        onSuccess: () => {
          handleModal();
        },
      });
    }
  }; */

  return (
    <>
      <Link
        sx={{ textDecoration: "none", cursor: "pointer" }}
        onClick={() => handleModal()}
      >
        ¿Olvidaste tu contraseña?
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography textAlign={"center"} mb={2} variant="h5">
            Recuperar Contraseña
          </Typography>
          <Stack spacing={2} onSubmit={handleSubmit(onSubmit)} component="form">
            <FormControl>
              <FormLabel>Cedula</FormLabel>
              <Input
                type="string"
                error={errors.ci && true}
                placeholder="Colocar su Cedula"
                {...register("ci", {
                  required: {
                    value: true,
                    message: "Este campo es requerido.",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/,
                    message: "La cedula no tiene un formato válido.",
                  },
                })}
              />
            </FormControl>
            <FormHelperText sx={{ color: "#f00" }}>
              {errors.ci?.message && errors.ci.message}
            </FormHelperText>
            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Colocar su Contraseña"
                startAdornment={
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                }
                error={errors.password && true}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Este campo es requerido.",
                  },
                  minLength: {
                    value: 6,
                    message: `La contraseña debe tener minimo 6 caracteres`,
                  },
                })}
              />
            </FormControl>
            <FormHelperText sx={{ color: "#f00" }}>
              {errors.password?.message && errors.password.message}
            </FormHelperText>

            <FormControl>
              <FormLabel>Confirmar Contraseña</FormLabel>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Colocar su Contraseña Nuevamente"
                startAdornment={
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                }
                error={errors.confirmPassword && true}
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Este campo es requerido.",
                  },
                  validate: (value) =>
                    value === watch(`password`) || "Los campos no coinciden",
                })}
              />
            </FormControl>
            <FormHelperText sx={{ color: "#f00" }}>
              {errors.confirmPassword?.message &&
                errors.confirmPassword.message}
            </FormHelperText>
            <Button variant="outlined" type="submit">
              Enviar
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
