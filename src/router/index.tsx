import React from 'react'

import { navigate } from './root'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DietInfo } from '@screens/DietInfo';
import { Home } from '@screens/Home';
import { NewMeal } from '@screens/NewMeal';
import { OutsideDiet } from '@screens/OutsideDiet';
import { WithinDiet } from '@screens/WithinDiet';
import { Login } from '@screens/Login';

export default function Router() {
	const { Navigator, Screen } = createNativeStackNavigator()

	return (
		<Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
			<Screen name='login' component={Login} />


			<Screen name="home" component={Home} />
			<Screen name="dietInfo" component={DietInfo} />
			<Screen name="newMeal" component={NewMeal} />
			<Screen name="withinDiet" component={WithinDiet} />
			<Screen name="outsideDiet" component={OutsideDiet} />
		</Navigator>
	);
}