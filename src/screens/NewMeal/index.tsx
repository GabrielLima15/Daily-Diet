import { BackButton } from "@components/BackButton";
import { Container, ContainerStates, Dot, Group, Row, Title, TopContent } from "./styles";
import { Input } from "@components/Form/Input";
import { Button } from "@components/Button";
import theme from "@theme/index";

export function NewMeal() {
	return (
		<Container>
			<TopContent>

				<BackButton />

				<Group>
					<Title>
						Nova refeição
					</Title>
				</Group>

			</TopContent>

			<ContainerStates>
				<Input
					label="Nome"
					margin={{ top: 15, right: 5, left: 5, }}
					paddingLabel={{ top: 2, bottom: 2, }}
					paddingInput={{ top: 4, bottom: 4, right: 2, left: 2 }}
				/>

				<Input
					multiline={true}
					height={100}
					label="Descrição"
					margin={{ right: 5, top: 6, left: 5, }}
					paddingLabel={{ top: 2, bottom: 2, }}
					paddingInput={{ top: 4, bottom: 4, right: 2, left: 2 }} />

				<Row>
					<Input
						maskType="date"
						width={175}
						label="Data"
						margin={{ top: 6}}
						paddingLabel={{ top: 2, bottom: 2, }}
						paddingInput={{ top: 4, bottom: 4, right: 2, left: 2 }}
					/>

					<Input
						maskType="time"
						width={175}
						label="Hora"
						margin={{ top: 6}}
						paddingLabel={{ top: 2, bottom: 2, }}
						paddingInput={{ top: 4, bottom: 4, right: 2, left: 2 }}
					/>
				</Row>

				<Row>
					<Button
						backgroundColor={theme.COLORS.gray_6}
						icon
						iconComponent={<Dot backgroudColor={theme.COLORS.green_dark} />}
						rounded={2}
						onPress={() => console.log('teste')}
						text="Sim"
						padding={{top: 5, bottom: 5, left: 5, right: 5,}}
						textColor={theme.COLORS.gray_2}
						fontFamily={theme.FONT_FAMILY.BOLD}
					/>

					<Button
						backgroundColor={theme.COLORS.gray_6}
						icon
						iconComponent={<Dot backgroudColor={theme.COLORS.red_dark} />}
						rounded={2}
						onPress={() => console.log('teste')}
						text="Não"
						padding={{top: 5, bottom: 5, left: 5, right: 5,}}
						textColor={theme.COLORS.gray_2}
						fontFamily={theme.FONT_FAMILY.BOLD}
					/>
				</Row>
			</ContainerStates>
		</Container>
	)
}