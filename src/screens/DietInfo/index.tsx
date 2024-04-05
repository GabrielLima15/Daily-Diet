import { BackButton } from "@components/BackButton";
import { Container, ContainerStates, Description, Group, GroupCards, NumberPercentage, Row, Title, TopContent } from "./styles";
import { Card } from "@components/Card";
import theme from "@theme/index";

export function DietInfo() {
	return (
		<Container>
			<TopContent>

				<BackButton color={theme.COLORS.green_dark}/>

				<Group>
					<NumberPercentage>
						90,86%
					</NumberPercentage>

					<Description>
						das refeições dentro da dieta
					</Description>
				</Group>

			</TopContent>

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
						title="109"
						subTitle="das refeições dentro da dieta"
						backgroundColor={theme.COLORS.gray_6}
					/>

					<Row>

						<Card
							margin="10px 0px"
							rounded={2}
							titleFontSize={theme.FONT_SIZE.XL}
							title="99"
							subTitle={`refeições dentro da ${`\n`} dieta`}
							backgroundColor={theme.COLORS.green_light}
						/>

						<Card
							margin="10px 0px"
							rounded={2}
							titleFontSize={theme.FONT_SIZE.XL}
							title="10"
							subTitle={`refeições fora da ${`\n`} dieta`}
							backgroundColor={theme.COLORS.red_light}
						/>

					</Row>
				</GroupCards>
			</ContainerStates>
		</Container>
	)
}