
import React from 'react'; 

import { CoreState } from './CoreContext' 
import { AuthState } from './AuthContext' 

interface AppContextProps {
  children: React.ReactNode;
}

export default function AppContext({ children }: AppContextProps) {

  return (   
        <CoreState>
          <AuthState>  
              { children } 
          </AuthState>
        </CoreState> 
  );
}