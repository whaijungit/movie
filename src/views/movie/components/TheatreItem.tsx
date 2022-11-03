import React from 'react'
import { Colors } from '@/helpers'
import { StyleSheet, Text, View } from 'react-native'

interface ITheatreItemProps {
  item: ITheatre
  index: number
}

const ThreatrItem: React.FC<ITheatreItemProps> = ({ item, index }) => {
  return (
    <View style={[styles.container, index === 0 ? { marginTop: 10 } : {}]}>
      <View style={styles.header}>
        <Text style={Colors.textStyle}>{item.theaterName}</Text>
        <Text style={styles.startPrice}>￥<Text style={styles.price}>{item.startPrice}</Text>起</Text>
      </View>
      <View style={styles.addr}>
        <Text style={styles.textAddr}>{item.theaterAddr}</Text>
      </View>
      <View style={styles.feature}>
        {item.allowRefund ? <Text style={[styles.allowRefund, styles.common]}>可退款</Text> : null}
        {item.endorse ? <Text style={[styles.endorse, styles.common]}>折扣卡</Text> : null}
        {item.snack ? <Text style={[styles.snack, styles.common]}>小吃</Text> : null}
        {item.vipTag ? <Text style={[styles.vipTag, styles.common]}>VIP</Text> : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: '#bbb',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
  },
  startPrice: {
    color: 'grey',
  },

  price: {
    fontSize: 25,
    color: 'rgb(236,93,10)'
  },
  addr: {
    margin: 5,
    marginLeft: 0
  },
  textAddr: {
    fontSize: 14,
    color: 'grey',
  },
  feature: {
    flexDirection: 'row'
  },
  common: {
    borderWidth: 1,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    marginBottom: 2
  },
  allowRefund: {
    color: 'rgb(241,149,62)',
    borderColor: 'rgb(241,149,62)'
  },
  endorse: {
    color: 'rgb(85,168,239)',
    borderColor: 'rgb(85,168,239)'
  },
  snack: {
    color: 'rgb(147,183,195)',
    borderColor: 'rgb(147,183,195)'
  },
  vipTag: {
    color: 'rgb(241,149,62)',
    borderColor: 'rgb(241,149,62)'
  }
})

export default ThreatrItem;
