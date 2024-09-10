import React from 'react';
import { Container, IconContainer, TextButton, Wrapper } from "./styles";
import { ButtonProps } from "./_types";
import { Load, WindowScreen } from '@ui/index'; 

export function Button({
  backgroundColor,
  rounded,
  icon,
  iconComponent,
  text,
  onPress,
  fontFamily,
  textColor,
  width = WindowScreen.width * 0.8,  
  height = 45,  
  borderStyle,
  loading 
}: ButtonProps) {
  return (
    <Container
      backgroundColor={backgroundColor}
      borderStyle={borderStyle}
      rounded={rounded}
      onPress={!loading ? onPress : () => {}} 
      width={width}  // Aplicando a largura
      height={height}  // Aplicando a altura
    >
      <Wrapper>
        {loading ? (
          <Load /> 
        ) : (
          <>
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
          </>
        )}
      </Wrapper>
    </Container>
  );
}
