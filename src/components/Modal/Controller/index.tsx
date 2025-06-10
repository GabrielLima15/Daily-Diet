import React, { useEffect } from 'react'
import { BackHandler } from 'react-native'
import { useCoreContext } from '@context/CoreContext'
import ModalConfirm from '../Confirm'

interface ModalControllerProps {}

export default function ModalController(props: ModalControllerProps) {
    const { modal, setModal } = useCoreContext()

  useEffect(() => {
    const backAction = () => {
      if (modal) {
        setModal(null)
        return true
      }
      return false
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => {
      backHandler.remove()
    }
  }, [modal, setModal])

  return (
    <>
      {modal?.type === 'confirm' ? <ModalConfirm /> : null}
    </>
  )
}
