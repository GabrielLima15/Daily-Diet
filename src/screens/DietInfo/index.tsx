import { BackButton } from "@components/BackButton";
import { Container, ContainerStates, Description, Group, GroupCards, NumberPercentage, Row, Title } from "./styles";
import { Card } from "@components/Card";
import theme from "@theme/index";

export function DietInfo() {
	return (
		<Container>
			<BackButton />

			<Group>
				<NumberPercentage>
					90,86%
				</NumberPercentage>

				<Description>
					Lorem ipsum dolor sit.
				</Description>
			</Group>

			<ContainerStates>
				<Title>Estatísticas gerais</Title>

				<GroupCards>
					<Card
						margin="10px 0px"
						rounded={2}
						titleFontSize={theme.FONT_SIZE.XL}
						title="22"
						subTitle="das refeições dentro da dieta"
						backgroundColor={theme.COLORS.gray_6}
					/>

					<Card
						margin="10px 0px"
						rounded={2}
						titleFontSize={theme.FONT_SIZE.XL}
						title="22"
						subTitle="das refeições dentro da dieta"
						backgroundColor={theme.COLORS.gray_6}
					/>

					<Row>

						<Card
							margin="10px 0px"
							rounded={2}
							titleFontSize={theme.FONT_SIZE.XL}
							title="22"
							subTitle={`refeições dentro da ${`\n`} dieta`}
							backgroundColor={theme.COLORS.green_light}
						/>

						<Card
							margin="10px 0px"
							rounded={2}
							titleFontSize={theme.FONT_SIZE.XL}
							title="22"
							subTitle={`refeições dentro da ${`\n`} dieta`}
							backgroundColor={theme.COLORS.red_light}
						/>

					</Row>
				</GroupCards>
			</ContainerStates>
		</Container>
	)
}