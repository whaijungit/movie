import { Colors } from '@/helpers'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MaintainMessageScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={Colors.textStyle}>MaintainMessageScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default MaintainMessageScreen;
