import { ArrowLeft } from "../assets/icons";
import Logo from "../assets/logo.png";
import { SidebarRoutes } from "../models/constants";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="w-24 flex flex-col items-center bg-white py-4">
      <div>
        <img src={Logo} className="h-8 w-8" alt="App logo" />
      </div>
      <ul className="mt-2 text-gray-700 capitalize">
        {SidebarRoutes.map((route, index) => (
          <li className="mt-3 p-2 text-sm  rounded-lg" key={index}>
            <NavLink
              to={route.path}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 flex flex-col items-center active:scale-95"
                  : "flex flex-col items-center active:scale-95"
              }
            >
              {route.icon()}
              <span>{route.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center lg:hidden p-2 text-blue-700 bg-purple-200 active:scale-95 rounded-full">
        <button className="bg-transparent border-none">
          <ArrowLeft />
        </button>
      </div>
    </nav>
  );
}
