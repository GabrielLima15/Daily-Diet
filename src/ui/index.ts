import styled from 'styled-components/native';
import Icon from '@assets/icons';
import * as Animatable from 'react-native-animatable';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Dimensions, StatusBar, Platform, PixelRatio } from 'react-native';
import Constants from 'expo-constants';
import LottieView from 'lottie-react-native';

// Definindo o objeto de cores
export const COLORS = {
	red_dark: '#BF3B44',
	red_mid: '#F3BABD',
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
	primary: '#4527a0',
	secondary: '#d81b60',
	accent: '#dd4952'
};

export const WindowScreen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height,
	landscape: Dimensions.get('window').width > Dimensions.get('window').height
};

export const getFontSize = (size: number): number => {
	const fontScale = PixelRatio.getFontScale();
	return size / fontScale;
};

export const getResponsiveSize = (size: number): number => {
	const screenWidth = WindowScreen.width;
	const baseWidth = Platform.OS === 'ios' ? 375 : 360;
	const responsiveSize = (size / baseWidth) * screenWidth;
	return responsiveSize;
};

export const getResponsiveSpacing = (size: number): number => {
	const screenWidth = WindowScreen.width;
	const baseWidth = Platform.OS === 'ios' ? 375 : 360;
	const responsiveSpacing = (size / baseWidth) * screenWidth;
	return responsiveSpacing;
};

// HEADERS
export const headerHeightAndroid = Platform.OS === 'android' && StatusBar.currentHeight !== 24
	? (StatusBar.currentHeight! + 8)
	: StatusBar.currentHeight;

export const headerHeightIOS = getStatusBarHeight();

const variantHeightIOS = (
	Constants.statusBarHeight !== 20 ? (headerHeightIOS + 8) : 0
);

export const headerHeight = Platform.OS === 'android'
	? headerHeightAndroid
	: (headerHeightIOS + variantHeightIOS);

export const hexToRgb = (hex: string): string => {
	let c: string[] | string;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split('');
		if (c.length === 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return [(+c >> 16) & 255, (+c >> 8) & 255, +c & 255].join(',');
	}
	return '255,255,255';
};

export const alphaColor = (color: keyof typeof COLORS, alpha: number): string => {
	return `rgba(${hexToRgb(COLORS?.[color] || COLORS['primary'])}, ${alpha})`;
};

// Tipagem para styled-components
interface LoadProps {
	white?: boolean;
	color?: keyof typeof COLORS;
}

export const Load = styled.ActivityIndicator.attrs<LoadProps>(props => ({
	color: props.white ? props.theme.white : props.color ? props.color : props.theme.primary
}))``;

export const Safe = styled.View`
    padding-top: ${headerHeight}px;
`;

interface ScrollProps {
	backgrounded?: boolean;
}

export const Scroll = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false
}) <ScrollProps>`
    ${(props) => props.backgrounded ? `
        background: ${props.theme.background};
    ` : ''}
`;

export const Touch = styled.TouchableOpacity``;

export const HorizontalScroll = styled.ScrollView.attrs({
	horizontal: true,
	showsHorizontalScrollIndicator: false
})``;

export const ProjectIconSVG = styled(Icon).attrs({
	icon: 'logo',
	width: 70,
	height: 70
})`
    margin: 18px auto 36px;
`;

export const Content = styled.View`
    padding: 18px 24px;
`;

export const FormContent = styled.View`
    margin: 12px 0;
`;

interface TitleProps {
	centred?: boolean;
}

export const Title = styled.Text<TitleProps>`
    font-family: Bold;
    font-size: 18px;
    color: ${(props) => props.theme.primary};
    margin-bottom: 16px;
    ${(props) => props.centred ? `
        text-align: center;
    ` : ''}
`;

interface TextProps {
	centred?: boolean;
}

export const Text = styled.Text<TextProps>`
    font-family: Regular;
    font-size: 16px;
    line-height: 26px;
    color: ${(props) => props.theme.black};
    margin-bottom: 32px;
    ${(props) => props.centred ? `
        text-align: center;
    ` : ''}
`;

export const BodyAnimation = styled(LottieView).attrs({
	autoPlay: true,
	loop: true
})`
    width: 200px;
    height: 140px;
    margin: 0 auto 20px;
`;

export const BounceIn = styled(Animatable.View).attrs({
	animation: 'bounceIn'
})``;

export const ContentSpacer = styled.View`
    flex: 1;
`;

interface RowProps {
	align?: string;
	justify?: string;
	gap?: number;
	paddingTop?: number;
	paddingBottom?: number;
}

interface ColumnProps {
	align?: string;
	justify?: string;
	gap?: number;
	paddingTop?: number;
	paddingBottom?: number;
}

export const Row = styled.View<RowProps>`
	flex-direction: row;
	align-items: ${props => props.align || 'center'};
	justify-content: ${props => props.justify || 'center'};
	justify-content: center;
	gap: ${props => props.gap ? `${props.gap}px` : `${getResponsiveSpacing(5)}px`};
	padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : `${getResponsiveSpacing(0)}px`};
	padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : `${getResponsiveSpacing(0)}px`};
`

export const Column = styled.View<ColumnProps>`
	flex-direction: column;
	align-items: ${props => props.align || 'center'};
	justify-content: ${props => props.justify || 'center'};
	gap: ${props => props.gap ? `${props.gap}px` : `${getResponsiveSpacing(5)}px`};
	padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : `${getResponsiveSpacing(0)}px`};
	padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : `${getResponsiveSpacing(0)}px`};
`