import {
  getActionButtonBackground,
  getActionButtonIcon,
} from "../models/constants";
import { ActionButtonTableProps } from "../models/types";

export default function ActionTableButton({
  type,
  action,
}: ActionButtonTableProps) {
  const Icon = getActionButtonIcon(type);
  const bg = getActionButtonBackground(type);
  return (
    <button
      className={` text-white rounded-lg ${bg} p-2 mx-1 active:scale-95`}
      onClick={action}
    >
      <Icon />
    </button>
  );
}
