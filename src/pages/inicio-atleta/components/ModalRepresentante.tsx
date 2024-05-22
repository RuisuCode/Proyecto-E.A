import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import Person2Icon from "@mui/icons-material/Person2";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import "dayjs/locale/es";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: { xs: "auto", md: "70vh" },
  bgcolor: "background.paper",
  border: "2px solid #EF7E6C",
  borderRadius: "13px",
  boxShadow: 24,
  overflowY: "scroll",
  pt: 2,
  px: 4,
  pb: 3,
};
interface IRepre {
  nombre_repre: string;
  apellido_repre: string;
  cedula_repre: string;
  parentesco: string;
  email_repre: string;
  telefono_repre: number;
}

export default function ModalRepresentante({ repre }: { repre: IRepre }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
      <Tooltip placement="top" arrow title="Representante">
        <IconButton
          onClick={handleOpen}
          sx={{
            height: 50,
            width: 50,
            bgcolor: "#EF7E6C",
            borderRadius: "13px",
            display: repre === null ? "none" : "flex",
          }}
        >
          <EscalatorWarningIcon sx={{ color: "#fff", fontSize: 30 }} />
        </IconButton>
      </Tooltip>
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
                    Datos del representante
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
              <Stack
                direction={"column"}
                height={"auto"}
                width={{ xs: "80%", md: "auto" }}
                gap={1}
              >
                <Stack direction={{ md: "row", xs: "column" }} gap={1}>
                  <ListItem sx={{ bgcolor: "#E84730", borderRadius: "13px" }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "transparent", mb: "1px" }}>
                        <Person2Icon
                          sx={{ fontSize: "1.5em", color: "#fff" }}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Nombre y apellido"
                      primaryTypographyProps={{
                        color: "#fff",
                      }}
                      secondaryTypographyProps={{
                        color: "#f5f5f5",
                      }}
                      secondary={`${repre?.nombre_repre} ${repre?.apellido_repre}`}
                    />
                  </ListItem>
                  <ListItem sx={{ bgcolor: "#E84730", borderRadius: "13px" }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "transparent", mb: "1px" }}>
                        <BadgeIcon sx={{ fontSize: "1.5em", color: "#fff" }} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Cedula"
                      primaryTypographyProps={{
                        color: "#fff",
                      }}
                      secondaryTypographyProps={{
                        color: "#f5f5f5",
                      }}
                      secondary={repre?.cedula_repre}
                    />
                  </ListItem>
                </Stack>

                <Stack direction={{ md: "row", xs: "column" }} gap={1}>
                  <ListItem sx={{ bgcolor: "#E84730", borderRadius: "13px" }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "transparent", mb: "1px" }}>
                        <EmailIcon
                          sx={{ fontSize: "1.5em", color: "#fff" }}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Correo electrónico"
                      primaryTypographyProps={{
                        color: "#fff",
                      }}
                      secondaryTypographyProps={{
                        color: "#f5f5f5",
                      }}
                      secondary={repre?.email_repre}
                    />
                  </ListItem>
                  <ListItem sx={{ bgcolor: "#E84730", borderRadius: "13px" }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "transparent", mb: "1px" }}>
                        <EscalatorWarningIcon sx={{ fontSize: "1.5em", color: "#fff" }} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Parentesco"
                      primaryTypographyProps={{
                        color: "#fff",
                      }}
                      secondaryTypographyProps={{
                        color: "#f5f5f5",
                      }}
                      secondary={repre?.parentesco}
                    />
                  </ListItem>
                </Stack>
                <Stack direction={{ md: "row", xs: "column" }} width={'100%'} justifyContent={'center'}  gap={1}>
                <Stack width={{md:'60%',xs:'auto'}}>
                  <ListItem  sx={{ bgcolor: "#E84730", borderRadius: "13px"}}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "transparent", mb: "1px" }}>
                        <PhoneAndroidIcon
                          sx={{ fontSize: "1.5em", color: "#fff" }}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="teléfono"
                      primaryTypographyProps={{
                        color: "#fff",
                      }}
                      secondaryTypographyProps={{
                        color: "#f5f5f5",
                      }}
                      secondary={`0${repre?.telefono_repre}`}
                    />
                  </ListItem>
                </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </motion.div>
      </Modal>
    </div>
  );
}
