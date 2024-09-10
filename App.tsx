import React, { useEffect, useState } from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons'; 
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import AppContext from '@context/index';
import Router from '@router/index';
import Toast from 'react-native-toast-message';
import ModalController from '@components/Modal/Controller';
import theme from '@theme/index';
import { navigationRef } from '@router/root';
import { loadFonts } from '@assets/fonts';
import { Loading } from '@components/Loading';

export default function App() {
  const [loading, setLoading] = useState(true);

  const initApplication = async () => {
    await loadFonts();
    setLoading(false);
  };

  useEffect(() => {
    initApplication();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={EvaIconsPack} /> 
      <ApplicationProvider {...eva} theme={eva.light}> 
        <NavigationContainer ref={navigationRef}>
          <AppContext>
            <ThemeProvider theme={theme}>
              <Router />
              <ModalController />
              <Toast />
            </ThemeProvider>
          </AppContext>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
