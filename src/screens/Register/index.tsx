import React, { useContext } from 'react';
import { Container, Logo, Spacer, Subtitle, Title, TitleAcess } from "./styled";
import { Column, Row, WindowScreen } from "@ui/index";
import { useForm } from 'react-hook-form';
import { Input } from '@components/Form/Input';
import { Button } from '@components/Button';
import theme from '@theme/index';
import { useNavigation } from '@react-navigation/native';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { DoRegister } from '@services/authentication';
import AvatarCamera from '@components/Camera';
import { CoreContext } from '@context/CoreContext';
import { PostImage } from '@services/api';

const schema = z
	.object({
		name: z.string().nonempty({ message: 'Nome é obrigatório' }),
		email: z
			.string()
			.email({ message: 'Email inválido' })
			.nonempty({ message: 'Email é obrigatório' }),
		password: z
			.string()
			.min(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
			.nonempty({ message: 'Senha é obrigatória' }),
		confirmPassword: z.string().nonempty({ message: 'Confirmação de senha é obrigatória' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas não correspondem',
		path: ['confirmPassword'],
	});

export default function Register() {
	const coreContext = useContext(CoreContext);

	if (!coreContext) {
		throw new Error('AvatarCamera must be used within a CoreContext provider');
	}

	const { setModal, avatarUri } = coreContext;

	const { control, handleSubmit, formState: { errors } } = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data: any) => {
		try {
			// Criação do payload para o registro
			const payload = {
				username: data.name,
				email: data.email,
				password: data.password,
				avatar: avatarUri,  // avatarUri agora contém a URL da imagem
			};
			console.log("🚀 ~ onSubmit ~ payload:", payload);
	
			// Realizar o registro do usuário
			const response = await DoRegister(payload);
			console.log("🚀 ~ onSubmit ~ response:", response);
	
		} catch (error) {
			console.log("🚀 ~ onSubmit ~ error:", error);
		}
	};
	


	const navigation = useNavigation();

	const login = () => {
		navigation.navigate('login');
	};

	return (
		<Container>
			<Column paddingTop={WindowScreen.height * 0.02}>
				<Logo icon="fortKnife" width={70} height={70} />
				<Title>Boas vindas!</Title>
				<Subtitle>{`Crie sua conta e acompanhe sua \n dieta de forma simples e organizada`}</Subtitle>
			</Column>

			<AvatarCamera />

			<Column paddingTop={WindowScreen.height * 0.01} gap={10}>
				<Input
					errors={errors}
					keyboardType="default"
					control={control}
					name="name"
					label="Nome"
					width={WindowScreen.width * 0.8}
					height={45}
					placeholder="Digite seu nome"
				/>

				<Input
					errors={errors}
					keyboardType="email-address"
					control={control}
					name="email"
					label="Email"
					width={WindowScreen.width * 0.8}
					height={45}
					placeholder="Digite seu email"
				/>

				<Input
					errors={errors}
					keyboardType="default"
					control={control}
					name="password"
					label="Senha"
					width={WindowScreen.width * 0.8}
					height={45}
					secureTextEntry={true}
					placeholder="Digite sua senha"
				/>

				<Input
					errors={errors}
					keyboardType="default"
					control={control}
					name="confirmPassword"
					label="Confirmar Senha"
					width={WindowScreen.width * 0.8}
					height={45}
					secureTextEntry={true}
					placeholder="Digite sua senha novamente"
				/>
			</Column>

			<Row paddingTop={20}>
				<Button backgroundColor={theme.COLORS.gray_2} text='Criar' onPress={handleSubmit(onSubmit)} />
			</Row>

			<Row paddingTop={40}>
				<TitleAcess>Já tem uma conta?</TitleAcess>
			</Row>

			<Row>
				<Button backgroundColor={theme.COLORS.gray_3} text='Ir para o login' onPress={login} />
			</Row>

			<Spacer />
		</Container>
	);
}
