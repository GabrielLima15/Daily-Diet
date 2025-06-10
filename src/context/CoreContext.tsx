import React, { useState, createContext, ReactNode, useContext, Dispatch, SetStateAction } from 'react';

interface ModalState {
  type?: 'confirm' | string;
  title?: string;
  action?: () => void;
}

interface CoreContextType {
  modal: ModalState | null;
  setModal: Dispatch<SetStateAction<ModalState | null>>;
}

export const CoreContext = createContext<CoreContextType>({
  modal: null,
  setModal: () => {},
});

interface CoreStateProps {
  children: ReactNode;
}

export const CoreState = ({ children }: CoreStateProps) => {
  const [modal, setModal] = useState<ModalState | null>(null);

  const contextValue = {
    modal,
    setModal,
  };

  return <CoreContext.Provider value={contextValue}>{children}</CoreContext.Provider>;
};

export const useCoreContext = () => {
  const context = useContext(CoreContext);

  if (!context) {
    throw new Error('useCoreContext must be used within a CoreState provider');
  }

  return context;
};
