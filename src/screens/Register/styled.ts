import theme, { getResponsiveSize } from "@theme/index";
import { headerHeight, WindowScreen } from "@ui/index";
import styled from "styled-components/native";
import icons from "@assets/icons";
import IconComponent from "@assets/icons";

export const Container = styled.ScrollView`
	flex: 1;
  /* position: relative; */
	width: 100%;
  background-color: ${props => props.theme.COLORS.white};
  padding-top: ${headerHeight}px; 
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px;
	padding-bottom: ${getResponsiveSize(20)}px;
`;

export const Logo = styled(IconComponent).attrs({
})`
`;

export const LogoTitle = styled(IconComponent).attrs({
})`
	margin-top: ${getResponsiveSize(-17)}px;
	margin-bottom: ${getResponsiveSize(-17)}px;
`;

export const Title = styled.Text`
	color: ${props => props.theme.COLORS.gray_1};
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	 
`

export const Subtitle = styled.Text`
	color: ${props => props.theme.COLORS.gray_1};
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	 
`

export const TitleAcess = styled.Text`
	color: ${props => props.theme.COLORS.gray_1};
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	
	padding-bottom: ${getResponsiveSize(5)}px;
`

export const BottomTab = styled.View`
	padding-top: ${getResponsiveSize(20)}px;
`

export const Spacer = styled.View`
  height: ${getResponsiveSize(40)}px;
`;
