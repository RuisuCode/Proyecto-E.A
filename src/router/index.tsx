import { lazy, LazyExoticComponent, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Head from "../shared/components/Head";
import { map } from "lodash";

import { ProtectedRoutes } from "./protected-routes";
import { useUserInfoStore } from "../shared/store/UserStore";
import LayoutDashboard from "./templates/LayoutDashboard";
import { adminRoutes } from "./routes/AdminRoutes";
import { IRoutes } from "../shared/interfaces/IRoutes";

const NotFound: LazyExoticComponent<React.FC> = lazy(
  () => import("../pages/not-found")
);
const Login: LazyExoticComponent<React.FC> = lazy(
  () => import("../pages/login")
);
export default function RouterApp(): JSX.Element {
  // Valor para mapear las rutas del sistema
  const entity: number = useUserInfoStore((state) => state.entity);

  return (
    <Routes>
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
    </Routes>
  );
}
