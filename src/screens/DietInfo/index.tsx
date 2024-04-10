import { BackButton } from "@components/BackButton";
import { Column, Container, ContainerStates, Description, Group, NumberPercentage, Row, Title, TopContent } from "./styles";
import { Card } from "@components/Card";
import theme, { getResponsiveSize } from "@theme/index";

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

				<Column>
					<Card
						margin={{ top: 5, bottom: 5, left: 2, right: 2 }}
						rounded={2}
						size={{ width: getResponsiveSize(42)}}
						titleFontSize={theme.FONT_SIZE.XL}
						title="22"
						subTitle="das refeições dentro da dieta"
						backgroundColor={theme.COLORS.gray_6}
					/>

					<Card
						margin={{ bottom: 5, left: 2, right: 2 }}
						rounded={2}
						size={{ width: getResponsiveSize(42)}}
						titleFontSize={theme.FONT_SIZE.XL}
						title="109"
						subTitle="das refeições dentro da dieta"
						backgroundColor={theme.COLORS.gray_6}
					/>
				</Column>

				<Row>

					<Card
						size={{ width: getResponsiveSize(20)}}
						margin={{ left: 2, right: 2 }}
						rounded={2}
						titleFontSize={theme.FONT_SIZE.XL}
						title="99"
						subTitle={`refeições dentro da ${`\n`} dieta`}
						backgroundColor={theme.COLORS.green_light}
					/>

					<Card
						size={{ width: getResponsiveSize(20)}}
						margin={{ left: 2, right: 2 }}
						rounded={2}
						titleFontSize={theme.FONT_SIZE.XL}
						title="10"
						subTitle={`refeições fora da ${`\n`} dieta`}
						backgroundColor={theme.COLORS.red_light}
					/>

				</Row>
			</ContainerStates>
		</Container>
	)
}