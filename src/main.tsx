import ReactDOM from "react-dom/client";
import "./shared/styles/index.css";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./router/index.tsx";
import { theme } from "./shared/style-components/theme/theme.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterApp />
      <ToastContainer />
    </ThemeProvider>
  </BrowserRouter>
);
