export interface SpacingProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface SizeProps {
  width?: number;
  height?: number;
}

export interface CardPropsStyles {
  backgroundColor?: string;
  rounded?: number;
  titleFontSize?: number;
  margin?: SpacingProps; 
  padding?: SpacingProps;
	size?: SizeProps;
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
	margin?: SpacingProps
	size?: SizeProps;
}