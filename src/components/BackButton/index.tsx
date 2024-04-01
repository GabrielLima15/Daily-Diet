import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import theme from "@theme/index";

export function BackButton(){
	const navigation = useNavigation()

	function goBack(){
		navigation.goBack()
	}


	return (
		<Container onPress={goBack}>
			<ArrowLeft size={25} color={theme.COLORS.green_dark} />
		</Container>
	)
}