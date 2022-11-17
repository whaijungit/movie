import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { RNCamera, RNCameraProps } from 'react-native-camera'

interface CameraProps {
  rnCameraProps: RNCameraProps
  children: React.ReactNode
}

export interface RNCameraMethod extends RNCamera {

}

const Camera: React.ForwardRefRenderFunction<RNCameraMethod, CameraProps> = (props, ref) => {
  const cameraRef = React.useRef<RNCamera>(null!)
  const [type] = React.useState(false)
  const handlePress = async () => {
    console.log(cameraRef)
    console.log(ref);
  }
  return (
    <View style={styles.cameraContainer}>
      <Button title='拍照' onPress={handlePress} />
      <RNCamera type={type ? 'back' : 'front'} onPictureTaken={() => {
        console.log('object');
      }} style={{ flex: 1 }} children={props.children} ref={cameraRef} />
    </View>
  )
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    backgroundColor: '#000'
  }
})

export default React.forwardRef<RNCamera, { children: React.ReactNode }>(Camera)
