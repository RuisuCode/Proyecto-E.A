import { styled } from "@mui/material/styles";
import { Toolbar } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export const DRAWER_WIDTH = 260;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  background: theme.palette.primary.main,
  backdropFilter: "blur(2px)",
  boxShadow: "none",
}));

export const StyledToolbarHeader = styled(Toolbar)(({ theme }) => ({
  maxHeight: "64px",
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(0, 5),
  },
}));
