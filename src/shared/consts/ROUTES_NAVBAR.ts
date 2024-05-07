import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import EventIcon from "@mui/icons-material/Event";
import LanIcon from "@mui/icons-material/Lan";
import AlignVerticalBottomOutlinedIcon from "@mui/icons-material/AlignVerticalBottomOutlined";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export const ROUTES_ADMIN = [
  {
    type: "button",
    title: "Inicio",
    url: "/inicio",
    icon: HomeRoundedIcon,
  },
  {
    type: "collapse",
    titleButton: "Entrenadores",
    icon: AssignmentIndIcon,
    buttonMenu: [
      {
        icon: RecentActorsIcon,
        title: "Listado",
        url: "/entrenadores",
      },
      {
        icon: PersonAddIcon,
        title: "Registrar",
        url: "/register-entrenador",
      },
    ],
  },
  {
    type: "collapse",
    titleButton: "Atletas",
    icon: DirectionsRunIcon,
    buttonMenu: [
      {
        icon: AlignVerticalBottomOutlinedIcon,
        title: "Por Nivel",
        url: "/atletas_nivel",
      },
      {
        icon: LanIcon,
        title: "Por Categoría",
        url: "/atletas_ctg",
      },
      {
        icon: PersonAddAlt1Icon,
        title: "Agregar Atleta",
        url: "/agregar-atletas",
      },
    ],
  },

  {
    type: "collapse",
    titleButton: "Eventos",
    icon: EventNoteIcon,
    buttonMenu: [
      { icon: CalendarMonthIcon, title: "Listado de eventos", url: "/eventos" },
      { icon: EventIcon, title: "Agregar evento", url: "/add-event" },
    ],
  },
];
export const ROUTES_ENTRE = [
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
      {
        icon: AlignVerticalBottomOutlinedIcon,
        title: "Por Nivel",
        url: "/atletas_nivel",
      },
      {
        icon: LanIcon,
        title: "Por Categoría",
        url: "/atletas_ctg",
      },
      {
        icon: PersonAddAlt1Icon,
        title: "Agregar",
        url: "/agregar-atletas",
      },
    ],
  },

  {
    type: "collapse",
    titleButton: "Eventos",
    icon: EventNoteIcon,
    buttonMenu: [
      { icon: CalendarMonthIcon, title: "Listado ", url: "/eventos" },
      { icon: EventIcon, title: "Agregar ", url: "/add-event" },
    ],
  },
];
export const ROUTES_ATLETA = [
  {
    type: "button",
    title: "Inicio",
    url: "/inicio",
    icon: HomeRoundedIcon,
  },
];
