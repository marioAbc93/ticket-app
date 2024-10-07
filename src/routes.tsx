import { Route, Routes } from "react-router-dom";
import { SidebarRoutes } from "./models/constants";
import Login from "./views/login";
import Landing from "./views";

export default function AppRoutes() {
  return (
    <Routes>
      {SidebarRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}

      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}
