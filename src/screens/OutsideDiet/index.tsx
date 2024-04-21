import { Button } from "@components/Button";

import IconPeople from "@assets/outside-diet.svg"
import theme from "@theme/index";
import { useNavigation } from "@react-navigation/native";
import { Container, Group, Highlight, Subtitle, Title } from "./styles";

export function OutsideDiet() {

	const navigation = useNavigation()

	return (
		<Container>

			<Group>

				<Title>
					Que Pena!
				</Title>

				<Subtitle>
					Você <Highlight>saiu da dieta</Highlight> dessa vez, mas continue {`\n`} se esforçando e não desista!
				</Subtitle>

			</Group>

			<IconPeople width={280} height={400} />

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