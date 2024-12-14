import React, { useContext } from "react";
import { Text } from "react-native";
import { Button } from "@components/Button";
import { Column } from "@ui/index";
import { CoreContext } from "@context/CoreContext";
import ModalWrapper from "../Wrapper";

export default function ModalPermissions() {
  const { modal, setModal } = useContext(CoreContext) as {
    modal: {
      title?: string;
      message?: string;
      action?: () => Promise<void>;
    } | null;
    setModal: (modal: null) => void;
  };

  const handleConfirm = async () => {
    if (modal?.action) {
      await modal.action();
    }
    setModal(null); 
  };

  const handleClose = () => {
    setModal(null);
  };

  return (
    <ModalWrapper title={modal?.title} close={handleClose}>
      <Column>
        <Text>{modal?.message}</Text>
        <Button onPress={handleConfirm} text="Confirmar" />
      </Column>
    </ModalWrapper>
  );
}
