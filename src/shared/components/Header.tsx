import React, { useState } from "react";
import {
  StyledRootHeader,
  StyledToolbarHeader,
} from "../style-components/StyledHeader";
import {
  IconButton,
  Box,
  Stack,
  Menu,
  Typography,
  Divider,
} from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";
import { useDrawerStore } from "../../shared/store/DrawerStore";

// ICONS
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLogout } from "../../pages/login/hooks/useLogin";
// import { useUserInfoStore } from '../../shared/store/UserStore';

export default function Header() {
  const { width } = useScreenSize();
  const { handleDrawerState } = useDrawerStore();
  const logoutMutation = useLogout();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  //   const entity = useUserInfoStore((state) => state.entity);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOut = async () => {
    handleCloseUserMenu();
    logoutMutation();
    // await logoutMutation.mutateAsync();
  };

  return (
    <StyledRootHeader>
      <StyledToolbarHeader>
        <IconButton
          onClick={() => handleDrawerState()}
          sx={{
            mr: 1,
            color: "#fff",
            display: width >= 900 ? "none" : "block",
          }}
        >
          <MenuIcon />
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
                    SACE
                  </Typography>
                </Stack>
              </Stack>
              <Divider />

              {/* {entity != 999 && (
                <MenuItem onClick={() => (navigate('/perfil'), handleCloseUserMenu())} sx={{ width: '232px' }}>
                  <AccountCircleIcon color="secondary" sx={{ height: '25px', width: '25px', marginRight: 1 }} />
                  <Typography textAlign="center">Mi perfil</Typography>
                </MenuItem>
              )} */}

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
    </StyledRootHeader>
  );
}
