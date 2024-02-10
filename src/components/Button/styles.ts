import { getResponsiveSize, getResponsiveSpacing } from "@theme/index";
import styled from "styled-components/native";
import { ButtonPropsStyles } from "./_types";

export const Container = styled.TouchableOpacity<ButtonPropsStyles>`
	margin: ${props => props.margin ? `${getResponsiveSpacing(props.margin[0])}px ${getResponsiveSpacing(props.margin[1])}px` : `${getResponsiveSpacing(5)}px ${getResponsiveSpacing(8)}px`};
	padding: ${props => props.padding ? `${getResponsiveSpacing(props.padding[0])}px ${getResponsiveSpacing(props.padding[1])}px` : `${getResponsiveSpacing(5)}px ${getResponsiveSpacing(8)}px`};
	background-color: ${props => props.backgroundColor || props.theme.COLORS.green_light};
	border-radius: ${props => props.rounded !== undefined ? `${getResponsiveSize(props.rounded)}px` : '0px'};
`

export const Wrapper = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: ${getResponsiveSpacing(4)}px;
`

export const IconContainer = styled.View`

`

export const TextButton = styled.Text<ButtonPropsStyles>`
	font-family: ${props => props.fontFamily || props.theme.FONT_FAMILY.BOLD};
	color: ${props => props.textColor || props.theme.COLORS.white};
`