import { Control, FieldErrors } from "react-hook-form";
import { KeyboardType } from "react-native";

export interface SpacingProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  margin?: SpacingProps;
  paddingLabel?: SpacingProps;
  paddingInput?: SpacingProps;
  width?: number;
  multiline?: boolean;
  height?: number;
	keyboardType: KeyboardType
	errors?: any;
}

export interface LabelInputProps {
  padding?: SpacingProps;
}

export interface TextInputProp {
  padding?: SpacingProps;
  height?: number;
}

export interface ContainerProps {
  margin?: SpacingProps;
  width?: number;
}

export interface MaskedInputProps extends InputProps {
  maskType?: 'date' | 'time' | 'money';
  control: Control;
  name: string;
}