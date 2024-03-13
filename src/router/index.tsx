import { lazy, LazyExoticComponent, Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import Head from "../shared/components/Head";
import { map } from "lodash";

import { ProtectedRoutes } from "./protected-routes";
import { UseAuthStore } from "../store/UserStore";
import LayoutDashboard from "./templates/LayoutDashboard";
import { adminRoutes } from "./routes/AdminRoutes";
import { IRoutes } from "../shared/interfaces/IRoutes";
import { useStore } from "zustand";

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

  const entity: number = rol; /* useUserInfoStore((state) => state.entity) */

  /* if (!entity) {
    useEffect(() => {
      window.location.reload();
    }, []);
  } */
  /*  useEffect(() => {
    if (!entity) {
      window.location.reload();
    }
  }, []); */

  return (
    <Routes>
      {entity === 1 && (
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
  );
}
