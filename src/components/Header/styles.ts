import styled from "styled-components/native";
import theme, { getResponsiveSpacing } from "@theme/index";
import icons from "@assets/icons";
import IconComponent from "@assets/icons";

export const Logo = styled(IconComponent).attrs({
})` 
`;

export const Avatar = styled(IconComponent).attrs({
})` 
`;

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${theme.currentHeight}px;
  margin: ${getResponsiveSpacing(0)}px ${getResponsiveSpacing(8)}px;
`;
