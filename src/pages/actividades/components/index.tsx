import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

/* local */

/* icons */
import WarningIcon from "@mui/icons-material/Warning";
import PostAddIcon from "@mui/icons-material/PostAdd";

import HelpIcon from "@mui/icons-material/Help";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

export default function actividadId() {
  const navigate = useNavigate();

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
            <PostAddIcon sx={{ color: "#fff" }} fontSize="medium" />
            <Typography
              fontSize={{ lg: "0.9em", xs: "0.7em" }}
              fontWeight={"bold"}
              color="#fff"
            >
              <NavigateNextIcon />
            </Typography>
            <Typography
              fontSize={{ lg: "0.9em", xs: "0.7em" }}
              fontWeight={"bold"}
              letterSpacing={1.5}
              color="#fff"
              component={"div"}
              onClick={() => navigate(-1)}
              sx={{ cursor: "pointer" }}
            >
              {/* {location.pathname.split("/")[1]} */}
              Actividades
            </Typography>
            <Typography
              fontSize={{ lg: "0.9em", xs: "0.7em" }}
              fontWeight={"bold"}
              color="#fff"
            >
              <NavigateNextIcon />
            </Typography>
            <Typography
              fontSize={{ lg: "0.9em", xs: "0.7em" }}
              fontWeight={"bold"}
              letterSpacing={1.5}
              color="#fff"
            >
              ID Nombre
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
        <Stack width={"80%"} alignItems={"center"} height={"100%"}>
          <WarningIcon color="warning" sx={{ fontSize: "20em" }} />
          <Typography letterSpacing={4} fontWeight={"bold"}>
            Work in progress
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
