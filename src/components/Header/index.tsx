import { Avatar, Container, Logo } from "./styles";

export function Header() {
	return (
		<Container>
			<Logo icon="logo" width={100} height={100} />

			<Avatar icon="user" width={40} height={40} />
		</Container>
	)
}