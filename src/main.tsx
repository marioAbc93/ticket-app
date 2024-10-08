import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NotificationProvider } from "./models/context/notificationContext.tsx";
import { ModalProvider } from "./models/context/modalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotificationProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </NotificationProvider>
  </StrictMode>
);
