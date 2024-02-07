import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import theme from "@theme/index";


export const Container = styled.SafeAreaView`
	flex-direction: row;
	justify-content: space-between;
	padding-top: ${theme.currentHeight}px;
`