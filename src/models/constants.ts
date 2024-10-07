import { Calendar, Dashboard, Ticket, Wallet } from "../assets/icons";
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
