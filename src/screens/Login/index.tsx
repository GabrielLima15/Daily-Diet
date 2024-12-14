import React from 'react';
import { BottomTab, Container, Logo, LogoTitle, Title, TitleAcess, WrapperScroll } from "./styled";
import { Column, Row, WindowScreen } from "@ui/index";
import { useForm } from 'react-hook-form';
import { Input } from '@components/Form/Input';
import { Button } from '@components/Button';
import theme from '@theme/index';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigation();

  const onSubmit = (data: any) => {
    console.log('Dados do formulário:', data);
  };

  const handleRegisterNewAccount = () => {
    navigation.navigate('register');
  };

  return (
    <WrapperScroll>
      <Container>
        <Column>
          <Logo icon="fortKnife" width={70} height={70} />
          <LogoTitle icon="logoTitle" width={150} height={150} />
          <Title>{`Seu espaço para refeições saudáveis \n Organize sua dieta`}</Title>
        </Column>

        <Column paddingTop={50} gap={20}>
          <TitleAcess>Acesse sua conta</TitleAcess>
          <Input
            width={WindowScreen.width * 0.8}
            label="Email"
            placeholder="Digite seu email"
            control={control}
            secureTextEntry={false}
            name="email"
            keyboardType="email-address"
            errors={errors}
          />

          <Input
            width={WindowScreen.width * 0.8}
            label="Senha"
            placeholder="Digite sua senha"
            control={control}
            name="password"
            keyboardType="default"
            secureTextEntry={true}
            errors={errors}
          />
        </Column>

        <Row paddingTop={20}>
          <Button backgroundColor={theme.COLORS.gray_2} text='Entrar' onPress={handleSubmit(onSubmit)} />
        </Row>
      </Container>

      <Column paddingTop={30}>
        <BottomTab>
          <Row>
            <TitleAcess>Ainda não tem acesso?</TitleAcess>
          </Row>

          <Row>
            <Button backgroundColor={theme.COLORS.gray_3} text='Criar uma conta' onPress={handleRegisterNewAccount} />
          </Row>
        </BottomTab>
      </Column>
    </WrapperScroll>
  );
}
