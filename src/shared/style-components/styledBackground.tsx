import { Box, styled } from "@mui/material";
import backgroundImg from "../../shared/assets/background3.jpg";

export const StyledBackground = styled(Box)({
  background: `url(${backgroundImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: 0,
  padding: 0,
});
