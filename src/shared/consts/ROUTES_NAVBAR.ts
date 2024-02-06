import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventIcon from "@mui/icons-material/Event";

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
    type: "collapse",
    titleButton: "Atletas",
    icon: DirectionsRunIcon,
    buttonMenu: [
      { icon: RecentActorsIcon, title: "Listado de atletas", url: "/atletas" },
      {
        icon: PersonAddAlt1Icon,
        title: "Agregar Atletas",
        url: "/agregar-atletas",
      },
    ],
  },
  {
    type: "button",
    title: "Actividades",
    url: "/activities",
    icon: AssignmentIcon,
  },
  {
    type: "collapse" /* va a ser un collapse */,
    titleButton: "Eventos",
    icon: EventNoteIcon,
    buttonMenu: [
      { icon: CalendarMonthIcon, title: "Listado de eventos", url: "/eventos" },
      { icon: EventIcon, title: "Agregar evento", url: "/add-event" },
    ],
  },
  {
    type: "button",
    title: "Configuración del Entrenador",
    url: "/config-user",
    icon: ManageAccountsIcon,
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
