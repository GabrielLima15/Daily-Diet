import { BackButton } from "@components/BackButton";
import { Container, ContainerStates, Description, Group, NumberPercentage, Title, TopContent } from "./styles";
import { Card } from "@components/Card";
import theme, { getResponsiveSize } from "@theme/index";
import { Column, Row, WindowScreen } from "@ui/index";

export function DietInfo() {
	return (
		<Container>
			<TopContent>

				<BackButton color={theme.COLORS.green_dark} />

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

				<Column gap={20}>
					<Card
						rounded={5}
						titleFontSize={theme.FONT_SIZE.XL}
						title="22"
						subTitle="das refeições dentro da dieta"
						backgroundColor={theme.COLORS.gray_6}
						width={WindowScreen.width * 0.9}
						height={102}
					/>

					<Card
						rounded={5}
						titleFontSize={theme.FONT_SIZE.XL}
						title="109"
						subTitle="das refeições dentro da dieta"
						backgroundColor={theme.COLORS.gray_6}
						width={WindowScreen.width * 0.9}
						height={102}
					/>
				</Column>

				<Row gap={20} paddingTop={20}>
					<Card
						rounded={5}
						titleFontSize={theme.FONT_SIZE.XL}
						title="99"
						subTitle={`refeições dentro da ${`\n`} dieta`}
						backgroundColor={theme.COLORS.green_light}
						width={WindowScreen.width * 0.43}
						height={102}
					/>

					<Card
						rounded={5}
						titleFontSize={theme.FONT_SIZE.XL}
						title="10"
						subTitle={`refeições fora da ${`\n`} dieta`}
						backgroundColor={theme.COLORS.red_light}
						width={WindowScreen.width * 0.43}
						height={102}
					/>

				</Row>
			</ContainerStates>
		</Container>
	)
}