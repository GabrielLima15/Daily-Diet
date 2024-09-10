import { ArrowUpRight } from "phosphor-react-native";
import { ArrowTopRight, Container, SubTitle, Title, Wrapper, WrapperText } from "./styles";
import { CardProps } from "./_types";
import { WindowScreen } from "@ui/index";

export function Card({
  backgroundColor,
  rounded,
  arrow,
  arrowColor,
  title,
  titleFontSize,
  subTitle,
  onPress,
  width = WindowScreen.width * 0.9,  
  height = 150,  
}: CardProps) {
  return (
    <Container backgroundColor={backgroundColor} rounded={rounded} width={width} height={height}>
      {arrow && (
        <ArrowTopRight onPress={onPress}>
          <ArrowUpRight color={arrowColor} />
        </ArrowTopRight>
      )}
      <Wrapper>
        <WrapperText>
          <Title titleFontSize={titleFontSize}>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </WrapperText>
      </Wrapper>
    </Container>
  );
}
