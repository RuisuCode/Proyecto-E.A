import { LazyExoticComponent, lazy } from "react";

const Inicio: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/inicio-admin")
);

export const adminRoutes = [
  {
    route: "/inicio",
    component: Inicio,
    title: "Inicio",
  },
];
