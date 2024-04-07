import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import {
  useDeleteMarcasAll,
  useGetMarcasAll,
} from "../../../shared/hooks/useMarcas";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #EF7E6C",
  borderRadius: "13px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalDelete({ data }: { data: any }) {
  const { refetch } = useGetMarcasAll();
  const [open, setOpen] = useState(false);
  const { mutate } = useDeleteMarcasAll();

  const deleteMarca = (data: any) => {
    mutate(data, {
      onSuccess: () => {
        setOpen(false);
        refetch();
      },
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const variants = {
    open: {
      clipPath: `circle(${500 * 2 + 200}px at 40px 40px)`,
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
      <Button
        startIcon={<DeleteOutlineRoundedIcon sx={{ fontSize: "28px" }} />}
        variant="text"
        color="error"
        fullWidth
        onClick={handleOpen}
      >
        <Typography textTransform={"capitalize"}>Eliminar</Typography>
      </Button>
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
            <Stack gap={2} alignItems={"center"} width={"100%"} height={"100%"}>
              <Typography
                variant="h5"
                component={"h2"}
                fontWeight={"bold"}
                id="parent-modal-title"
                color={"#EB5D47"}
              >
                Eliminar Marca
              </Typography>
              <Typography
                component={"h3"}
                color={"#b9b4b1"}
                variant="subtitle1"
              >
                ¿Estas seguro de eliminar esta marca?
              </Typography>
              <Stack direction={"row"} gap={2}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteMarca(data)}
                  sx={{
                    width: "auto",
                    borderRadius: "5em",
                    height: "35px",
                    boxShadow: 4,
                    px: 3,
                  }}
                >
                  <Typography textTransform={"capitalize"}>
                    Confirmar
                  </Typography>
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleClose}
                  color="error"
                  sx={{
                    width: "auto",
                    borderRadius: "5em",
                    height: "35px",
                    boxShadow: 4,
                    px: 3,
                  }}
                >
                  <Typography textTransform={"capitalize"}>Cancelar</Typography>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </motion.div>
      </Modal>
    </div>
  );
}
