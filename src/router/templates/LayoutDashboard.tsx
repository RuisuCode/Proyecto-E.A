import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { HeaderAndDrawer } from "../../shared/components/HeaderAndDrawer";
import Footer from "../../shared/components/Footer";

export default function LayoutDashboard() {
  return (
    <HeaderAndDrawer>
      <>
        <Box
          sx={{
            backgroundColor: "#f8e6d9",
            minHeight: { xs: "calc(100vh - 110px)", md: "calc(100vh - 110px)" },

            // paddingY: 1,
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </>
    </HeaderAndDrawer>
  );
}
