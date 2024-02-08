import { ThemeProvider } from 'styled-components/native'
import theme from '@theme/index';

import {
	NunitoSans_400Regular,
	NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
import React from 'react';
import { Loading } from './src/components/Loading';

export default function App() {
	const [fontLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

	return (
		<ThemeProvider theme={theme}>
			{fontLoaded ? <Routes /> : <Loading />}
			<StatusBar backgroundColor="transparent" translucent barStyle='dark-content' />
		</ThemeProvider>
	);
}

