import { Close, Danger, Success, Warning } from "../assets/icons";

type NotificationProps = {
  severity: string;
  message: string;
  open: boolean;
};

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
      className={`flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 ${getBgColor()}`}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
        {getIcon()}
        <span className="sr-only">Notification icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Close"
        onClick={() => {}}
      >
        <span className="sr-only">Close</span>
        <Close />
      </button>
    </div>
  );
}
