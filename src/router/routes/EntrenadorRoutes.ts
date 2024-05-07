import { LazyExoticComponent, lazy } from "react";

const Inicio: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/inicio-entrenador")
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
const configEntrenador: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/datos-entre")
);

const altletaId: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/atletaId/index")
);
const marcasAllId: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/marcasAllId/index")
);

export const entrenadorRoutes = [
  {
    route: "/inicio",
    component: Inicio,
    title: "Inicio",
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
