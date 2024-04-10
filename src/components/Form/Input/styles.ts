import theme, { getResponsiveSize, getResponsiveSpacing } from "@theme/index";
import styled from "styled-components/native";
import { ContainerProps, LabelInputProps, TextInputProp } from "./_types";

export const Container = styled.SafeAreaView<ContainerProps>`
  ${({ margin, theme }) => margin && `
    ${margin.top !== undefined ? `margin-top: ${getResponsiveSpacing(margin.top)}px;` : ''}
    ${margin.right !== undefined ? `margin-right: ${getResponsiveSpacing(margin.right)}px;` : ''}
    ${margin.bottom !== undefined ? `margin-bottom: ${getResponsiveSpacing(margin.bottom)}px;` : ''}
    ${margin.left !== undefined ? `margin-left: ${getResponsiveSpacing(margin.left)}px;` : ''}
  `}
	width: ${props => props.width !== undefined ?  `${getResponsiveSize(props.width)}` : `auto`}px;
`;

export const LabelInput = styled.Text<LabelInputProps>`
  ${({ padding, theme }) => padding && `
    ${padding.top !== undefined ? `padding-top: ${getResponsiveSpacing(padding.top)}px;` : ''}
    ${padding.right !== undefined ? `padding-right: ${getResponsiveSpacing(padding.right)}px;` : ''}
    ${padding.bottom !== undefined ? `padding-bottom: ${getResponsiveSpacing(padding.bottom)}px;` : ''}
    ${padding.left !== undefined ? `padding-left: ${getResponsiveSpacing(padding.left)}px;` : ''}
  `}
`;

export const TextInput = styled.TextInput<TextInputProp>`
	border: 1px solid ${theme.COLORS.gray_5};
	${({ padding, theme }) => padding && `
    ${padding.top !== undefined ? `padding-top: ${getResponsiveSpacing(padding.top)}px;` : ''}
    ${padding.right !== undefined ? `padding-right: ${getResponsiveSpacing(padding.right)}px;` : ''}
    ${padding.bottom !== undefined ? `padding-bottom: ${getResponsiveSpacing(padding.bottom)}px;` : ''}
    ${padding.left !== undefined ? `padding-left: ${getResponsiveSpacing(padding.left)}px;` : ''}
  `}
	height: ${props => props.height !== undefined ?  `${getResponsiveSize(props.height)}` : `auto`}px;;
	border-radius: ${getResponsiveSpacing(2)}px;
`