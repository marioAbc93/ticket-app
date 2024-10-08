import { Danger, Success, Warning } from "../assets/icons";
import { NotificationProps } from "../models/types";

export default function Notification({
  severity,
  message,
  open,
}: NotificationProps) {
  if (!open) {
    return null;
  }

  const getIcon = () => {
    switch (severity) {
      case "success":
        return <Success />;
      case "danger":
        return <Danger />;
      case "warning":
        return <Warning />;
      default:
        return null;
    }
  };

  const getBgColor = () => {
    switch (severity) {
      case "success":
        return "bg-green-100 dark:bg-green-800 text-green-500 dark:text-green-200";
      case "danger":
        return "bg-red-100 dark:bg-red-800 text-red-500 dark:text-red-200";
      case "warning":
        return "bg-orange-100 dark:bg-orange-700 text-orange-500 dark:text-orange-200";
      default:
        return "";
    }
  };

  return (
    <div
      className={`fixed top-4 right-4 items-center z-50 w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow ${getBgColor()}`}
      role="alert"
    >
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
          {getIcon()}
          <span className="sr-only">Notification icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">{message}</div>
      </div>
    </div>
  );
}
