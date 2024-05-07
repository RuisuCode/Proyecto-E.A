import { LazyExoticComponent, lazy } from "react";

const Inicio: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/inicio-admin")
);
const AtletasNivel: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/atletas-nivel")
);
const AtletasCtg: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/atletas-categoria")
);
const Eventos: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/eventos")
);

const agregarAtletas: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/agregar-atletas")
);
const agregarEvento: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/agregar-eventos")
);
const entrenadores: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/entrenadores")
);
const configEntrenador: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/datos-entre")
);
const aggEntrenador: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/agregar-entrenador")
);


const altletaId: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/atletaId/index")
);
const marcasAllId: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/marcasAllId/index")
);

export const adminRoutes = [
  {
    route: "/inicio",
    component: Inicio,
    title: "Inicio",
  },
  {
    route: "/entrenadores",
    component: entrenadores,
    title: "Listado de entrenadores",
  },
  {
    route: "/register-entrenador",
    component: aggEntrenador,
    title: "Registrar entrenador",
  },
  {
    route: "/atletas_nivel",
    component: AtletasNivel,
    title: "Atletas Por Nivel",
  },
  {
    route: "/atletas_ctg",
    component: AtletasCtg,
    title: "Atletas Por Categoría",
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
    route: "/entrenador/:id",
    component: configEntrenador,
    title: "Datos del Entrenador",
  },
  {
    route: "/marcas/:id/marcas_all",
    component: marcasAllId,
    title: "Listado de Marcas del Atleta",
  },
  {
    route: "/add-event",
    component: agregarEvento,
    title: "Agregar evento",
  },
  {
    route: "/atleta/:id",
    component: altletaId,
    title: "Estadísticas del Atleta",
  },
];
