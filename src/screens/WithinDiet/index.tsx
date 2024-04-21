import { Button } from "@components/Button";

import IconPeople from "@assets/within-diet.svg"
import theme from "@theme/index";
import { useNavigation } from "@react-navigation/native";
import { Container, Group, Title, Subtitle, Highlight } from "./styles";

export function WithinDiet() {

	const navigation = useNavigation()

	return (
		<Container>

			<Group>

				<Title>
					Continue assim!
				</Title>

				<Subtitle>
				Você continua <Highlight>dentro da dieta</Highlight> . Muito bem!
				</Subtitle>

			</Group>

			<IconPeople  width={280} height={400}/>

			<Button
				backgroundColor={theme.COLORS.gray_2}
				rounded={2}
				padding={{ top: 5, bottom: 5, left: 5, right: 5, }}
				margin={{ left: 5, right: 5, top: 5, bottom: 5 }}
				onPress={() => navigation.navigate('home')}
				text="Ir para a página inicial"
				textColor={theme.COLORS.white}
				fontFamily={theme.FONT_FAMILY.BOLD}
			/>
		</Container>
	)
}