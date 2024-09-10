export interface ButtonPropsStyles {
  backgroundColor?: string;
  rounded?: number;
  textColor?: string;
  fontFamily?: string;
  borderStyle?: string;
  width?: number;  
  height?: number;
}

export interface ButtonProps extends ButtonPropsStyles {
  icon?: boolean;
  iconComponent?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  loading?: boolean;
}
