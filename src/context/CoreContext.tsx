import React, { useState, createContext } from 'react';

interface CoreContextType {
    modal: any;
    setModal: (modal: any) => void;
}

export const CoreContext = createContext<CoreContextType | undefined>(undefined);

interface CoreContextProps {
    children: React.ReactNode;
}

export const CoreState = ({ children }: CoreContextProps): JSX.Element => {
    const [modal, setModal] = useState<any>(null);   

    const contextValue = {
        modal,
        setModal,
    };

    return <CoreContext.Provider value={contextValue}>{children}</CoreContext.Provider>;
};
