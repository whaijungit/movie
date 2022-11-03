import React from 'react'
import { View, StyleSheet } from 'react-native'
import DetailHeader from '../components/detailsHeaderBar'

const SettingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <DetailHeader title='我的设置' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default SettingScreen;
