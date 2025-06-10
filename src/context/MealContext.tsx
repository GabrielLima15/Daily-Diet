import { ReadObject, SaveObject } from '@services/storage';
import React, { useState, createContext, ReactNode, useContext, Dispatch, SetStateAction, useEffect } from 'react';

interface Meal {
  hour: string;
  meal: string;
  approved: boolean;
}

interface DayMeals {
  title: string; 
  data: Meal[];  
}

interface MealContextType {
  diet: DayMeals | null;
  setDiet: Dispatch<SetStateAction<DayMeals | null>>;
  createDiet: (data: any) => Promise<void>;
  loadDiet: () => Promise<void>; 
}

export const MealContext = createContext<MealContextType>({
  diet: null,
  setDiet: () => {},
  createDiet: async () => {},
  loadDiet: async () => {}
});

interface MealStateProps {
  children: ReactNode;
}

export const MealState = ({ children }: MealStateProps) => {
  const [diet, setDiet] = useState<DayMeals | null>(null);

  
  useEffect(() => {
    loadDiet();
  }, []);

 
  const loadDiet = async () => {
    try {
      const savedDiet = await ReadObject('diet');
      if (savedDiet) {
        setDiet(savedDiet);
      }
    } catch (error) {
      console.error('Error loading diet', error);
    }
  };

  
  const createDiet = async (data: DayMeals) => {
    try {
      await SaveObject('diet', data);
      setDiet(data);
    } catch (error) {
      console.error('Error creating diet', error);
      throw new Error('Error creating diet');
    }
  };

  const contextValue = {
    diet,
    setDiet,
    createDiet,
    loadDiet
  };

  return <MealContext.Provider value={contextValue}>{children}</MealContext.Provider>;
};

export const useMealContext = () => {
  const context = useContext(MealContext);

  if (!context) {
    throw new Error('useMealContext must be used within a MealState provider');
  }

  return context;
};
