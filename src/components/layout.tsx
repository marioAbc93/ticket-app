import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { useNotification } from "../models/context/useNotification";
import Notification from "./notification";
export default function Layout() {
  const { message, severity, open } = useNotification();
  return (
    <>
      <div className="h-screen w-full flex overflow-hidden select-none">
        <Sidebar />
        <main
          className="py-6 px-10 flex-1 bg-gray-100 
		transition duration-500 ease-in-out overflow-y-auto"
        >
          <Outlet />
        </main>
      </div>
      <Notification
        severity={severity}
        message={message}
        open={open}
        data-testid="notification-container"
      />
    </>
  );
}
