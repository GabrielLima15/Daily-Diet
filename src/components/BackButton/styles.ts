import { getResponsiveSpacing } from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
	margin: ${getResponsiveSpacing(0)}px ${getResponsiveSpacing(8)}px;
	z-index: 10;
`