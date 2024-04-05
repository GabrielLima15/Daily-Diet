import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import theme from "@theme/index";
import { BackButtonProps } from "./_types";

export function BackButton({ color }: BackButtonProps) {
	const navigation = useNavigation()

	function goBack() {
		navigation.goBack()
	}


	return (
		<Container onPress={goBack}>
			<ArrowLeft size={25} color={color} />
		</Container>
	)
}