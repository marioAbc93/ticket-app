import { useContext } from "react";

import NotificationContext from "./notificationContext";

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("No existe el contexto");
  return context;
};
