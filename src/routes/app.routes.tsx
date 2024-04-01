import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { DietInfo } from '@screens/DietInfo'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="dietInfo" component={DietInfo} />
			<Screen name="home" component={Home} />
		</Navigator>
	)
}