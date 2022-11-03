import React from 'react'
import { Colors } from '@/helpers'
import { Pressable, StyleSheet, Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface IAreaProps {
  areaName: string
  onPress?: () => void
}

const Area: React.FC<IAreaProps> = ({ areaName, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={[Colors.textStyle, styles.cityText]}>{areaName}</Text>
      <AntDesign name='caretdown' style={styles.iconDown} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityText: {
    fontSize: 16,
    justifyContent: 'center'
  },
  iconDown: {
    fontSize: 12,
    color: '#999',
    marginLeft: 4,
  }
})

export default Area;
