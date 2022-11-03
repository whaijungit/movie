import React from 'react'
import { Navigation } from '@/types'
import { useNavigation } from '@react-navigation/native'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

interface IItemRepairProps {
  item: any
  type?: 1 | 2 | 3
}

const ItemRepair: React.FC<IItemRepairProps> = ({ type, item }) => {
  const navigation = useNavigation<Navigation<{ id: string }, 'RepairDetail'>>()

  const handlePress = () => {
    navigation.navigate('RepairDetail', { id: item.id })
  }
  if (type === 1) {
    styles.itemStyle.backgroundColor = 'rgb(247, 176, 57)'
  }
  if (type === 2) {
    styles.itemStyle.backgroundColor = 'rgb(244, 91, 105)'
  }
  else if (type === 3) {
    styles.itemStyle.backgroundColor = 'rgb(33, 99, 161)'
  }

  return (
    <TouchableOpacity style={styles.itemStyle} onPress={handlePress}>
      <Text ellipsizeMode='tail' numberOfLines={1} style={styles.itemBlockStyle}>机台编码 123123123123123</Text>
      <Text ellipsizeMode='tail' numberOfLines={1} style={styles.itemBlockStyle}>故障原因  某某某原因</Text>
      <Text ellipsizeMode='tail' numberOfLines={1} style={styles.itemBlockStyle}>告警时长  40分</Text>
      <Text ellipsizeMode='tail' numberOfLines={1} style={styles.itemBlockStyle}>上报时长  30分</Text>
      <Text ellipsizeMode='tail' numberOfLines={1} style={styles.itemBlockStyle}>上报人员  张三</Text>
      <Text ellipsizeMode='tail' numberOfLines={1} style={styles.itemBlockStyle}>车间部门  生产车间</Text>
    </TouchableOpacity>
  )
}

ItemRepair.defaultProps = {
  type: 1
}

const styles = StyleSheet.create({
  itemStyle: {
    flex: 0.5,
    margin: 5,
    padding: 5,
    elevation: 5,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: 'rgb(247, 176, 57)',
  },
  itemBlockStyle: {
    fontSize: 20,
    width: '100%',
    color: '#fff',
    paddingHorizontal: 12,
  }
})

export default ItemRepair;
