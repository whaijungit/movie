import React from 'react'
import { Navigation } from '@/types'
import HeaderBar from '../components/headerBar'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SpotCheckDetailScreen: React.FC = () => {
  const navigation = useNavigation<Navigation<any, ''>>()
  return (
    <View style={styles.container}>
      <HeaderBar title="机台维修处理" goBack={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default SpotCheckDetailScreen;
