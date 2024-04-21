import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { DietInfo } from '@screens/DietInfo'
import { NewMeal } from '@screens/NewMeal'
import { WithinDiet } from '@screens/WithinDiet'
import { OutsideDiet } from '@screens/OutsideDiet'


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
			<Screen name="home" component={Home} />
			<Screen name="dietInfo" component={DietInfo} />
			<Screen name="newMeal" component={NewMeal} />
			<Screen name="withinDiet" component={WithinDiet} />
			<Screen name="outsideDiet" component={OutsideDiet} />
		</Navigator>
	)
}