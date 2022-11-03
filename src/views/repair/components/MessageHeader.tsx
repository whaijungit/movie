import React from 'react'
import { windowSize } from '@/helpers'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native'

interface IHeaderProps {
  goBack?: () => void
  title?: React.ReactNode
  leftContro?: React.ReactNode
  rightContro?: React.ReactNode
  onChooseTask?: (conditionTask: 1 | 2) => void
}

const MessageHeader: React.FC<IHeaderProps> = ({ title, onChooseTask }) => {
  const scale = React.useRef(new Animated.Value(0)).current
  const [visable, setVisbale] = React.useState(false)
  const handlePlusPress = () => {
    start()
  }
  const start = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true
    }).start()
    setVisbale(true)
  }
  const stop = () => {
    Animated.timing(scale, {
      toValue: 0,
      useNativeDriver: true
    }).reset()
    setVisbale(false)
  }
  return (
    <>
      <View style={styles.headerStyle}>
        <Pressable>
          {/* {showControls && <AntDesign name='arrowleft' style={styles.iconStyle} />} */}
        </Pressable>
        <Text style={styles.titleStyle}>{title}</Text>
        <Pressable onPress={handlePlusPress}>
          <AntDesign name='plus' style={styles.iconStyle} />
        </Pressable>
      </View>
      <Animated.View style={[styles.meun, { transform: [{ scaleY: scale }] }, !visable ? { zIndex: 0 } : { zIndex: 1 }]}>
        <Pressable style={styles.meunItem} onPress={() => {
          stop()
          onChooseTask && onChooseTask(1)
        }}>
          <Text style={styles.meunItemText}>全部已读</Text>
        </Pressable>
        <Pressable style={[styles.meunItem, styles.meunItemLine]} onPress={() => {
          stop()
          onChooseTask && onChooseTask(2)
        }}>
          <Text style={styles.meunItemText}>删除</Text>
        </Pressable>
      </Animated.View>
    </>
  )
}


const styles = StyleSheet.create({
  headerStyle: {
    height: 52,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: windowSize.width,
    justifyContent: 'space-between',
    backgroundColor: 'rgb(19, 36, 52)'
  },
  iconStyle: {
    fontSize: 20,
    color: '#fff',
  },
  titleStyle: {
    fontSize: 25,
    color: '#fff',
  },
  meun: {
    top: 52,
    right: 0,
    zIndex: 0,
    width: 140,
    height: 80,
    elevation: 5,
    borderRadius: 5,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5f5',
  },
  meunItem: {
    height: '50%',
    width: '100%',
    justifyContent: 'center'
  },
  meunItemLine: {
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },
  meunItemText: {
    fontSize: 18,
    color: '#222',
    textAlign: 'center',
  },
  line: {
    height: 1,
    backgroundColor: '#ddd'
  }
})

export default MessageHeader;
