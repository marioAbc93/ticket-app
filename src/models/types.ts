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

export interface ViewTitleProps {
  title: string;
}

export interface TableProps {
  searchBar: boolean;
  placeholder?: string;
  buttonLabel?: string;
  buttonAction?: () => void;
}
