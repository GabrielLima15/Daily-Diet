import * as Font from 'expo-font';

export const loadFonts = async () => {
	try {
		await Font.loadAsync({
			'NunitoSans_400Regular': require('../../assets/fonts/NunitoSans_400Regular.ttf'),
			'NunitoSans_700Bold': require('../../assets/fonts/NunitoSans_700Bold.ttf'),
		});
		return true;
	} catch (error) {
		console.error("Error loading fonts:", error);
		return false;
	}
};
