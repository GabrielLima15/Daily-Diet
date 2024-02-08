import { Header } from "@components/Header";
import { Container } from "./styles";
import theme from "@theme/index";
import { Card } from "@components/Card";

export function Home() {
	return (
		<Container>
			<Header />

			<Card
				rounded
				arrow
				arrowColor={theme.COLORS.green_dark}
				titleFontSize={theme.FONT_SIZE.XXXL}
				title="90,86%"
				subTitle="das refeições dentro da dieta"
			/>

		</Container>
	)
}