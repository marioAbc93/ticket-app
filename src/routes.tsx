import { Route, Routes } from "react-router-dom";
import { SidebarRoutes } from "./models/constants";

export default function AppRoutes() {
  return (
    <Routes>
      {SidebarRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}
