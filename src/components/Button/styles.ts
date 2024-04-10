import { getResponsiveSize, getResponsiveSpacing } from "@theme/index";
import styled from "styled-components/native";
import { ButtonPropsStyles } from "./_types";

export const Container = styled.TouchableOpacity<ButtonPropsStyles>`
	${({ margin, theme }) => margin && `
    ${margin.top !== undefined ? `margin-top: ${getResponsiveSpacing(margin.top)}px;` : ''}
    ${margin.right !== undefined ? `margin-right: ${getResponsiveSpacing(margin.right)}px;` : ''}
    ${margin.bottom !== undefined ? `margin-bottom: ${getResponsiveSpacing(margin.bottom)}px;` : ''}
    ${margin.left !== undefined ? `margin-left: ${getResponsiveSpacing(margin.left)}px;` : ''}
  `}
  ${({ padding, theme }) => padding && `
    ${padding.top !== undefined ? `padding-top: ${getResponsiveSpacing(padding.top)}px;` : ''}
    ${padding.right !== undefined ? `padding-right: ${getResponsiveSpacing(padding.right)}px;` : ''}
    ${padding.bottom !== undefined ? `padding-bottom: ${getResponsiveSpacing(padding.bottom)}px;` : ''}
    ${padding.left !== undefined ? `padding-left: ${getResponsiveSpacing(padding.left)}px;` : ''}
  `}
	${({ size, theme }) => size && `
    ${size.width !== undefined ? `width: ${getResponsiveSize(size.width)}px;` : ''}
    ${size.height !== undefined ? `height: ${getResponsiveSize(size.height)}px;` : ''}
  `}
	background-color: ${props => props.backgroundColor !== undefined ? `${props.backgroundColor}` : props.theme.COLORS.green_light};
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
	font-family: ${props => props.fontFamily !== undefined ? `${props.fontFamily}` : props.theme.FONT_FAMILY.BOLD};
	color: ${props => props.textColor || props.theme.COLORS.white};
`