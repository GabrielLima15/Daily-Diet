import theme, { getResponsiveFontSize, getResponsiveSize, getResponsiveSpacing } from "@theme/index";
import styled from "styled-components/native";
import { NewMealProps } from "./_types";

type DotProps = {
	backgroudColor?: string;
}

export const Container = styled.View`
	background-color: ${theme.COLORS.gray_5};
	flex: 1;
`

export const TopContent = styled.SafeAreaView`
	background-color: ${theme.COLORS.gray_5};
	height: ${getResponsiveSize(60)}px;
	padding-top: ${theme.currentHeight}px;
`

export const Group = styled.View`
	align-items: center;
	flex: 1;
	justify-content: flex-end;
`

export const Title = styled.Text`
	font-family: ${theme.FONT_FAMILY.BOLD};
	font-size: ${theme.FONT_SIZE.XL}px;
`

export const ContainerStates = styled.View`
	flex: 1; 
  justify-content: space-between;
	background-color: ${theme.COLORS.white};
	position: absolute;
	width: 100%;
	top: 13%;
	height: 100%;
	border-top-left-radius: 30px;
 	border-top-right-radius: 30px;
`

export const GroupCards = styled.View`


`

export const Row = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: ${getResponsiveSpacing(5)}px;
`

export const Dot = styled.View<DotProps>`
	background-color: ${props => props.backgroudColor || theme.COLORS.white};
	height: ${getResponsiveSize(3)}px;
	width: ${getResponsiveSize(3)}px;
	border-radius: ${getResponsiveSize(10)}px;
`

export const TitleDiet = styled.Text`
	margin: ${getResponsiveSpacing(0)}px ${getResponsiveSpacing(4)}px;
	font-family: ${theme.FONT_FAMILY.BOLD};
	font-size: ${theme.FONT_SIZE.MD}px;
`