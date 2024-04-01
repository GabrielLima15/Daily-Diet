export interface CardPropsStyles {
	backgroundColor?: string;
	rounded?: number;
	titleFontSize?: number;
	margin?: string;
}
export interface CardProps {
	backgroundColor?: string;
	rounded?: number;
	arrow?: boolean;
	arrowColor?: string;
	title?: string;
	titleFontSize?: number;
	subTitle?: string;
	onPress?: () => void
	margin?: string
}