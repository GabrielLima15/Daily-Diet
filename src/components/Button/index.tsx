import { Container, IconContainer, TextButton, Wrapper } from "./styles";
import { ButtonProps } from "./_types";

export function Button({
  backgroundColor,
  rounded,
  icon,
  iconComponent,
  text,
  onPress,
  margin,
  padding,
  fontFamily,
  textColor,
	size
}: ButtonProps) {
  return (
    <Container
      backgroundColor={backgroundColor}
      rounded={rounded}
      onPress={onPress}
			margin={margin}
      padding={padding}
			size={size}
    >
      <Wrapper>
        {icon && (
          <IconContainer>
            {iconComponent}
          </IconContainer>
        )}

        <TextButton
          fontFamily={fontFamily}
          textColor={textColor}>
          {text}
        </TextButton>
      </Wrapper>
    </Container>
  );
}