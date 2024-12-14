import React, { useContext, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { CoreContext } from '@context/CoreContext';

import ModalConfirm from '../Confirm';
import ModalPermissions from '../Permissions';
import ModalCamera from '../ModalCamera';

export default function ModalController() {
	const coreContext = useContext(CoreContext);

	if (!coreContext) {
		throw new Error('ModalController must be used within CoreContext');
	}

	const { modal, setModal } = coreContext;

	useEffect(() => {
		const backAction = () => {
			if (modal) {
				setModal(null);
				return true;
			}
			return false;
		};

		const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

		return () => {
			backHandler.remove();
		};
	}, [modal, setModal]);

	return (
		<>
			{modal?.type === 'confirm' && <ModalConfirm />}
			{modal?.type === 'permissions' && <ModalPermissions />}
			{modal?.type === 'camera' && <ModalCamera />}
		</>
	);
}
