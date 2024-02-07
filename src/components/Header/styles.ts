import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import theme from "@theme/index";


export const Container = styled.SafeAreaView`
	margin: 0px ${RFValue(20)}px;
	padding-top: ${theme.currentHeight};
`