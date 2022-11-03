import { Colors, windowSize } from '@/helpers'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface IItemSpotCheck {
  item?: ISpotcheck,
  isStatic?: boolean
  titles?: [string, string, string, string]
  onClickItem?: (item: ISpotcheck) => void
}

const ItemSpotCheck: React.FC<IItemSpotCheck> = ({ item, isStatic, titles, onClickItem }) => {
  const renderStaticTemplate = () => {
    if (titles) {
      return (
        <View style={[styles.titleContainer, styles.commonStyle]}>
          {titles.map((title) => <Text key={title} style={styles.textStyle}>{title}</Text>)}
        </View>
      )
    }
    console.warn('title props isRequired');
    return null
  }
  if (isStatic) {
    return renderStaticTemplate()
  }
  const handlePress = () => {
    onClickItem(item)
  }
  return (
    <TouchableOpacity style={[styles.itemContainer, styles.commonStyle, styles.itemBorderStyle]} onPress={handlePress}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>{item.number}</Text>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>{item.checkCount} / {item.checkTotalCount}</Text>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>{item.timer}</Text>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>{item.carName}</Text>
    </TouchableOpacity>
  )
}

ItemSpotCheck.defaultProps = {
  isStatic: true,
}

const styles = StyleSheet.create({
  commonStyle: {
    alignItems: 'center',
    borderTopColor: 'rgba(6,63,101,1)',
    justifyContent: 'center',
    borderBottomColor: 'rgba(6,63,101,1)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  titleContainer: {
    height: 40,
    flexDirection: 'row',
    width: windowSize.width,
  },
  itemContainer: {
    height: 60,
    flexDirection: 'row',
    width: windowSize.width,
  },
  itemBorderStyle: {
    alignItems: 'center',
    borderTopColor: 'rgba(6,63,101,1)',
    justifyContent: 'center',
    borderBottomColor: 'rgba(6,63,101,1)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textStyle: {
    flex: 0.25,
    padding: 10,
    // fontSize: 18,
    // color: '#222',
    textAlign: 'center',
    ...Colors.textStyle,
  },
})

export default ItemSpotCheck;
