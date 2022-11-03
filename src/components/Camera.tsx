import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Camera: React.FC = () => {
  return (
    <View style={styles.cameraContainer}>
      <Text>Camera</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    backgroundColor: '#000'
  }
})

export default Camera;
