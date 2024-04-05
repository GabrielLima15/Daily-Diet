import { ReactNode } from "react";

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

export interface ButtonPropsStyles {
  backgroundColor?: string;
  rounded?: number;
  margin?: SpacingProps;
  padding?: SpacingProps;
  textColor?: string;
  fontFamily?: string;
}

export interface ButtonProps extends ButtonPropsStyles {
  icon?: boolean;
  iconComponent?: ReactNode;
  text?: string;
  size?: SizeProps;
  onPress?: () => void;
}
