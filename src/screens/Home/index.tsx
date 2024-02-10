import { Header } from "@components/Header";
import { Container } from "./styles";
import theme from "@theme/index";
import { Card } from "@components/Card";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";

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

			<Button
				backgroundColor={theme.COLORS.gray_2}
				rounded={2}
				icon
				iconComponent={<Plus color={theme.COLORS.white} weight={"bold"} size={15} />}
				WidthAndHeight={[5, 10]}
				spacing={[5, 0]}
				onPress={() => { }}
				text="Nova Refeição"
				textColor={theme.COLORS.white}
				fontFamily={theme.FONT_FAMILY.BOLD}
			/>

		</Container>
	)
}