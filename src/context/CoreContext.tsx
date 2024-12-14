import React, { useState, createContext, ReactNode } from 'react';

interface ModalType {
  type: string;
  title?: string;
  message?: string;
  action?: () => Promise<void>;
}

interface CoreContextType {
  modal: ModalType | null;
  setModal: (modal: ModalType | null) => void;
  avatarUri: string | null;
  setAvatarUri: (uri: string | null) => void;
}

export const CoreContext = createContext<CoreContextType | undefined>(undefined);

interface CoreContextProps {
  children: ReactNode;
}

export const CoreState = ({ children }: CoreContextProps): JSX.Element => {
  const [modal, setModal] = useState<ModalType | null>(null);
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const contextValue: CoreContextType = {
    modal,
    setModal,
    avatarUri,
    setAvatarUri,
  };

  return <CoreContext.Provider value={contextValue}>{children}</CoreContext.Provider>;
};
