import theme, { getFontSize, getResponsiveSize, getResponsiveSpacing } from "@theme/index";
import styled from "styled-components/native";

interface DotMealProps {
  PercentageAboveX: boolean;
}

export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: ${theme.COLORS.white};
`

export const Title = styled.Text`
	margin: ${getResponsiveSpacing(0)}px ${getResponsiveSpacing(8)}px;
	padding-top: ${getResponsiveSpacing(10)}px;
	font-family: ${theme.FONT_FAMILY.REGULAR};
`

export const HeaderSectionList = styled.Text`
	margin: ${getResponsiveSpacing(0)}px ${getResponsiveSpacing(8)}px;
	font-family: ${theme.FONT_FAMILY.BOLD};
	line-height: ${getResponsiveSpacing(15)}px;
	font-size: ${getFontSize(18)}px;
`

export const SectionListColumn = styled.View`
	margin: ${getResponsiveSpacing(2)}px ${getResponsiveSpacing(8)}px;
	padding: ${getResponsiveSpacing(5)}px ${getResponsiveSpacing(5)}px;

	flex-direction: row;
	align-items: center;

	border: 1px solid ${theme.COLORS.gray_5};
	border-radius: ${getResponsiveSize(3)}px;
	gap: 20px;
`

export const Hour = styled.Text`
	font-family: ${theme.FONT_FAMILY.BOLD};
	font-size: ${getFontSize(15)}px;
`

export const Divider = styled.View`
	position: relative;
	width: 2px;
	height: ${getResponsiveSize(7)}px;
	background-color: ${theme.COLORS.gray_5};
`

export const MealTitle = styled.Text`
	flex: 1;

	font-family: ${theme.FONT_FAMILY.REGULAR};
	font-size: ${getFontSize(16)}px;
`

export const DotMeal = styled.View<DotMealProps>`
	background-color: ${props => props.PercentageAboveX ? theme.COLORS.green_mid : theme.COLORS.red_mid};
	width: ${getResponsiveSize(5)}px;
	height: ${getResponsiveSize(5)}px;

	border-radius: ${getResponsiveSize(20)}px;
`

export const Blur = styled.View`
	position: absolute;
	background-color: rgba(255, 255, 255, 0.7);
	width: 100%;
	height: ${getResponsiveSize(30)}px;
	bottom: 0px;
`