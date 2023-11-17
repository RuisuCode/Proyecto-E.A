import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  List,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Collapse,
  ListItemButton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

// Local
// import { DRAWER_SPAWN, DRAWER_WIDTH } from '../consts/DRAWER_SIZES';
import useScreenSize from "../hooks/useScreenSize";
import { useDrawerStore } from "../../shared/store/DrawerStore";
import { theme } from "../style-components/theme/theme";
import Header from "./Header";
import { useUserInfoStore } from "../../shared/store/UserStore";
import { ROUTES_ADMIN } from "../consts/ROUTES_NAVBAR";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
// import { useGetProfileData } from "../hooks/useProfile";
export const DRAWER_SPAWN = 900;

export const DRAWER_WIDTH = 280;

interface Props {
  window?: () => Window;
  children: JSX.Element;
}

export function HeaderAndDrawer(props: Props): JSX.Element {
  const { children } = props;
  const { width } = useScreenSize();
  const navigate = useNavigate();
  const location = useLocation();

  // const { data } = useGetProfileData();
  const drawerState = useDrawerStore((state) => state.drawerState);
  const entity = useUserInfoStore((state) => state.entity);
  const { handleDrawerState } = useDrawerStore();

  let routes: any[];

  if (entity === 999) {
    routes = ROUTES_ADMIN;
  } else {
    routes = [];
  }

  const handleDrawer = () => {
    if (width < DRAWER_SPAWN) {
      handleDrawerState();
    }
  };

  const drawer = (
    // Drawer Buttons
    <div>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "64px",
          background: theme.palette.primary.main,
          color: "#fff",
          borderBottom: "2px solid #fff",
          borderRight: "2px solid #fff",
        }}
      >
        <Typography variant="h5" fontWeight={700} letterSpacing={20}>
          Logo
        </Typography>
      </Stack>
      <Box sx={{ marginX: 1 }}>
        <List
          sx={{
            paddingTop: 0,
            ".MuiListItemIcon-root": {
              minWidth: "35px",
            },
            ".MuiListItem-root": {
              height: "40px",
              marginY: "5px",
            },
          }}
        >
          <Stack
            justifyContent="center"
            sx={{ height: "30px", paddingLeft: 2 }}
          />

          {routes.map((item, index) => {
            const [open, setOpen] = useState(false);

            const handleClick = () => {
              setOpen(!open);
            };

            if (item.type === "button") {
              const IconComponent = item.icon;
              return (
                <ListItem
                  key={item.title}
                  onClick={() => (navigate(item.url), handleDrawer())}
                  sx={{
                    background:
                      location.pathname === item.url
                        ? theme.palette.primary.light
                        : theme.palette.primary.main,
                    color: "#fff",
                    cursor: "pointer",
                    paddingX: 2,
                    borderRadius: "6px",
                    "&:hover ": {
                      background: theme.palette.primary.light,
                    },
                  }}
                >
                  <ListItemIcon>
                    <IconComponent sx={{ fontSize: "25px", color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              );
            }
            if (item.type === "collapse") {
              const IconComponent = item.icon;
              return (
                <Stack key={index}>
                  <ListItemButton
                    onClick={handleClick}
                    sx={{
                      cursor: "pointer",
                      paddingX: 2,
                      borderRadius: "6px",
                      "&:hover ": {
                        background:
                          location.pathname === item.url
                            ? theme.palette.primary.main
                            : theme.palette.primary.light,
                      },
                    }}
                  >
                    <ListItemIcon>
                      <IconComponent sx={{ fontSize: "30px", color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "#fff" }}
                      primary={item.titleButton}
                    />
                    {open ? (
                      <ExpandLess sx={{ color: "#fff" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#fff" }} />
                    )}
                  </ListItemButton>
                  <Collapse
                    in={open}
                    timeout="auto"
                    unmountOnExit
                    sx={{ background: theme.palette.primary.main }}
                  >
                    <List component="div" disablePadding>
                      {item.buttonMenu.map((item: any) => {
                        const IconComponent = item.icon;
                        return (
                          <ListItem
                            key={item.title}
                            onClick={() => (navigate(item.url), handleDrawer())}
                            sx={{
                              background:
                                location.pathname === item.url
                                  ? theme.palette.primary.light
                                  : theme.palette.primary.main,
                              color:
                                location.pathname === item.url
                                  ? "#fff"
                                  : "#fff",
                              cursor: "pointer",
                              paddingX: 2,
                              borderRadius: "6px",
                              "&:hover ": {
                                background: theme.palette.primary.light,
                              },
                              paddingLeft: 5,
                            }}
                          >
                            <ListItemIcon>
                              <IconComponent
                                sx={{ fontSize: "30px", color: "#fff" }}
                              />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                </Stack>
              );
            }
          })}
        </List>
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: `${DRAWER_WIDTH}px)`,
          background: "#D6D6D6",
          color: "#404040",
        }}
      >
        <Header />
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: width < DRAWER_SPAWN ? 0 : DRAWER_WIDTH,
          flexShrink: { sm: 0 },
        }}
      >
        {/* DRAWER ESCRITORIO */}
        <Drawer
          variant={width < DRAWER_SPAWN ? "temporary" : "persistent"}
          open={width < DRAWER_SPAWN ? drawerState : true}
          onClose={handleDrawer}
          sx={{
            display: width < DRAWER_SPAWN ? "flex" : "flex",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
              maxHeight: "100%",
              border: "none",
              background: theme.palette.primary.main,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* CONTENIDO DE LA PAGINA */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px )` },
          minHeight: "100vh",
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}
