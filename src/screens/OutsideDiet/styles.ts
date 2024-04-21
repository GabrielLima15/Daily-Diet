import theme, { getResponsiveFontSize, getResponsiveSpacing } from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
	padding-top: ${theme.currentHeight}px;
	align-items: center;
	justify-content: center;
	flex: 1;
	gap: ${getResponsiveSpacing(2)}px;
`

export const Group = styled.View`
	align-items: center;
	gap: ${getResponsiveSpacing(5)}px;
`

export const Title = styled.Text`
	font-family: ${theme.FONT_FAMILY.BOLD};
	font-size: ${getResponsiveFontSize(theme.FONT_SIZE.XXL)}px;
	color: ${theme.COLORS.red_dark};
`
export const Subtitle = styled.Text`
	font-family: ${theme.FONT_FAMILY.REGULAR};
	text-align: center;
	font-size: ${getResponsiveFontSize(theme.FONT_SIZE.LG)}px;
`

export const Highlight = styled.Text`
	font-family: ${theme.FONT_FAMILY.BOLD};
	color: ${theme.COLORS.gray_1};
`

