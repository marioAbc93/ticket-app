/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

export interface CardProps {
  background: string;
  title: string;
  data: number | string;
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

export interface TableHeader {
  key: string;
  label: string;
}

export interface TableProps {
  searchBar: boolean;
  placeholder?: string;
  buttonLabel?: string;
  headers: TableHeader[];
  total_pages: number;
  current_page: number;
  onPageChange: (page: number) => void;
  buttonAction?: () => void;
  data: any[];
  actions?: {
    label: string;
    handler: (item: any) => void;
  }[];
}

export interface ActionButtonTableProps {
  type: string;
  action?: () => void;
}

export type PaginationProps = {
  pagination: {
    total_pages: number;
    current_page: number;
  };
  onPageChange: (page: number) => void;
};
