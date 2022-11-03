import React from 'react'
import { Modal as RNModal, StyleSheet, View } from 'react-native'

interface IModalProps {
  visible: boolean
  onClose?: () => void
  children?: React.ReactNode
}

const Modal: React.FC<IModalProps> = ({ visible, children, onClose }) => {
  const handleCloseModal = () => {
    onClose && onClose()
  }
  return (
    <RNModal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={handleCloseModal}
      children={<View style={styles.modalContainerStyle}
        children={children}
      />}
    />
  )
}

const styles = StyleSheet.create({
  modalContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Modal;
