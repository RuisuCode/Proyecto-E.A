import { styled } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";
export const DRAWER_WIDTH = 280;
export const StyledRootHeader = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.main,
  backdropFilter: "blur(2px)",
  boxShadow: "none",
  [theme.breakpoints.up(900)]: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
  },
}));

export const StyledToolbarHeader = styled(Toolbar)(({ theme }) => ({
  maxHeight: "64px",
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(0, 5),
  },
}));
