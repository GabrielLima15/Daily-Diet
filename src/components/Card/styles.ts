import theme from "@theme/index";
import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { CardPropsStyles } from "./_types";

export const Container = styled.SafeAreaView<CardPropsStyles>`
  background-color: ${props => props.backgroundColor || props.theme.COLORS.green_light};
	border-radius: ${props => props.rounded ? `${RFValue(5)}px` : '0px'};
	margin: ${RFValue(10)}px ${RFValue(20)}px;
`;

export const Wrapper = styled.View`
	flex-direction: column;
  justify-content: flex-end;
	padding: ${RFValue(15)}px ${RFValue(5)}px;
`
export const ArrowTopRight = styled.TouchableOpacity`
	align-items: flex-end;
	position: absolute;
	right: 0;
	top: 0;
	padding: ${RFValue(5)}px ${RFValue(5)}px;
`

export const WrapperText = styled.View`
	flex-direction: column;
	align-items: center;
	/* padding: ${RFValue(20)}px ${RFValue(20)}px; */
	gap: 1px;
`

export const Title = styled.Text<CardPropsStyles>`
	font-size: ${props => props.titleFontSize || `${theme.FONT_SIZE.XXXL}`}px;
	font-family: ${theme.FONT_FAMILY.BOLD};
`
export const SubTitle = styled.Text`
	font-size: ${theme.FONT_SIZE.LG}px;
	font-family: ${theme.FONT_FAMILY.REGULAR};
`