import theme, { getResponsiveSize, getResponsiveSpacing } from "@theme/index";
import styled from "styled-components/native";
import { ContainerProps, TextInputProp } from "./_types";
import { WindowScreen } from "@ui/index";

export const Container = styled.SafeAreaView<ContainerProps>`
  width: ${props => props.width !== undefined ? `${props.width}px` : `${WindowScreen.width * 0.6}px`}; 
`;

export const LabelInput = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.COLORS.gray_1};
	padding-bottom: ${getResponsiveSpacing(2)}px;
`;

export const TextInput = styled.TextInput<TextInputProp>`
  border: 1px solid ${props => props.theme.COLORS.gray_5};
  height: ${props => props.height}px;  
  width: 100%; 
  border-radius: 5px;
  padding: ${props => props.padding !== undefined ? `${props.padding}px` : '10px'};
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const EyeIconContainer = styled.View`
  position: absolute; 
  right: ${WindowScreen.width * 0.02}px;
  top: ${WindowScreen.height * 0.04}px;
`;


