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
const agregarAtletas: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/agregar-atletas")
);
const configEntrenador: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/configuracion-entrenador")
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
  {
    route: "/agregar-atletas",
    component: agregarAtletas,
    title: "Agregar Atletas",
  },
  {
    route: "/config-user",
    component: configEntrenador,
    title: "Agregar Atletas",
  },
];
