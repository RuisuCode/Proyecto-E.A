import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom/client";
import "./shared/styles/index.css";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./router/index.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//local files
import { QUERY_CLIENT } from "./shared/consts/QUERY_CLIENT";
import { theme } from "./shared/style-components/theme/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={QUERY_CLIENT}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterApp />
        <ToastContainer />
      </ThemeProvider>
      {import.meta.env.MODE !== "production" && (
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-right"
        />
      )}
    </QueryClientProvider>
  </BrowserRouter>
);
