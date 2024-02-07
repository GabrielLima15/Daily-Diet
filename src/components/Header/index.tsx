import { Container } from "./styles";

import Logo from '@assets/Logo.svg'
import Avatar from '@assets/Avatar.svg'

export function Header() {
	return (
		<Container>
			<Logo width={120} height={40} />

			<Avatar width={120} height={40} />
		</Container>
	)
}