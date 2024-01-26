import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

/* export const ROUTES_SUPERADMIN = [
  {
    type: 'button',
    title: 'Inicio',
    url: '/inicio',
    icon: HomeRoundedIcon,
  },
  {
    type: 'collapse',
    titleButton: 'Eventos',
    icon: AssignmentRoundedIcon,
    buttonMenu: [
      { title: 'Crear', url: '/crear' },
      { title: 'Listado', url: '/listado' },
    ],
  },
  {
    type: 'collapse',
    titleButton: 'Usuarios',
    icon: GroupRoundedIcon,
    buttonMenu: [
      { title: 'Invitados', url: '/invitados' },
      { title: 'Lista de invitados', url: '/lista-de-invitados' },
    ],
  },
  {
    type: 'button',
    title: 'Solicitudes',
    url: '/solicitudes',
    icon: DashboardRoundedIcon,
  },
  {
    type: 'button',
    title: 'Salas',
    url: '/salas',
    icon: CollectionsBookmarkRoundedIcon,
  },
]; */

export const ROUTES_ADMIN = [
  {
    type: "button",
    title: "Inicio",
    url: "/inicio",
    icon: HomeRoundedIcon,
  },
  {
    type: "button" /* va a ser un collapse */,
    title: "Atletas",
    url: "/atletas",
    icon: DirectionsRunIcon,
  },
  {
    type: "button" /* va a ser un collapse */,
    title: "Eventos",
    url: "/eventos",
    icon: CalendarMonthIcon,
  },
  /* {
    type: 'collapse',
    titleButton: 'Salas',
    icon: ChairIcon,
    buttonMenu: [
      { title: 'Crear Salas', url: '/salas' },
      { title: 'Tipos de Salas', url: '/tipos-salas' },
    ],
  }, */
];
