import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function Layout() {
  return (
    <div className="h-screen w-full flex overflow-hidden select-none">
      <Sidebar />
      <main
        className="py-6 px-10 flex-1 bg-gray-100 
		transition duration-500 ease-in-out overflow-y-auto"
      >
        <Outlet />
      </main>
    </div>
  );
}
