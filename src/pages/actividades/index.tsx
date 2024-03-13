import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";

/* local */
import img from "../../shared/assets/backgroundImg4.jpg";
/* icons */
import PostAddIcon from "@mui/icons-material/PostAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HelpIcon from "@mui/icons-material/Help";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Activities() {
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
            <AssignmentIcon sx={{ color: "#fff" }} fontSize="medium" />
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
              {/* {location.pathname.split("/")[1]} */}
              Actividades
            </Typography>
          </Badge>
          <Stack direction={"row"} gap={3} alignItems={"center"}>
            <Stack alignItems={"flex-end"}>
              <Badge
                sx={{
                  borderRadius: "10px",
                  background: "#E84730",

                  boxShadow: 4,
                  height: 40,
                  width: "auto",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  paddingInline: 2,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/create-activities")}
              >
                <PostAddIcon sx={{ color: "#fff" }} />
                <Typography color={"#fff"}>Crear Actividad </Typography>
              </Badge>
            </Stack>
            <Badge
              overlap="circular"
              sx={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "#E84730",
                height: "40px",
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
        </Stack>
        {/*  <Stack width={"80%"} alignItems={"center"} height={"100%"}>
          <WarningIcon color="warning" sx={{ fontSize: "20em" }} />
          <Typography letterSpacing={4} fontWeight={"bold"}>
            Work in progress
          </Typography>
        </Stack> */}

        <Stack>
          <Grid
            container
            direction={{ md: "row", xs: "column" }}
            spacing={4}
            gap={4}
          >
            <Grid>
              <Stack
                bgcolor={"transparent"}
                borderRadius={"4px"}
                // boxShadow={2}
                sx={{ maxWidth: 280, height: "auto" }}
                // overflow={"hidden"}
              >
                <motion.div
                  whileHover={{
                    transform: "translateY(-15px)",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  style={{
                    overflowY: "hidden",
                    height: 430,
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                    borderTopRightRadius: "1em",
                    borderTopLeftRadius: "1em",
                    borderBottomRightRadius: "1em",
                    borderBottomLeftRadius: "1em",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/actividad:id")}
                >
                  <CardMedia
                    sx={{
                      height: 280,
                      zIndex: 100,
                      // position: "relative",
                      borderTopRightRadius: "1em",
                      borderTopLeftRadius: "1em",
                      // transform: "translateY(50px)",
                      boxShadow: 10,
                    }}
                    image={img}
                  />
                  <Box
                    sx={{
                      // borderRadius: "1em",
                      height: 300,
                      zIndex: 3000,
                      // position: "relative",
                      transform: "translateY(-70px)",
                      borderTopRightRadius: "5em",
                      borderTopLeftRadius: "5em",
                      borderBottomRightRadius: "1em",
                      borderBottomLeftRadius: "1em",
                      boxShadow: 5,
                      pt: 2,
                      bgcolor: "#fff",
                      // border: "solid",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      // borderRadius={"50%"}
                      component="div"
                      align="center"
                    >
                      Actividad 1
                    </Typography>
                    <Typography
                      variant="body2"
                      display={"flex"}
                      alignItems={"center"}
                      // justifyContent={"center"}
                      align="center"
                      color="text.secondary"
                      px={2}
                      textAlign={"justify"}
                      height={"50%"}
                    >
                      Actividad 1s are a widespread group of squamate reptiles,
                      with over 6,000 species, ranging across all continents
                      except Antarctica
                    </Typography>
                  </Box>
                </motion.div>
              </Stack>
            </Grid>
            <Grid>
              <Stack
                bgcolor={"transparent"}
                borderRadius={"4px"}
                // boxShadow={2}
                sx={{ maxWidth: 280, height: "auto" }}
                // overflow={"hidden"}
              >
                <motion.div
                  whileHover={{
                    transform: "translateY(-15px)",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  style={{
                    overflowY: "hidden",
                    height: 430,
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                    borderTopRightRadius: "1em",
                    borderTopLeftRadius: "1em",
                    borderBottomRightRadius: "1em",
                    borderBottomLeftRadius: "1em",
                    cursor: "pointer",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 280,
                      zIndex: 100,
                      // position: "relative",
                      borderTopRightRadius: "1em",
                      borderTopLeftRadius: "1em",
                      // transform: "translateY(50px)",
                      boxShadow: 10,
                    }}
                    image={img}
                  />
                  <Box
                    sx={{
                      // borderRadius: "1em",
                      height: 300,
                      zIndex: 3000,
                      // position: "relative",
                      transform: "translateY(-70px)",
                      borderTopRightRadius: "5em",
                      borderTopLeftRadius: "5em",
                      borderBottomRightRadius: "1em",
                      borderBottomLeftRadius: "1em",
                      pt: 2,
                      boxShadow: 5,
                      bgcolor: "#fff",
                      // border: "solid",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      // borderRadius={"50%"}

                      align="center"
                    >
                      Actividad 2
                    </Typography>
                    <Typography
                      variant="body2"
                      display={"flex"}
                      alignItems={"center"}
                      // justifyContent={"center"}
                      align="center"
                      px={2}
                      textAlign={"justify"}
                      color="text.secondary"
                      height={"50%"}
                    >
                      Actividad 1s are a widespread group of squamate reptiles,
                      with over 6,000 species, ranging across all continents
                      except Antarctica
                    </Typography>
                  </Box>
                </motion.div>
              </Stack>
            </Grid>
            <Grid>
              <Stack
                bgcolor={"transparent"}
                borderRadius={"4px"}
                // boxShadow={2}
                sx={{ maxWidth: 280, height: "auto" }}
                // overflow={"hidden"}
              >
                <motion.div
                  whileHover={{
                    transform: "translateY(-15px)",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  style={{
                    overflowY: "hidden",
                    height: 430,
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                    borderTopRightRadius: "1em",
                    borderTopLeftRadius: "1em",
                    borderBottomRightRadius: "1em",
                    borderBottomLeftRadius: "1em",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 280,
                      zIndex: 100,
                      // position: "relative",
                      borderTopRightRadius: "1em",
                      borderTopLeftRadius: "1em",
                      // transform: "translateY(50px)",
                      boxShadow: 10,
                    }}
                    image={img}
                  />
                  <Box
                    sx={{
                      // borderRadius: "1em",
                      height: 300,
                      zIndex: 3000,
                      // position: "relative",
                      transform: "translateY(-70px)",
                      borderTopRightRadius: "5em",
                      borderTopLeftRadius: "5em",
                      borderBottomRightRadius: "1em",
                      borderBottomLeftRadius: "1em",
                      boxShadow: 5,
                      pt: 2,
                      bgcolor: "#fff",
                      // border: "solid",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      // borderRadius={"50%"}
                      component="div"
                      align="center"
                    >
                      Actividad 3
                    </Typography>
                    <Typography
                      variant="body2"
                      display={"flex"}
                      alignItems={"center"}
                      // justifyContent={"center"}s
                      align="center"
                      color="text.secondary"
                      px={2}
                      textAlign={"justify"}
                      height={"50%"}
                    >
                      Actividad 1s are a widespread group of squamate reptiles,
                      with over 6,000 species, ranging across all continents
                      except Antarctica
                    </Typography>
                  </Box>
                </motion.div>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </>
  );
}
