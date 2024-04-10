import { BackButton } from "@components/BackButton";
import { Container, ContainerStates, Dot, Group, Row, Title, TitleDiet, TopContent } from "./styles";
import { Input } from "@components/Form/Input";
import { Button } from "@components/Button";
import theme, { getResponsiveSize } from "@theme/index";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
	name: z.string().nonempty({ message: 'Nome é obrigatório' }),
	description: z.string().nonempty({ message: 'Descrição é obrigatória' }),
	date: z.string().nonempty({ message: 'Data é obrigatória' }),
	hour: z.string().nonempty({ message: 'Hora é obrigatória' }),
});

export function NewMeal() {
	const { control, handleSubmit, formState: { errors } } = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: any) => {
		data.buttonValue = buttonValue;
		console.log(data);
	};

	const [buttonValue, setButtonValue] = useState<String>('');
	

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
					keyboardType="default"
					control={control}
					name="name"
					label="Nome"
					margin={{ top: 15, right: 5, left: 5, }}
					paddingLabel={{ top: 2, bottom: 2, }}
					paddingInput={{ top: 4, bottom: 4, right: 2, left: 2 }}
				/>

				<Input
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
						backgroundColor={theme.COLORS.gray_6}
						icon
						iconComponent={<Dot backgroudColor={theme.COLORS.green_dark} />}
						rounded={2}
						onPress={() => setButtonValue('Sim')}
						text="Sim"
						padding={{ top: 5, bottom: 5, left: 5, right: 5, }}
						textColor={theme.COLORS.gray_2}
						fontFamily={theme.FONT_FAMILY.BOLD}
						margin={{ top: 3 }}
						size={{ width: getResponsiveSize(22) }}
					/>

					<Button
						backgroundColor={theme.COLORS.gray_6}
						icon
						iconComponent={<Dot backgroudColor={theme.COLORS.red_dark} />}
						rounded={2}
						onPress={() => setButtonValue('Não')}
						text="Não"
						padding={{ top: 5, bottom: 5, left: 5, right: 5, }}
						textColor={theme.COLORS.gray_2}
						fontFamily={theme.FONT_FAMILY.BOLD}
						margin={{ top: 3 }}
						size={{ width: getResponsiveSize(22) }}
					/>
				</Row>

				<Group>
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
				</Group>

			</ContainerStates>
		</Container >
	)
}