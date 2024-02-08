import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "@theme/index";


export const Container = styled.SafeAreaView`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-top: ${theme.currentHeight}px;
	margin: ${RFValue(0)}px ${RFValue(20)}px;
`