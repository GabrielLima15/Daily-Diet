import { ArrowUpRight } from "phosphor-react-native";
import { ArrowTopRight, Container, SubTitle, Title, Wrapper, WrapperText } from "./styles";
import { CardProps } from "./_types";

export function Card({ backgroundColor, rounded, arrow, arrowColor, title, titleFontSize, subTitle, onPress, margin, size }: CardProps) {
	return (
		<Container  margin={margin} size={size}  backgroundColor={backgroundColor} rounded={rounded}>
			<Wrapper>

				{arrow && (
					<ArrowTopRight onPress={onPress}>
						<ArrowUpRight color={arrowColor} />
					</ArrowTopRight>
				)}

				<WrapperText>
					<Title titleFontSize={titleFontSize}>{title}</Title>
					<SubTitle>{subTitle}</SubTitle>
				</WrapperText>

			</Wrapper>
		</Container>
	)
}