import { Colors } from '@/helpers'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IBlockItemProps {
  items: [{ title: React.ReactNode, value: React.ReactNode }] | [{ title: React.ReactNode, value: React.ReactNode }, { title: React.ReactNode, value: React.ReactNode }]
}

const BlockItem: React.FC<IBlockItemProps> = ({ items }) => {
  let element = <React.Fragment />
  if (items.length === 1) {
    element = <Text style={[Colors.textStyle,styles.blockTextStyle]}>{items[0].title}: {items[0].value}</Text>
  }
  else if (items.length > 1) {
    element = <>
      <Text style={[Colors.textStyle,styles.blockTextStyle]}>{items[0].title}: {items[0].value}</Text>
      <Text style={[Colors.textStyle,styles.blockTextStyle]}>{items[1].title}: {items[1].value}</Text>
    </>
  }
  return (
    <View style={styles.blockItemStyle}>
      {element}
    </View>
  )
}

BlockItem.defaultProps = {
}

const styles = StyleSheet.create({
  blockItemStyle: {
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  blockTextStyle: {
    minWidth: '50%'
  }
})

export default BlockItem;
