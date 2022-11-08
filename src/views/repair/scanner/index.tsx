import React from 'react'
import Header from '../components/headerBar'
import { Colors, windowSize } from '@/helpers'
import IconIcons from 'react-native-vector-icons/Ionicons'
import { RNCamera as Camera, BarCodeReadEvent } from 'react-native-camera'
import { View, StyleSheet, Animated, TouchableOpacity, Alert } from 'react-native'

const ScannerScreen: React.FC = () => {
  const cameraRef = React.useRef<Camera>().current
  const top = React.useRef(new Animated.Value(20)).current
  const [data, setData] = React.useState<string | null>(null)
  const [camareType, setCamareType] = React.useState<'back' | 'front'>('back')
  const start = React.useCallback(() => {
    if (data) {
      return;
    }
    Animated.sequence([Animated.timing(top, {
      duration: 1500,
      useNativeDriver: true,
      toValue: 0,
    }), Animated.timing(top, {
      duration: 1500,
      useNativeDriver: true,
      toValue: windowSize.height * 0.8,
    })]).start(() => start())
  }, [top, data])

  const reset = React.useCallback(() => {
    Animated.sequence([Animated.timing(top, {
      duration: 1500,
      useNativeDriver: true,
      toValue: 20,
    }), Animated.timing(top, {
      toValue: 20,
      duration: 1500,
      useNativeDriver: true
    })]).stop()
  }, [top])

  const handleScanner = (ev: BarCodeReadEvent) => {
    Alert.alert('提示', ev.data)
    setData(ev.data)
    reset()
  }

  React.useEffect(() => {
    start()
  }, [start])

  return (
    <View style={styles.container}>
      <Header title="扫码操作" showControls={false} />
      <View style={styles.camerContainer}>
        <Camera
          autoFocus="on"
          ref={() => cameraRef}
          type={camareType}
          captureAudio={false}
          onBarCodeRead={data ? undefined : handleScanner}
          style={styles.container}>
          <Animated.View style={[styles.indctor, { transform: [{ translateY: top }] }]} />
          <View style={styles.controsContainer}>
            <TouchableOpacity onPress={() => setCamareType(type => {
              type = type === 'back' ? 'front' : 'back'
              return type
            })}>
              <IconIcons style={[Colors.textStyle, { fontSize: 40 }]} name='ios-camera-reverse-outline' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCamareType(type => {
              type = type === 'back' ? 'front' : 'back'
              return type
            })}>
              <IconIcons style={[Colors.textStyle, { fontSize: 40 }]} name='ios-camera-reverse-outline' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCamareType(type => {
              type = type === 'back' ? 'front' : 'back'
              return type
            })}>
              <IconIcons style={[Colors.textStyle, { fontSize: 40 }]} name='ios-camera-reverse-outline' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCamareType(type => {
              type = type === 'back' ? 'front' : 'back'
              return type
            })}>
              <IconIcons style={[Colors.textStyle, { fontSize: 40 }]} name='ios-camera-reverse-outline' />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(9, 31, 52)'
  },
  camerContainer: {
    flex: 1,
    backgroundColor: '#000'
  },
  controsContainer: {
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  indctorContainer: {
    width: '100%',
    alignItems: 'center'
  },
  indctor: {
    height: 3,
    opacity: 1,
    position: 'relative',
    width: windowSize.width,
    backgroundColor: 'rgba(0, 255, 46,1)',
  }
})

export default ScannerScreen;
