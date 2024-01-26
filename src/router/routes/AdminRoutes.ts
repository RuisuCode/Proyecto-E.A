import { LazyExoticComponent, lazy } from "react";

const Inicio: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/inicio-admin")
);
const Atletas: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/atletas")
);
const Eventos: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/eventos")
);

export const adminRoutes = [
  {
    route: "/inicio",
    component: Inicio,
    title: "Inicio",
  },
  {
    route: "/atletas",
    component: Atletas,
    title: "Atletas",
  },
  {
    route: "/eventos",
    component: Eventos,
    title: "Eventos",
  },
];
