import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Collapse,
  ListItemButton,
  IconButton,
  Divider,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useLocation, useNavigate } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { motion } from "framer-motion";
import LogoutIcon from "@mui/icons-material/Logout";
// Local
import useScreenSize from "../hooks/useScreenSize";
import { AppBar } from "../style-components/StyledHeader";
import Image from "../../shared/style-components/Image";

import { useDrawerStore } from "../../shared/store/DrawerStore";
import { theme } from "../style-components/theme/theme";
// import { useUserInfoStore } from "../../shared/store/UserStore";
import { ROUTES_ADMIN } from "../consts/ROUTES_NAVBAR";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
// import { useGetProfileData } from "../hooks/useProfile";

///Header//

import { StyledToolbarHeader } from "../style-components/StyledHeader";
import { Menu } from "@mui/material";

// ICONS
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import { useLogout } from "../../pages/login/hooks/useLogin";

export const DRAWER_SPAWN = 900;

export const DRAWER_WIDTH = 280;

interface Props {
  window?: () => Window;
  children: JSX.Element;
}
const DraweR = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginRight: "10px",
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export function HeaderAndDrawer(props: Props): JSX.Element {
  const { children } = props;
  const { width } = useScreenSize();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const logoutMutation = useLogout();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  //   const entity = useUserInfoStore((state) => state.entity);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [showComponent, setShowComponent] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const logOut = async () => {
    handleCloseUserMenu();
    // logoutMutation();
    await logoutMutation.mutateAsync();
  };
  const handleShowdrawer = () => {
    setShowComponent(!showComponent);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const { data } = useGetProfileData();
  const entity: number = 999;
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
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  const drawer = (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "64px",
          background: "transparent",
          color: "#fff",
          borderBottom: "2px solid #fff",
          borderRight: "2px solid #fff",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          letterSpacing={20}
        ></Typography>
      </Stack>
      <Box sx={{ marginX: 1, width: 200 }}>
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
                      location.pathname === item.url ? "#E84730" : "#fff",
                    color: location.pathname === item.url ? "#fff" : "#E84730",
                    cursor: "pointer",
                    paddingX: 2,
                    borderRadius: "6px",
                  }}
                >
                  <ListItemIcon>
                    <IconComponent
                      sx={{
                        fontSize: "25px",
                        color:
                          location.pathname === item.url ? "#fff" : "#E84730",
                      }}
                    />
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
                      mb: 1,
                      "&:hover": {
                        boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <IconComponent
                        sx={{ fontSize: "30px", color: "#E84730" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "#E84730" }}
                      primary={item.titleButton}
                    />
                    {open ? (
                      <ExpandLess sx={{ color: "#E84730", ml: 8 }} />
                    ) : (
                      <ExpandMore sx={{ color: "#E84730", ml: 8 }} />
                    )}
                  </ListItemButton>
                  <Collapse
                    in={open}
                    timeout="auto"
                    unmountOnExit
                    sx={{
                      borderRadius: "4px",
                    }}
                  >
                    <List component="div" disablePadding>
                      {item.buttonMenu.map((item: any) => {
                        const IconComponent2 = item.icon;

                        return (
                          <ListItem
                            key={item.title}
                            onClick={() => (navigate(item.url), handleDrawer())}
                            sx={{
                              background:
                                location.pathname === item.url
                                  ? "#E84730"
                                  : "#fff",
                              color:
                                location.pathname === item.url
                                  ? "#fff"
                                  : "#E84730",
                              cursor: "pointer",
                              paddingX: 2,
                              borderRadius: "6px",
                              "&:hover": {
                                boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                              },
                              paddingLeft: 5,
                            }}
                          >
                            <ListItemIcon>
                              <IconComponent2
                                sx={{
                                  fontSize: "30px",
                                  color:
                                    location.pathname === item.url
                                      ? "#fff"
                                      : "#E84730",
                                }}
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
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ display: { lg: "none", xs: "initial", md: "none", sm: "none" } }}
      >
        <StyledToolbarHeader>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleShowdrawer}
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" alignItems="center">
            <Stack>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon
                  sx={{ height: "40px", width: "40px", color: "#fff" }}
                />
              </IconButton>
              <Menu
                sx={{
                  mt: "45px",
                  "& .MuiMenu-list": {
                    padding: 0,
                  },
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={1}
                  sx={{ width: "232px", paddingLeft: 2, paddingY: 1 }}
                >
                  <Stack direction="row" alignItems="center" gap={1}>
                    <PersonIcon />
                    <Typography textAlign="start" fontWeight={700}>
                      Usuario
                    </Typography>
                  </Stack>
                </Stack>
                <Divider />

                <Stack
                  direction="row"
                  alignItems="center"
                  onClick={logOut}
                  gap={1}
                  sx={{
                    width: "232px",
                    background: "#505050",
                    color: "#fff",
                    paddingLeft: 2.5,
                    paddingY: 1,
                    cursor: "pointer",
                    "&:hover": {
                      background: "#404040",
                    },
                  }}
                >
                  <LogoutIcon />
                  <Typography textAlign="start" fontWeight={700}>
                    Cerrar sesión
                  </Typography>
                </Stack>
              </Menu>
            </Stack>
          </Stack>
        </StyledToolbarHeader>
      </AppBar>

      {/* drawer de mobil */}
      {showComponent && (
        <Box
          component="nav"
          sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="permanent"
            sx={{ display: { sm: "none", xs: "block" } }}
          >
            {drawer}
          </Drawer>
        </Box>
      )}
      <Box
        component="nav"
        sx={{
          flexShrink: { sm: 0 },
          display: { xs: "none", md: "initial", lg: "initial" },
          backgroundColor: "#f8e6d9",
        }}
      >
        {/* DRAWER ESCRITORIO */}
        <DraweR
          variant="permanent"
          open={open}
          PaperProps={{
            sx: {
              backgroundColor: "#fff",
              borderRadius: "1em",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              boxShadow:
                " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
            },
          }}
        >
          <DrawerHeader>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{
                ...(open && { display: "none" }),
              }}
            >
              <ChevronRightIcon sx={{ color: "#E84730" }} />
            </IconButton>
            {open && (
              <Stack height={120}>
                <Image />
              </Stack>
            )}
            <IconButton
              onClick={handleDrawerClose}
              sx={{ ...(!open && { display: "none" }) }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon sx={{ color: "#E84730" }} />
              ) : (
                <ChevronLeftIcon sx={{ color: "#E84730" }} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider sx={{ mt: 1 }} />
          <List>
            <Stack
              justifyContent="center"
              sx={{ height: "30px", paddingLeft: 2 }}
            />

            {routes.map((item, index) => {
              const [open1, setOpen1] = useState(false);

              const handleClick = () => {
                setOpen1(!open1);
              };
              if (item.type === "button") {
                const IconComponent = item.icon;
                return (
                  <motion.div key={index} whileHover={{ marginLeft: 10 }}>
                    <ListItem
                      key={item.title}
                      onClick={() => (navigate(item.url), handleDrawer())}
                      sx={{
                        background:
                          location.pathname === item.url ? "#E84730" : "#fff",
                        color:
                          location.pathname === item.url ? "#fff" : "#E84730",
                        cursor: "pointer",
                        paddingX: 2,
                        borderRadius: "4px",
                        mb: 1,
                        "&:hover": {
                          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                        },
                      }}
                    >
                      <ListItemIcon>
                        <IconComponent
                          sx={{
                            fontSize: "25px",
                            color:
                              location.pathname === item.url
                                ? "#fff"
                                : "#E84730",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  </motion.div>
                );
              }
              if (item.type === "collapse") {
                const IconComponent = item.icon;

                return (
                  <Stack key={index}>
                    <motion.div whileHover={{ marginLeft: 10 }}>
                      <ListItemButton
                        onClick={handleClick}
                        sx={{
                          cursor: "pointer",
                          paddingX: 2,
                          borderRadius: "4px",
                          mb: 1,
                          "&:hover": {
                            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                          },
                        }}
                      >
                        <ListItemIcon>
                          <IconComponent
                            sx={{ fontSize: "30px", color: "#E84730" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          sx={{ color: "#E84730" }}
                          primary={item.titleButton}
                        />
                        {open1 ? (
                          <ExpandLess sx={{ color: "#E84730", ml: 8 }} />
                        ) : (
                          <ExpandMore sx={{ color: "#E84730", ml: 8 }} />
                        )}
                      </ListItemButton>
                    </motion.div>

                    <Collapse
                      in={open1}
                      timeout="auto"
                      unmountOnExit
                      sx={{
                        borderRadius: "4px",
                        mb: 1,
                      }}
                    >
                      <List component="div" disablePadding>
                        {item.buttonMenu.map((item: any) => {
                          const IconComponent2 = item.icon;

                          return (
                            <motion.div
                              key={index}
                              whileHover={{ marginLeft: 10 }}
                            >
                              <ListItem
                                key={item.title}
                                onClick={() => (
                                  navigate(item.url), handleDrawer()
                                )}
                                sx={{
                                  background:
                                    location.pathname === item.url
                                      ? "#E84730"
                                      : "#fff",
                                  color:
                                    location.pathname === item.url
                                      ? "#fff"
                                      : "#E84730",
                                  cursor: "pointer",
                                  paddingX: 2,
                                  borderRadius: "6px",
                                  "&:hover": {
                                    boxShadow:
                                      " rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                                  },
                                }}
                              >
                                <ListItemIcon>
                                  <IconComponent2
                                    sx={{
                                      fontSize: "30px",
                                      color:
                                        location.pathname === item.url
                                          ? "#fff"
                                          : "#E84730",
                                    }}
                                  />
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                              </ListItem>
                            </motion.div>
                          );
                        })}
                      </List>
                    </Collapse>
                  </Stack>
                );
              }
            })}
          </List>
          <Stack height={"100%"} justifyContent={"flex-end"}>
            <Divider sx={{ color: "white" }} />
            <ListItem
              onClick={logOut}
              sx={{
                color: "#E84730",
                cursor: "pointer",
                paddingX: 2,

                "&:hover ": {
                  background: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ListItemIcon>
                <LogoutIcon sx={{ fontSize: "25px", color: "#E84730" }} />
              </ListItemIcon>
              <ListItemText primary={"Cerrar Sesión"} />
            </ListItem>
          </Stack>
        </DraweR>
      </Box>
      {/* CONTENIDO DE LA PAGINA */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px )`, lg: "100vw" },
          minHeight: "100vh",
          background: "#f8e6d9",
          overflowX: "hidden",
        }}
      >
        <Toolbar sx={{ display: { xs: "initial", lg: "none" } }} />
        {/* colocar lo del toolbar */}
        {children}
      </Box>
    </Box>
  );
}
