import { lazy, LazyExoticComponent, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Head from "../shared/components/Head";
import { map } from "lodash";

import { ProtectedRoutes } from "./protected-routes";
import { UseAuthStore } from "../store/UserStore";
import LayoutDashboard from "./templates/LayoutDashboard";
import { entrenadorRoutes } from "./routes/EntrenadorRoutes";
import { atletaRoutes } from "./routes/AtletaRoutes";
import { adminRoutes } from "./routes/AdminRoutes";
import { IRoutes } from "../shared/interfaces/IRoutes";
import { useStore } from "zustand";
import { AnimatePresence } from "framer-motion";

const NotFound: LazyExoticComponent<React.FC> = lazy(
  () => import("../pages/not-found")
);
const Login: LazyExoticComponent<React.FC> = lazy(
  () => import("../pages/login")
);
export default function RouterApp(): JSX.Element {
  // Valor para mapear las rutas del sistema
  const authStore = useStore(UseAuthStore);
  const rol: any = authStore.rolId;

  const entity: number = rol;
  return (
    <AnimatePresence mode="wait">
      <Routes>
        {entity === 1 && (
          <Route element={<ProtectedRoutes />}>
            <Route element={<LayoutDashboard />}>
              {map(entrenadorRoutes, (route: IRoutes, index: number) => (
                <Route
                  key={index}
                  path={route.route}
                  element={
                    <Suspense>
                      <Head title={route.title} />
                      {<route.component />}
                    </Suspense>
                  }
                />
              ))}
            </Route>
          </Route>
        )}
        {entity === 2 && (
          <Route element={<ProtectedRoutes />}>
            <Route element={<LayoutDashboard />}>
              {map(atletaRoutes, (route: IRoutes, index: number) => (
                <Route
                  key={index}
                  path={route.route}
                  element={
                    <Suspense>
                      <Head title={route.title} />
                      {<route.component />}
                    </Suspense>
                  }
                />
              ))}
            </Route>
          </Route>
        )}
        {entity === 999 && (
          <Route element={<ProtectedRoutes />}>
            <Route element={<LayoutDashboard />}>
              {map(adminRoutes, (route: IRoutes, index: number) => (
                <Route
                  key={index}
                  path={route.route}
                  element={
                    <Suspense>
                      <Head title={route.title} />
                      {<route.component />}
                    </Suspense>
                  }
                />
              ))}
            </Route>
          </Route>
        )}
        <Route
          path="/"
          element={
            <Suspense>
              <Head title="Login" />
              <Login />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense>
              <Head title="Pagina no encontrada" />
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
