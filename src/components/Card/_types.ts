export interface CardPropsStyles {
  backgroundColor?: string;
  rounded?: number;
  titleFontSize?: number;
  width?: number;  
  height?: number; 
}

export interface CardProps extends CardPropsStyles {
  arrow?: boolean;
  arrowColor?: string;
  title?: string;
  subTitle?: string;
  onPress?: () => void;
}
