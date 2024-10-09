import { Route, Routes } from "react-router-dom";
import { SidebarRoutes } from "./models/constants";
import Login from "./views/login";
import Landing from "./views";
import Ticket from "./views/ticket";
import Layout from "./components/layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing />} />
      <Route path="/evento/:event_id/ticket/:id" element={<Ticket />} />

      <Route element={<Layout />}>
        {SidebarRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Route>
    </Routes>
  );
}
