import React, { useContext } from 'react';
import { Container, AvatarContainer, Avatar, IconPerson, ContainerEditIcon, IconEdit } from './styled';
import { CoreContext } from '@context/CoreContext';
import { CameraView } from 'expo-camera';

const AvatarCamera = () => {
	const coreContext = useContext(CoreContext);

	if (!coreContext) {
		throw new Error('AvatarCamera must be used within a CoreContext provider');
	}

	const { setModal, avatarUri } = coreContext;
	console.log("🚀 ~ AvatarCamera ~ avatarUri:", avatarUri);

	const handleCameraOpen = () => {
		setModal({
			type: 'camera',
			title: 'Câmera',
			message: 'Capture sua foto',
		});
	};

	return (
		<Container>
			<CameraView style={{ flex: 1, backgroundColor: 'transparent', }} />

			<AvatarContainer onPress={handleCameraOpen}>
				{avatarUri ? (
					<Avatar source={{ uri: avatarUri }} />
				) : (
					<IconPerson name="person-outline" />
				)}
				<ContainerEditIcon>
					<IconEdit width={20} height={20} icon='iconEdit' />
				</ContainerEditIcon>
			</AvatarContainer>
		</Container>
	);
};

export default AvatarCamera;
