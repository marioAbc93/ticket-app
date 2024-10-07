import { ViewTitleProps } from "../models/types";

export default function ViewTitle({ title }: ViewTitleProps) {
  return (
    <div className="flex flex-col capitalize text-3xl ">
      <span className="font-semibold">{title}</span>
    </div>
  );
}
