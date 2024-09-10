import styled from "styled-components/native";
import { ButtonPropsStyles } from "./_types";
import { WindowScreen } from "@ui/index";  

export const Container = styled.TouchableOpacity<ButtonPropsStyles>`
  width: ${props => props.width !== undefined ? `${props.width}px` : `${WindowScreen.width * 0.8}px`}; 
  height: ${props => props.height !== undefined ? `${props.height}px` : '45px'}; 
  background-color: ${props => props.backgroundColor !== undefined ? `${props.backgroundColor}` : props.theme.COLORS.green_light};
  border-radius: ${props => props.rounded !== undefined ? `${props.rounded}px` : '5px'};  
  border: ${props => props.borderStyle || '0px solid transparent'};
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const IconContainer = styled.View``;

export const TextButton = styled.Text<ButtonPropsStyles>`
  font-family: ${props => props.fontFamily !== undefined ? `${props.fontFamily}` : props.theme.FONT_FAMILY.BOLD};
  color: ${props => props.textColor || props.theme.COLORS.white};
`;
