import { Platform, StatusBar } from 'react-native';

const currentHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export default {
    COLORS: {
				red_dark: '#BF3B44',
				red_mid: 'F3BABD',
        red_light: '#F4E6E7',

				green_dark: '#639339',
				green_mid: '#CBE4B4',
				green_light: '#E5F0DB',

				gray_1: '#1B1D1E',
				gray_2: '#333638',
				gray_3: '#5C6265',
				gray_4: '#B9BBBC',
				gray_5: '#DDDEDF',
				gray_6: '#EFF0F0',
				gray_7: '#FAFAFA',
				white: '#FFFFFF',
    },

    FONT_FAMILY: {
			REGULAR: 'NunitoSans_400Regular',
			BOLD: 'NunitoSans_700Bold',
		},

    FONT_SIZE: {
			SM: 14,
			MD: 16,
			LG: 18,
			XL: 24,
		},

    currentHeight,
};