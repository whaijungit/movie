import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BindCarScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>BindCarScreen</Text>
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

export default BindCarScreen;
