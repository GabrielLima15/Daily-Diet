import theme, { getFontSize, getResponsiveSize, getResponsiveSpacing } from "@theme/index";
import { WindowScreen } from "@ui/index";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
	background-color: ${theme.COLORS.green_light};
	flex: 1;
	padding-top: ${theme.currentHeight}px;
`

export const TopContent = styled.SafeAreaView`
	background-color: ${theme.COLORS.green_light};
	height: ${getResponsiveSize(60)}px;
`

export const Group = styled.View`
	align-items: center;
`

export const NumberPercentage = styled.Text`
	font-family: ${theme.FONT_FAMILY.BOLD};
	font-size: ${theme.FONT_SIZE.XXXL}px;
`

export const Description = styled.Text`
	font-family: ${theme.FONT_FAMILY.REGULAR};
	font-size: ${theme.FONT_SIZE.LG}px;
`

export const ContainerStates = styled.View`
	background-color: ${theme.COLORS.white};
	position: absolute;
	width: 100%;
	top: ${WindowScreen.height * 0.2};
	height: 100%;
	border-top-left-radius: 30px;
 	border-top-right-radius: 30px;
	align-items: center;
`

export const Title = styled.Text`
	text-align: center;
	padding-top: ${getResponsiveSize(15)}px;
	padding-bottom: ${getResponsiveSize(5)}px;
	font-family: ${theme.FONT_FAMILY.BOLD};
	font-size: ${getFontSize(14)}px;
`

export const Column = styled.View`


`

export const Row = styled.View`
	flex-direction: row;
	gap: ${getResponsiveSpacing(1)}px;
`