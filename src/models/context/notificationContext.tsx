import React from "react";

type ContextProps = {
  getError: (message: string) => void;
  getWarning: (message: string) => void;
  getSuccess: (message: string) => void;
  severity: string;
  open: boolean;
  message: string;
};

const NotificationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("warning");

  const getError = (message: string) => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 6000);
    setSeverity("danger");
    setMessage(message);
  };

  const getSuccess = (message: string) => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 6000);
    setSeverity("success");
    setMessage(message);
  };

  const getWarning = (message: string) => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 6000);
    setSeverity("warning");
    setMessage(message);
  };

  const value = { getError, getSuccess, getWarning, severity, message, open };
  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
