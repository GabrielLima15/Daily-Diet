import { Container } from "./styles";

import Logo from '@assets/Logo.svg'
import Avatar from '@assets/Avatar.svg'

export function Header() {
	return (
		<Container>
			<Logo width={80} height={80} />

			<Avatar width={40} height={40} />
		</Container>
	)
}