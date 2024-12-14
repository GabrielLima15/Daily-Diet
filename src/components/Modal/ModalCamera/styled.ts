import { WindowScreen } from "@ui/index";
import { CameraView } from "expo-camera";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Camera = styled(CameraView).attrs({
})`
	width: ${WindowScreen.width * 0.9}px;
	height: ${WindowScreen.height * 0.5}px;
	border-radius: 20px;
`

export const ContainerIconsActions = styled.View`
  position: absolute;
	width: 100%;
	bottom: 0;
	flex-direction: row;
	justify-content: space-evenly;
	padding-bottom: ${WindowScreen.height * 0.02}px;
`;