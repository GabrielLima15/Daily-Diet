import { ArrowUpRight } from "phosphor-react-native";
import { CardProps } from "./_types";
import { ArrowTopRight, Container, SubTitle, Title, Wrapper, WrapperText } from "./styles";

export function Card({ backgroundColor, rounded, arrow, arrowColor, title, titleFontSize, subTitle }: CardProps) {
	return (
		<Container backgroundColor={backgroundColor} rounded={rounded}>
			<Wrapper>

				{arrow && (
					<ArrowTopRight>
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