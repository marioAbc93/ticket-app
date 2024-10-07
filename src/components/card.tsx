import { CardProps } from "../models/types";
import { Link } from "react-router-dom";

export default function Card({
  background,
  title,
  data,
  path,
  border,
}: CardProps) {
  return (
    <div
      className={`bg-${background}-500 p-4 flex flex-col gap-6 min-w-40 ${
        border ? "border border-blue-600 text-blue-600" : "text-white"
      } rounded-lg shadow-lg`}
    >
      <h2>{title}</h2>
      <div className="flex justify-between items-center">
        <span>{data}</span>
        <Link to={path}>Ver más</Link>
      </div>
    </div>
  );
}
