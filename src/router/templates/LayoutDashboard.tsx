import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { HeaderAndDrawer } from "../../shared/components/HeaderAndDrawer";
// import Footer from '../../shared/components/Footer';

export default function LayoutDashboard() {
  return (
    <HeaderAndDrawer>
      <>
        <Box
          sx={{
            background: "primary",
            minHeight: "calc(100vh - 150px)",
            paddingY: 2,
          }}
        >
          <Outlet />
        </Box>
        {/* <Footer /> */}
      </>
    </HeaderAndDrawer>
  );
}
