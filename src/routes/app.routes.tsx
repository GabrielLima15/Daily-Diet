import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { DietInfo } from '@screens/DietInfo'
import { NewMeal } from '@screens/NewMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }} initialRouteName='newMeal'>
			<Screen name="home" component={Home} />
			<Screen name="dietInfo" component={DietInfo} />
			<Screen name="newMeal" component={NewMeal} />
		</Navigator>
	)
}