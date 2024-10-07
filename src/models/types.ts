import { ReactNode } from "react";

export interface CardProps {
  background: string;
  title: string;
  data: number;
  path: string;
  border: boolean;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface GridProps {
  children: ReactNode;
}
