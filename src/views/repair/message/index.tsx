import React from 'react'
import MessageNavigation from './navigation'
import { View, StyleSheet } from 'react-native'
import Header from '../components/MessageHeader'

const InfoMessageScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="消息中心" />
      <MessageNavigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default InfoMessageScreen;
