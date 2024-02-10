import { ReactNode } from "react";

export interface ButtonPropsStyles {
	backgroundColor?: string;
	rounded?: number;
	margin?: [number, number];
	padding?: [number, number];
	textColor?: string;
	fontFamily?: string;
}
export interface ButtonProps {
	backgroundColor?: string;
	rounded?: number;
	icon?: boolean;
	iconComponent?: ReactNode
	text?: string;
	WidthAndHeight?: [number, number];
	spacing?: [number, number];
	textColor?: string;
	fontFamily?: string;
	onPress?: () => void;
}