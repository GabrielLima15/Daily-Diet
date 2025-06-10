import React, { useState, createContext, ReactNode, useContext, Dispatch, SetStateAction } from 'react'

interface ModalState {
  type?: 'confirm' | string;
  title?: string;
  action?: () => void;
}

interface DietState {
  id: string
  name: string
  description: string
  data: string
  hora: string
  insideDiet: boolean
}

interface CoreContextType {
  modal: ModalState | null;
  setModal: Dispatch<SetStateAction<ModalState | null>>;
  diet: DietState | null;
  setDiet: Dispatch<SetStateAction<DietState | null>>;
}

export const CoreContext = createContext<CoreContextType>({
  modal: null,
  setModal: () => {},
  diet: null,  
  setDiet: () => {} 
})

interface CoreStateProps {
  children: ReactNode;
}

export const CoreState = ({ children }: CoreStateProps) => {
  const [modal, setModal] = useState<ModalState | null>(null)
  const [diet, setDiet] = useState<DietState | null>(null)

  const contextValue = {
    modal,
    setModal,
    diet,
    setDiet,
  }

  return <CoreContext.Provider value={contextValue}>{children}</CoreContext.Provider>
}

export const useCoreContext = () => {
  const context = useContext(CoreContext)

  if (!context) {
    throw new Error('useCoreContext must be used within a CoreState provider')
  }

  return context
}
