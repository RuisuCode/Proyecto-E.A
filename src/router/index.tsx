import { lazy, LazyExoticComponent, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Head from "../shared/components/Head";

const NotFound: LazyExoticComponent<React.FC> = lazy(
  () => import("../pages/not-found")
);
const Login: LazyExoticComponent<React.FC> = lazy(
  () => import("../pages/login")
);

export default function RouterApp(): JSX.Element {
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
    </Routes>
  );
}
