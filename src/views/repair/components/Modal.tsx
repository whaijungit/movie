import React from 'react';
import { Modal as RNModal } from 'react-native'

interface IModalProps {
  visible: boolean
  children:React.ReactNode
}

const Modal: React.FC<IModalProps> = ({visible,children}) => {
  return (
    <RNModal visible={visible}>
      {children}
    </RNModal>
  )
}

export default Modal;
