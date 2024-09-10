import styled from "styled-components/native";
import { CardPropsStyles } from "./_types";
import { WindowScreen } from "@ui/index";

export const Container = styled.SafeAreaView<CardPropsStyles>`
  background-color: ${props => props.backgroundColor !== undefined ? `${props.backgroundColor}` : `${props.theme.COLORS.green_light}`};
  border-radius: ${props => props.rounded !== undefined ? `${props.rounded}px` : '5px'};
  width: ${props => props.width !== undefined ? `${props.width}px` : `${WindowScreen.width * 0.8}px`}; 
  height: ${props => props.height !== undefined ? `${props.height}px` : '200px'};  
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px 5px;
`;

export const ArrowTopRight = styled.TouchableOpacity`
  align-items: flex-end;
  position: absolute;
  right: 0;
  top: 0;
  padding: 3px 3px;
`;

export const WrapperText = styled.View`
  flex-direction: column;
  align-items: center;
  gap: 1px;
`;

export const Title = styled.Text<CardPropsStyles>`
  font-size: ${props => props.titleFontSize !== undefined ? `${props.titleFontSize}px` : `${props.theme.FONT_SIZE.XXXL}px`};
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
`;

export const SubTitle = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.LG}px;
  font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
  text-align: center;
`;
