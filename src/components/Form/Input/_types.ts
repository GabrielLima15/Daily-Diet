import { Control, FieldErrors } from "react-hook-form";
import { KeyboardType } from "react-native";

export interface InputProps {
  label?: string;
  placeholder?: string;
  width?: number;
  multiline?: boolean;
  height?: number;
  padding?: number;
  keyboardType: KeyboardType;
  errors?: any;
  secureTextEntry?: boolean;
}

export interface TextInputProp {
  height?: number;
	padding?: number;
}

export interface ContainerProps {
  width?: number;
}

export interface MaskedInputProps extends InputProps {
  maskType?: 'date' | 'time' | 'money';
  control: Control;
  name: string;
}