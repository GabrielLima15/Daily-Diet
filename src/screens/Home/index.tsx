import React from 'react';
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Header } from "@components/Header";
import theme from "@theme/index";
import { Plus } from "phosphor-react-native";
import { SectionList } from "react-native";
import { Blur, Container, Divider, DotMeal, HeaderSectionList, Hour, MealTitle, SectionListColumn, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Row, WindowScreen } from "@ui/index";
import { useMealContext } from '@context/MealContext';

export function Home() {
	const { diet } = useMealContext();
	const navigation = useNavigation();

	if (!diet) {
		return (
			<Container>
				<Header />
				<Title>Refeições</Title>
				<Row paddingTop={10}>
					<Button
						backgroundColor={theme.COLORS.gray_2}
						rounded={5}
						icon
						iconComponent={<Plus color={theme.COLORS.white} weight={"bold"} size={15} />}
						onPress={() => navigation.navigate('newMeal')}
						text="Nova Refeição"
						width={WindowScreen.width * 0.89}
						height={50}
						textColor={theme.COLORS.white}
						fontFamily={theme.FONT_FAMILY.BOLD}
					/>
				</Row>
			</Container>
		);
	}

	return (
		<Container>
			<Header />

			<Row>
				<Card
					onPress={() => navigation.navigate('dietInfo')}
					rounded={5}
					arrow
					arrowColor={theme.COLORS.green_dark}
					titleFontSize={theme.FONT_SIZE.XXXL}
					title="90,86%"
					subTitle="das refeições dentro da dieta"
					width={WindowScreen.width * 0.9}
					height={102}
				/>
			</Row>

			<Title>Refeições</Title>

			<Row paddingTop={10}>
				<Button
					backgroundColor={theme.COLORS.gray_2}
					rounded={5}
					icon
					iconComponent={<Plus color={theme.COLORS.white} weight={"bold"} size={15} />}
					onPress={() => navigation.navigate('newMeal')}
					text="Nova Refeição"
					width={WindowScreen.width * 0.89}
					height={50}
					textColor={theme.COLORS.white}
					fontFamily={theme.FONT_FAMILY.BOLD}
				/>
			</Row>

			<SectionList
				sections={diet ? [diet] : []}
				keyExtractor={(item, index) => item.hour + item.meal + index}
				renderItem={({ item }) => (
					<SectionListColumn>
						<Hour>{item.hour}</Hour>

						<Divider />

						<MealTitle>{item.meal}</MealTitle>

						<DotMeal PercentageAboveX={item.approved} />
					</SectionListColumn>
				)}
				renderSectionHeader={({ section: { title } }) => (
					<HeaderSectionList>{title}</HeaderSectionList>
				)}
			/>

			<Blur />
		</Container>
	);
}
