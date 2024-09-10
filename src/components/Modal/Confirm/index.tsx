import React, { useContext, useState } from 'react';

import { ButtonSpace } from './styled';
import { BodyAnimation } from '@ui/index';

import { CoreContext } from '@context/CoreContext';

import ModalWrapper from '../Wrapper';
import { Button } from '@components/Button';

interface ModalConfirmProps {

}

export default function ModalConfirm(props: ModalConfirmProps): JSX.Element {
    const { modal, setModal } = useContext(CoreContext) as {
        modal: {
            title?: string;
            action?: () => Promise<void>;
        } | null;
        setModal: (modal: null) => void;
    };

    const [loading, setLoading] = useState<boolean>(false);

    const close = () => {
        setModal(null);
    };

    const refuse = () => {
        close();
    };

    const confirm = async () => {
        if (modal?.action && typeof modal.action === 'function') {
            setLoading(true);
            await modal.action();
            setLoading(false);
        }
        close();
    };

    return (
        <>
            <ModalWrapper fadeclose={close} title={modal?.title}>
                <Button onPress={confirm} loading={loading} text='Confirmar'/>
                <ButtonSpace />
                <Button onPress={refuse} text='Cancelar'/>
            </ModalWrapper>
        </>
    );
}
