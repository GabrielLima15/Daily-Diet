import IconComponent from "@assets/icons";
import { Icon } from "@ui-kitten/components";
import { WindowScreen } from "@ui/index";
import { CameraView } from "expo-camera";
import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
	padding-top: ${WindowScreen.height * 0.02}px;	
`;

export const AvatarContainer = styled.TouchableOpacity`
  border-radius: 88px;
  position: relative;
	border-radius: 88px;
	border: 4px solid black;
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 113px;
  height: 113px;
  border-radius: 88px;
`;

export const IconPerson = styled(Icon).attrs({
  name: 'person-outline'
})`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  color: #C4C4C4; 
`;

export const ContainerEditIcon = styled.View`
  position: absolute;
  bottom: 2px; 
  right: 0; 
  background-color: #4F63AC;
  border-radius: 50px;
  padding: 5px;
`;

export const IconEdit = styled(IconComponent).attrs({
  icon: 'iconEdit'
})`
`;
