import { LazyExoticComponent, lazy } from "react";

const Inicio: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/inicio-atleta")
);

export const atletaRoutes = [
  {
    route: "/inicio",
    component: Inicio,
    title: "Inicio",
  },
];
