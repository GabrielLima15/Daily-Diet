import theme, { getResponsiveSize, getResponsiveSpacing } from "@theme/index";
import styled from "styled-components/native";

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
	margin-top: ${getResponsiveSpacing(-9)}px;
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

interface RowProps {
	paddingTop?: number;
}

export const Row = styled.View<RowProps>`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: ${getResponsiveSpacing(5)}px;
	padding-top: ${props => props.paddingTop !== undefined ? `${props.paddingTop}px` : '0px'};
`

export const Column = styled.View<RowProps>`
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: ${getResponsiveSpacing(5)}px;
	padding-top: ${props => props.paddingTop !== undefined ? `${props.paddingTop}px` : '0px'};
`

export const Dot = styled.View<DotProps>`
	background-color: ${props => props.backgroudColor || theme.COLORS.white};
	height: ${getResponsiveSize(3)}px;
	width: ${getResponsiveSize(3)}px;
	border-radius: ${getResponsiveSize(10)}px;
`

export const TitleDiet = styled.Text`
	margin: ${getResponsiveSpacing(0)}px ${getResponsiveSpacing(8)}px;
	font-family: ${theme.FONT_FAMILY.BOLD};
	font-size: ${theme.FONT_SIZE.MD}px;
	padding-top: ${getResponsiveSpacing(10)}px;
`

export const ContainerButtonSpace = styled.View`
	align-items: center;
	flex: 1;
	padding-top: ${getResponsiveSpacing(40)}px;
`