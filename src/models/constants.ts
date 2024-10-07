import {
  Calendar,
  Dashboard,
  Delete,
  Eye,
  Ticket,
  Update,
  Wallet,
} from "../assets/icons";
import Inicio from "../views/home";
import Vender from "../views/sell";
import Eventos from "../views/events";
import Tickets from "../views/tickets";

export const SidebarRoutes = [
  { name: "Inicio", icon: Dashboard, path: "/inicio", component: Inicio },
  { name: "Vender", icon: Wallet, path: "/vender", component: Vender },
  { name: "Eventos", icon: Calendar, path: "/eventos", component: Eventos },
  { name: "Tickets", icon: Ticket, path: "/tickets", component: Tickets },
];

export const getActionButtonIcon = (type: string) => {
  switch (type) {
    case "view":
      return Eye;
    case "update":
      return Update;
    case "delete":
      return Delete;
    default:
      return Eye;
  }
};

export const getActionButtonBackground = (type: string) => {
  switch (type) {
    case "view":
      return "bg-blue-600";
    case "update":
      return "bg-yellow-600";
    case "delete":
      return "bg-red-600";
    default:
      return "bg-blue-600";
  }
};
