import { BackButton } from "@components/BackButton";
import { Container, ContainerButtonSpace, ContainerStates, Dot, Group, Row, Title, TitleDiet, TopContent } from "./styles";
import { Input } from "@components/Form/Input";
import { Button } from "@components/Button";
import theme, { getResponsiveSize } from "@theme/index";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const schema = z.object({
	name: z.string().nonempty({ message: 'Nome é obrigatório' }),
	description: z.string().nonempty({ message: 'Descrição é obrigatória' }),
	date: z.string().nonempty({ message: 'Data é obrigatória' }),
	hour: z.string().nonempty({ message: 'Hora é obrigatória' }),
});

export function NewMeal() {
	const [buttonStyles, setButtonStyles] = useState({
		sim: {
			color: theme.COLORS.gray_6,
			border: '0px solid transparent'
		},
		nao: {
			color: theme.COLORS.gray_6,
			border: '0px solid transparent'
		}
	});

	const { control, handleSubmit, formState: { errors } } = useForm({
		resolver: zodResolver(schema),
	});

	const navigation = useNavigation()

	const onSubmit = (data: any) => {
		const buttonValue = buttonStyles.sim.color === theme.COLORS.green_light ? 'Sim' : 'Não';
		data.buttonValue = buttonValue;

		navigation.navigate("withinDiet")
		console.log(data);
	};


	const handleButtonPress = (button: 'sim' | 'nao') => {
		setButtonStyles({
			sim: {
				color: button === 'sim' ? theme.COLORS.green_light : theme.COLORS.gray_6,
				border: button === 'sim' ? `1px solid ${theme.COLORS.green_dark}` : '0px solid transparent'
			},
			nao: {
				color: button === 'nao' ? theme.COLORS.red_light : theme.COLORS.gray_6,
				border: button === 'nao' ? `1px solid ${theme.COLORS.red_dark}` : '0px solid transparent'
			}
		});
	};


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
					errors={errors}
					keyboardType="default"
					control={control}
					name="name"
					label="Nome"
					margin={{ top: 15, right: 5, left: 5, }}
					paddingLabel={{ top: 2, bottom: 2, }}
					paddingInput={{ top: 4, bottom: 4, right: 2, left: 2 }}
				/>

				<Input
					errors={errors}
					keyboardType="default"
					control={control}
					name="description"
					multiline={true}
					height={40}
					label="Descrição"
					margin={{ right: 5, top: 6, left: 5, }}
					paddingLabel={{ top: 2, bottom: 2, }}
					paddingInput={{ top: 4, bottom: 4, right: 2, left: 2 }} />

				<Row>
					<Input
						errors={errors}
						keyboardType="number-pad"
						control={control}
						name="date"
						maskType="date"
						width={getResponsiveSize(22)}
						label="Data"
						margin={{ top: 6, bottom: 10, }}
						paddingLabel={{ top: 2, bottom: 2, }}
						paddingInput={{ top: 4, bottom: 4, right: 2, left: 2 }}
					/>

					<Input
						errors={errors}
						keyboardType="number-pad"
						control={control}
						name="hour"
						maskType="time"
						width={getResponsiveSize(22)}
						label="Hora"
						margin={{ top: 6, bottom: 10, }}
						paddingLabel={{ top: 2, bottom: 2, }}
						paddingInput={{ top: 4, bottom: 4, right: 2, left: 2 }}
					/>
				</Row>


				<TitleDiet>Está dentro da dieta?</TitleDiet>

				<Row>
					<Button
						backgroundColor={buttonStyles.sim.color}
						borderStyle={buttonStyles.sim.border}
						icon
						iconComponent={<Dot backgroudColor={theme.COLORS.green_dark} />}
						rounded={2}
						onPress={() => handleButtonPress('sim')}
						text="Sim"
						padding={{ top: 5, bottom: 5, left: 5, right: 5 }}
						textColor={theme.COLORS.gray_2}
						fontFamily={theme.FONT_FAMILY.BOLD}
						margin={{ top: 3 }}
						size={{ width: getResponsiveSize(22) }}
					/>

					<Button
						backgroundColor={buttonStyles.nao.color}
						borderStyle={buttonStyles.nao.border}
						icon
						iconComponent={<Dot backgroudColor={theme.COLORS.red_dark} />}
						rounded={2}
						onPress={() => handleButtonPress('nao')}
						text="Não"
						padding={{ top: 5, bottom: 5, left: 5, right: 5 }}
						textColor={theme.COLORS.gray_2}
						fontFamily={theme.FONT_FAMILY.BOLD}
						margin={{ top: 3 }}
						size={{ width: getResponsiveSize(22) }}
					/>
				</Row>

				<ContainerButtonSpace>
					<Button
						backgroundColor={theme.COLORS.gray_2}
						rounded={2}
						onPress={handleSubmit(onSubmit)}
						text="Cadastrar refeição"
						padding={{ top: 5, bottom: 5, left: 5, right: 5, }}
						textColor={theme.COLORS.white}
						fontFamily={theme.FONT_FAMILY.BOLD}
						margin={{ bottom: getResponsiveSize(17) }}
						size={{ width: 120 }}
					/>
				</ContainerButtonSpace>

			</ContainerStates>
		</Container >
	)
}