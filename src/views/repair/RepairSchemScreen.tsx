import React from 'react'
import Select from './components/Select'
import { Colors, windowSize } from '@/helpers'
import { SheetManager } from 'react-native-actions-sheet'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text, StyleSheet, Pressable, Image, ScrollView, Button } from 'react-native'

interface IRepairSchemeScreenProps {
  navigation: any
}

const RepairSchemeScreen: React.FC<IRepairSchemeScreenProps> = ({ navigation }) => {
  const [exption, setExption] = React.useState<ILabel>({ label: '', value: '' })
  const handlePress = () => {
    SheetManager.show('exption')
  }
  const handleSelect = (item: ILabel) => {
    setExption(item)
    SheetManager.hide('exption')
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={[styles.selectItemStyle, styles.commonStyle]}>
          <Text style={Colors.textStyle}>故障原因：</Text>
          <Pressable style={styles.select} onPress={handlePress}>
            <Text style={Colors.textStyle}>{exption.label}</Text>
            <AntDesign name='down' style={Colors.textStyle} />
          </Pressable>
        </View>
        <View style={styles.commonStyle}>
          <Text style={[Colors.textStyle, styles.commonStyle]}>维修方案：</Text>
          <Text style={[Colors.textStyle, styles.schemeText]}>1. </Text>
          <Text style={[Colors.textStyle, styles.schemeText]}>2.</Text>
          <Text style={[Colors.textStyle, styles.schemeText]}>3.</Text>
        </View>
        <View style={styles.imageViewContainer}>
          <View style={styles.imageItem}>
            <Image style={styles.imageStyle} resizeMethod="scale" resizeMode='center' source={require('@/assets/test.png')} />
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.imageStyle} resizeMethod="scale" resizeMode='center' source={require('@/assets/test.png')} />
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.imageStyle} resizeMethod="scale" resizeMode='center' source={require('@/assets/test.png')} />
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.imageStyle} resizeMethod="scale" resizeMode='center' source={require('@/assets/test.png')} />
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.imageStyle} resizeMethod="scale" resizeMode='center' source={require('@/assets/test.png')} />
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.imageStyle} resizeMethod="scale" resizeMode='center' source={require('@/assets/test.png')} />
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.imageStyle} resizeMethod="scale" resizeMode='center' source={require('@/assets/test.png')} />
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.imageStyle} resizeMethod="scale" resizeMode='center' source={require('@/assets/test.png')} />
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.imageStyle} resizeMethod="scale" resizeMode='center' source={require('@/assets/test.png')} />
          </View>
          <View style={styles.imageItem}>
            <Image style={styles.imageStyle} resizeMethod="scale" resizeMode='center' source={require('@/assets/test.png')} />
          </View>
        </View>
        <Select actionId='exption' options={new Array(10).fill({ label: '原因1', value: '123' })} onSelect={handleSelect} />
      </ScrollView>
      <View style={styles.btnStyle}>
        <Button title='返回' onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 80,
  },
  commonStyle: {
    width: '100%',
    marginBottom: 20,
  },
  selectItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  schemeText: {
    padding: 5,
    fontSize: 16,
    letterSpacing: 3,
    paddingHorizontal: 8,
  },
  select: {
    padding: 10,
    width: '75%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#999',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  imageViewContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  imageItem: {
    margin: 7,
    height: 160,
    borderRadius: 10,
    width: windowSize.width * 0.45 - 20,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  btnStyle: {
    bottom: 0,
    height: 30,
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 20,
    position: 'absolute',
  }
})

export default RepairSchemeScreen;
