/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, createContext, ReactNode } from "react";
//import { SelectionType } from "../entities";

interface ModalContextProps {
  open: boolean;
  reload: boolean;
  setOpen: (open: boolean) => void;
  setReload: (reload: boolean) => void;
  content: ReactNode;
  setContent: (content: ReactNode) => void;
  handleSelect: (item: any) => void;
}

const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode>(null);

  const handleSelect = () => {
    setOpen(true);
  };

  const value = {
    open,
    setOpen,
    content,
    setContent,
    handleSelect,
    reload,
    setReload,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContext;
