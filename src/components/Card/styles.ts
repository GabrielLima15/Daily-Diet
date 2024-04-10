import theme, { getResponsiveSize, getResponsiveSpacing } from "@theme/index";
import styled from "styled-components/native";

import { CardPropsStyles } from "./_types";

export const Container = styled.SafeAreaView<CardPropsStyles>`
  background-color: ${props => props.backgroundColor !== undefined ? `${props.backgroundColor}` : `${props.theme.COLORS.green_light}`};
	border-radius: ${props => props.rounded !== undefined ? `${getResponsiveSize(props.rounded)}px` : '0px'};
  ${({ margin }) => margin && `
    ${margin.top !== undefined ? `margin-top: ${getResponsiveSpacing(margin.top)}px;` : ''}
    ${margin.right !== undefined ? `margin-right: ${getResponsiveSpacing(margin.right)}px;` : ''}
    ${margin.bottom !== undefined ? `margin-bottom: ${getResponsiveSpacing(margin.bottom)}px;` : ''}
    ${margin.left !== undefined ? `margin-left: ${getResponsiveSpacing(margin.left)}px;` : ''}
  `}
	${({ size }) => size && `
    ${size.width !== undefined ? `width: ${getResponsiveSize(size.width)}px;` : ''}
    ${size.height !== undefined ? `height: ${getResponsiveSize(size.height)}px;` : ''}
  `}
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
	font-size: ${props => props.titleFontSize !== undefined ? `${props.titleFontSize}` : props.theme.FONT_SIZE.XXXL}px;
	font-family: ${theme.FONT_FAMILY.BOLD};
`
export const SubTitle = styled.Text`
	font-size: ${theme.FONT_SIZE.LG}px;
	font-family: ${theme.FONT_FAMILY.REGULAR};
	text-align: center;
`