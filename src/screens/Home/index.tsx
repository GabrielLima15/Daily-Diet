import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Header } from "@components/Header";
import theme from "@theme/index";
import { Plus } from "phosphor-react-native";
import { SectionList } from "react-native";
import { Blur, Container, Divider, DotMeal, HeaderSectionList, Hour, MealTitle, SectionListColumn, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Row, WindowScreen } from "@ui/index";

export function Home() {

	const DATA = [
		{
			title: '12.08.22',
			data: [
				{ hour: '12:00', meal: 'Pizza', approved: true },
				{ hour: '12:00', meal: 'Burger', approved: false },
				{ hour: '12:00', meal: 'Risotto', approved: true },
			],
		},
		{
			title: '13.08.22',
			data: [
				{ hour: '13:00', meal: 'Salad', approved: true },
				{ hour: '13:00', meal: 'Sandwich', approved: false },
				{ hour: '13:00', meal: 'Soup', approved: true },
			],
		},
		{
			title: '14.08.22',
			data: [
				{ hour: '14:00', meal: 'Pasta', approved: true },
				{ hour: '14:00', meal: 'Pizza', approved: false },
				{ hour: '14:00', meal: 'Potato', approved: true },
			],
		},
		{
			title: '15.08.22',
			data: [
				{ hour: '15:00', meal: 'Fish', approved: true },
				{ hour: '15:00', meal: 'Chicken', approved: false },
				{ hour: '15:00', meal: 'Vegetables', approved: true },
			],
		},
		{
			title: '16.08.22',
			data: [
				{ hour: '16:00', meal: 'Dessert', approved: true },
				{ hour: '16:00', meal: 'Cake', approved: false },
				{ hour: '16:00', meal: 'Ice Cream', approved: true },
			],
		},
		{
			title: '17.08.22',
			data: [
				{ hour: '17:00', meal: 'Snack', approved: true },
				{ hour: '17:00', meal: 'Nuts', approved: false },
				{ hour: '17:00', meal: 'Fruits', approved: true },
			],
		},
		{
			title: '18.08.22',
			data: [
				{ hour: '18:00', meal: 'Drink', approved: true },
				{ hour: '18:00', meal: 'Water', approved: false },
				{ hour: '18:00', meal: 'Coffee', approved: true },
			],
		},
		{
			title: '19.08.22',
			data: [
				{ hour: '19:00', meal: 'Dinner', approved: true },
				{ hour: '19:00', meal: 'Steak', approved: false },
				{ hour: '19:00', meal: 'Chicken', approved: true },
			],
		},
		{
			title: '20.08.22',
			data: [
				{ hour: '20:00', meal: 'Snack', approved: true },
				{ hour: '20:00', meal: 'Yogurt', approved: false },
				{ hour: '20:00', meal: 'Fruits', approved: true },
			],
		},
		{
			title: '21.08.22',
			data: [
				{ hour: '21:00', meal: 'Drink', approved: true },
				{ hour: '21:00', meal: 'Tea', approved: false },
				{ hour: '18:00', meal: 'Coffee', approved: true },
			],
		},
		{
			title: '22.08.22',
			data: [
				{ hour: '22:00', meal: 'Snack', approved: true },
				{ hour: '17:00', meal: 'Nuts', approved: false },
				{ hour: '17:00', meal: 'Fruits', approved: true },
			],
		},
	];

	const navigation = useNavigation()

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

			<Title>
				Refeições
			</Title>

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
				sections={DATA}
				keyExtractor={(item, index) => item.hour + item.meal + index}
				renderItem={({ item }) => (
					<SectionListColumn>
						<Hour>
							{item.hour}
						</Hour>

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
	)
}
