import theme, { getResponsiveSize } from "@theme/index";
import { WindowScreen } from "@ui/index";
import styled from "styled-components/native";
import IconComponent from "@assets/icons";
import { SafeAreaView } from 'react-native-safe-area-context';

export const WrapperScroll = styled.ScrollView`
  flex: 1;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.COLORS.white};
  padding-top: ${getResponsiveSize(20)}px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-bottom: ${getResponsiveSize(20)}px;
`;

export const Logo = styled(IconComponent).attrs({
})``;

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
`;

export const TitleAcess = styled.Text`
  color: ${props => props.theme.COLORS.gray_1};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  padding-bottom: ${getResponsiveSize(5)}px;
`;

export const BottomTab = styled.View`
  width: 100%;
  justify-content: flex-end;
  margin-top: auto; 
  padding-bottom: ${WindowScreen.height * 0.02}px;
  align-items: center;
`;
