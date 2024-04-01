import theme, { getResponsiveSize, getResponsiveSpacing } from "@theme/index";
import styled from "styled-components/native";

import { CardPropsStyles } from "./_types";

export const Container = styled.SafeAreaView<CardPropsStyles>`
  background-color: ${props => props.backgroundColor || props.theme.COLORS.green_light};
	border-radius: ${props => props.rounded !== undefined ? `${getResponsiveSize(props.rounded)}px` : '0px'};
	margin: ${props => props.margin || `${getResponsiveSpacing(5)}px ${getResponsiveSpacing(8)}px`};
`;

export const Wrapper = styled.View`
	flex-direction: column;
  justify-content: flex-end;
	padding: ${getResponsiveSpacing(10)}px ${getResponsiveSpacing(5)}px;
`
export const ArrowTopRight = styled.TouchableOpacity`
	align-items: flex-end;
	position: absolute;
	right: 0;
	top: 0;
	padding: ${getResponsiveSpacing(3)}px ${getResponsiveSpacing(3)}px;
`

export const WrapperText = styled.View`
	flex-direction: column;
	align-items: center;
	/* padding: ${getResponsiveSpacing(20)}px ${getResponsiveSpacing(20)}px; */
	gap: 1px;
`

export const Title = styled.Text<CardPropsStyles>`
	font-size: ${props => props.titleFontSize || `${theme.FONT_SIZE.XXXL}`}px;
	font-family: ${theme.FONT_FAMILY.BOLD};
`
export const SubTitle = styled.Text`
	font-size: ${theme.FONT_SIZE.LG}px;
	font-family: ${theme.FONT_FAMILY.REGULAR};
	text-align: center;
`