import { Route, Routes } from "react-router-dom";
import { SidebarRoutes } from "./models/constants";
import Login from "./views/login";
import Landing from "./views";
import Layout from "./components/layout"; // Importamos el Layout

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rutas públicas sin Layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing />} />

      {/* Rutas privadas dentro del Layout */}
      <Route element={<Layout children={undefined} />}>
        {SidebarRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Route>
    </Routes>
  );
}
