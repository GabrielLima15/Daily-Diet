import { BackButton } from "@components/BackButton";
import { Container, ContainerButtonSpace, ContainerStates, Dot, Group, Title, TitleDiet, TopContent } from "./styles";
import { Input } from "@components/Form/Input";
import { Button } from "@components/Button";
import theme from "@theme/index";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Column, Row, WindowScreen } from "@ui/index";
import { useMealContext } from "@context/MealContext";

const schema = z.object({
  name: z.string().nonempty({ message: 'Nome é obrigatório' }),
  description: z.string().nonempty({ message: 'Descrição é obrigatória' }),
  date: z.string().nonempty({ message: 'Data é obrigatória' }),
  hour: z.string().nonempty({ message: 'Hora é obrigatória' }),
});

export function NewMeal() {
  const { diet, createDiet } = useMealContext();
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

  const navigation = useNavigation();

  const onSubmit = (data: any) => {
    const buttonValue = buttonStyles.sim.color === theme.COLORS.green_light ? 'Sim' : 'Não';
    data.buttonValue = buttonValue;

    const newMeal = {
      hour: data.hour,
      meal: data.name,
      approved: buttonValue === 'Sim', 
    };

    if (diet) {
      const updatedDiet = {
        ...diet,
        data: [...diet.data, newMeal],
      };
      createDiet(updatedDiet);
    } else {
      const newDiet = {
        title: data.date,
        data: [newMeal],
      };
      createDiet(newDiet); 
    }

    if (buttonValue === 'Sim') {
      navigation.navigate("withinDiet"); 
    } else {
      navigation.navigate("outsideDiet");
    }
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
        <Column paddingTop={50}>
          <Input
            errors={errors}
            keyboardType="default"
            control={control}
            name="name"
            label="Nome"
            width={WindowScreen.width * 0.89}
            height={45}
          />
          <Input
            errors={errors}
            keyboardType="default"
            control={control}
            name="description"
            multiline={true}
            label="Descrição"
            width={WindowScreen.width * 0.89}
            height={120}
          />
        </Column>

        <Row paddingTop={30} gap={20}>
          <Input
            errors={errors}
            keyboardType="number-pad"
            control={control}
            name="date"
            maskType="date"
            width={WindowScreen.width * 0.42}
            height={45}
            label="Data"
            placeholder="DD/MM/YYYY"
          />
          <Input
            errors={errors}
            keyboardType="number-pad"
            control={control}
            name="hour"
            maskType="time"
            width={WindowScreen.width * 0.42}
            height={45}
            label="Hora"
            placeholder="HH:MM"
          />
        </Row>

        <TitleDiet>Está dentro da dieta?</TitleDiet>

        <Row paddingTop={10} gap={20}>
          <Button
            backgroundColor={buttonStyles.sim.color}
            borderStyle={buttonStyles.sim.border}
            icon
            iconComponent={<Dot backgroudColor={theme.COLORS.green_dark} />}
            rounded={5}
            onPress={() => handleButtonPress('sim')}
            text="Sim"
            width={WindowScreen.width * 0.42}
            height={50}
            textColor={theme.COLORS.gray_2}
            fontFamily={theme.FONT_FAMILY.BOLD}
          />

          <Button
            backgroundColor={buttonStyles.nao.color}
            borderStyle={buttonStyles.nao.border}
            icon
            iconComponent={<Dot backgroudColor={theme.COLORS.red_dark} />}
            rounded={5}
            onPress={() => handleButtonPress('nao')}
            text="Não"
            width={WindowScreen.width * 0.42}
            height={50}
            textColor={theme.COLORS.gray_2}
            fontFamily={theme.FONT_FAMILY.BOLD}
          />
        </Row>

        <ContainerButtonSpace>
          <Button
            backgroundColor={theme.COLORS.gray_2}
            rounded={5}
            onPress={handleSubmit(onSubmit)}
            text="Cadastrar refeição"
            width={WindowScreen.width * 0.89}
            height={50}
            textColor={theme.COLORS.white}
            fontFamily={theme.FONT_FAMILY.BOLD}
          />
        </ContainerButtonSpace>
      </ContainerStates>
    </Container>
  );
}
