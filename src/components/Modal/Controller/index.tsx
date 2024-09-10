import React, { useContext, useEffect } from 'react';   
import { BackHandler } from 'react-native';

import { CoreContext } from '@context/CoreContext';

import ModalConfirm from '../Confirm';

type ModalType = 'confirm' | 'notifications' | 'options' | null;

interface ModalControllerProps {

}

export default function ModalController(props: ModalControllerProps): JSX.Element {
    const { modal, setModal } = useContext(CoreContext) as {
        modal: { type: ModalType } | null;
        setModal: (modal: ModalType | null) => void;
    };

    useEffect(() => {
        const backAction = () => {
            if (modal) {
                setModal(null);
                return true;
            }
            return false;
        };

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => {
            backHandler.remove();
        };
    }, [modal, setModal]);

    return (
        <>    
            {modal?.type === 'confirm' && <ModalConfirm />}
        </>
    );
}
