import theme, { getResponsiveFontSize, getResponsiveSize, getResponsiveSpacing } from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
	background-color: ${theme.COLORS.green_light};
	height: ${getResponsiveSize(70)}px;
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
	position: relative;
	width: 100%;
	top: 20%;
	border-top-left-radius: 20px;
 	border-top-right-radius: 20px;
	align-items: center;
`

export const Title = styled.Text`
	text-align: center;
	padding-top: ${getResponsiveSize(15)}px;
	padding-bottom: ${getResponsiveSize(5)}px;
	font-family: ${theme.FONT_FAMILY.BOLD};
	font-size: ${getResponsiveFontSize(14)}px;
`

export const GroupCards = styled.View`


`

export const Row = styled.View`
	flex-direction: row;
	gap: 20px;
`