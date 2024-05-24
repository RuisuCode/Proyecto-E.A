import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { SubmitHandler, useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Loader from "../../../shared/components/Loader";
import "dayjs/locale/es";
import { IconButton } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import { GiPathDistance } from "react-icons/gi";
import TimerIcon from "@mui/icons-material/Timer";

import CloseIcon from "@mui/icons-material/Close";
import { IAtlets } from "../../agregar-atletas/interface/IAtlets";
import {
  useGetAtletaId,
  useTestCooperAtlets,
} from "../../../shared/hooks/useAtlets";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: { xs: "50%", md: "70vh" },
  bgcolor: "background.paper",
  border: "2px solid #EF7E6C",
  borderRadius: "13px",
  boxShadow: 24,
  overflowY: "scroll",
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalUpdateTestCooper({
  tcooper,
}: {
  tcooper: number;
}) {
  const { refetch } = useGetAtletaId();
  const { mutate, isPending } = useTestCooperAtlets();

  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IAtlets>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<IAtlets> = (data: IAtlets) =>
    registerMarca(data);
  useEffect(() => {
    if (tcooper) {
      setValue("test_cooper", tcooper);
    }
  }, [tcooper]);
  const registerMarca = (data: IAtlets) => {
    const sendData = {
      test_cooper: data?.test_cooper,
    };

    mutate(sendData, {
      onSuccess: () => {
        setOpen(false);
        reset();
        refetch();
      },
    });
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);

    reset();
  };

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
      <motion.div whileHover={{ scale: 1.1 }}>
        <Button
          startIcon={<TimerIcon />}
          variant="contained"
          sx={{
            borderRadius: "2rem",
            "&:hover": { background: "#E84730" },
            textTransform: "initial",
          }}
          onClick={handleOpen}
        >
          Actualizar Test de cooper
        </Button>
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
          <Box sx={{ ...style, width: { md: 500, xs: "100%" } }}>
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
                    color={"#EB5D47"}
                  >
                    Actualizar Test de Cooper
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
              >
                Colocar los datos de la marca realizada:
              </Typography>
              <FormControl
                sx={{
                  height: "90px",
                  px: 1,
                  width: { xs: "95%", md: "85%", lg: "75%" },
                }}
                variant="standard"
              >
                <FormLabel sx={{ fontWeight: "bold" }} required>
                  Test de Cooper(M)
                </FormLabel>
                <OutlinedInput
                  type="string"
                  error={errors.test_cooper && true}
                  defaultValue={tcooper}
                  startAdornment={
                    <InputAdornment position="start">
                      <GiPathDistance size={"25px"} />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <Typography fontWeight={"bold"}>M</Typography>
                    </InputAdornment>
                  }
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
                  {...register("test_cooper", {
                    pattern: {
                      value: /[0-9]+([,][0-9]+)?$/,
                      message: "El valor ingresado debe tener decimales",
                    },
                  })}
                />
                <FormHelperText sx={{ color: "#000" }}>
                  {errors.test_cooper?.message && errors.test_cooper.message}
                </FormHelperText>
              </FormControl>

              <Stack>
                {!isPending && (
                  <motion.div
                    whileHover={{
                      scale: watch("test_cooper") !== 0 ? 1.05 : 1,
                    }}
                  >
                    <Button
                      disabled={watch("test_cooper") !== 0 ? false : true}
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
                        Actualizar test de cooper
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
