import React, { useContext, useState, useRef } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { Icon } from '@ui-kitten/components';
import { Column } from "@ui/index";
import { CoreContext } from "@context/CoreContext";
import ModalWrapper from "../Wrapper";
import { Camera, Container, ContainerIconsActions } from "./styled";

export default function ModalCamera() {
	const coreContext = useContext(CoreContext);

	if (!coreContext) {
		throw new Error('ModalCamera must be used within a CoreContext provider');
	}

	const { modal, setModal, setAvatarUri } = coreContext;
	const [facing, setFacing] = useState<CameraType>('front');
	const [permission, requestPermission] = useCameraPermissions();
	const cameraRef = useRef<CameraView>(null);

	const toggleCameraFacing = () => {
		setFacing(current => (current === 'back' ? 'front' : 'back'));
	};

	const handleRequestPermission = async () => {
		const response = await requestPermission();
		if (!response.granted) {
			alert("Permissão negada para usar a câmera.");
		}
	};

	const takePicture = async () => {
		if (cameraRef.current) {
			const photo = await cameraRef.current.takePictureAsync();
			if (photo && photo.uri) {
				setAvatarUri(photo.uri); 
				setModal(null); 
			} else {
				console.error("Erro ao capturar a foto.");
			}
		}
	};

	return (
		<ModalWrapper title={modal?.title} close={() => setModal(null)}>
			<Column>
				{!permission?.granted ? (
					<View style={styles.permissionContainer}>
						<Text>Precisamos da sua permissão para acessar a câmera.</Text>
						<TouchableOpacity onPress={handleRequestPermission} style={styles.permissionButton}>
							<Text style={styles.permissionButtonText}>Conceder Permissão</Text>
						</TouchableOpacity>
					</View>
				) : (
					<Container style={styles.cameraContainer}>
						<Camera facing={facing} ref={cameraRef}>
							<ContainerIconsActions>
								<TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
									<Icon name="flip-2-outline" style={styles.icon} />
								</TouchableOpacity>
								<TouchableOpacity style={styles.captureButton} onPress={takePicture}>
									<Icon name="camera-outline" style={styles.icon} />
								</TouchableOpacity>
							</ContainerIconsActions>
						</Camera>
					</Container>
				)}
			</Column>
		</ModalWrapper>
	);
}

const styles = StyleSheet.create({
	permissionContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	permissionButton: {
		backgroundColor: '#4F63AC',
		padding: 10,
		borderRadius: 5,
		marginTop: 20,
	},
	permissionButtonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	cameraContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	camera: {
		width: '100%',
		height: 400,
		justifyContent: 'flex-end',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingBottom: 20,
	},
	flipButton: {
		backgroundColor: '#4F63AC',
		padding: 15,
		borderRadius: 10,
	},
	captureButton: {
		backgroundColor: '#4F63AC',
		padding: 15,
		borderRadius: 10,
	},
	icon: {
		width: 24,
		height: 24,
		tintColor: '#fff',
	},
});
