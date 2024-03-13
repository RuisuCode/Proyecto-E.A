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
const Actividades: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/actividades")
);
const create_Actividades: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/crear-actividad")
);
const agregarAtletas: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/agregar-atletas")
);
const agregarEvento: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/agregar-eventos")
);
const configEntrenador: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/configuracion-entrenador")
);
const editConfigEntrenador: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/editar-config-entrenador")
);
const actividadId: LazyExoticComponent<React.FC> = lazy(
  () => import("../../pages/actividades/components/index")
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
    title: "Configurar Entrenador",
  },
  {
    route: "/edit-config-user",
    component: editConfigEntrenador,
    title: "Editar Entrenador",
  },
  {
    route: "/activities",
    component: Actividades,
    title: "Actividades",
  },
  {
    route: "/create-activities",
    component: create_Actividades,
    title: "Crear Actividad",
  },
  {
    route: "/add-event",
    component: agregarEvento,
    title: "Agregar evento",
  },
  {
    route: "/actividad:id",
    component: actividadId,
    title: "Actividad",
  },
];
