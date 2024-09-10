import React, { ReactNode } from 'react';

import {
    ModalContainer,
    ModalFader,
    ModalBody,
    RowHeader,
    HeaderItem,
    HeaderTitle,
    HeaderClose,
    HeaderCloseIcon,
    MenuContent,
    HeaderTitleContent,
    HeaderTitleIcon
} from './styled';

import { Scroll } from '@ui/index';

interface ModalWrapperProps {
    fadeclose?: () => void;
    close?: () => void;
    title?: string;
    icon?: string;
    children: ReactNode;
}

export default function ModalWrapper({
    fadeclose,
    close,
    title,
    icon,
    children
}: ModalWrapperProps): JSX.Element {
    return (
        <>
            <ModalContainer>
                <ModalFader onPress={fadeclose ? fadeclose : close} />
                <ModalBody>
                    <Scroll>
                        <RowHeader>
                            <HeaderItem />
                            <HeaderTitleContent>
                                {title ? <HeaderTitle>{title}</HeaderTitle> : null}
                                {icon ? <HeaderTitleIcon icon={icon} /> : null}
                            </HeaderTitleContent>
                            {!close ? (
                                <HeaderItem />
                            ) : (
                                <HeaderClose onPress={close}>
                                    <HeaderCloseIcon />
                                </HeaderClose>
                            )}
                        </RowHeader>
                        <MenuContent>
                            {children}
                        </MenuContent>
                    </Scroll>
                </ModalBody>
            </ModalContainer>
        </>
    );
}
