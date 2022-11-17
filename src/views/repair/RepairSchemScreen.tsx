import React from 'react'
import { Colors } from '@/helpers'
import Select from './components/Select'
import { schemStyles as styles } from './styles'
import { SheetManager } from 'react-native-actions-sheet'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text, Pressable, Image, ScrollView, Button } from 'react-native'

interface IRepairSchemeScreenProps {
  navigation: any
}

const images = [require('@/assets/test.png'), require('@/assets/test.png'), require('@/assets/test.png'), require('@/assets/test.png'), require('@/assets/test.png'), require('@/assets/test.png'), require('@/assets/test.png'), require('@/assets/test.png'), require('@/assets/test.png'), require('@/assets/test.png'), require('@/assets/test.png'), require('@/assets/test.png'), require('@/assets/test.png'), require('@/assets/test.png')]

const RepairSchemeScreen: React.FC<IRepairSchemeScreenProps> = ({ navigation }) => {
  const [exption, setExption] = React.useState<ILabel>({ label: '', value: '' })
  const handlePress = () => {
    SheetManager.show('exption')
  }
  const handleSelect = (item: ILabel) => {
    setExption(item)
    SheetManager.hide('exption')
  }

  const imageList = React.useMemo(() => {
    return images.map((item, i) => (
      <View style={styles.imageItem} key={i}>
        <Image style={styles.imageStyle} resizeMethod="scale" resizeMode='center' source={item} />
      </View>
    ))
  }, [])
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
          <Text style={[Colors.textStyle, styles.schemeText]}>1. Lorem ipsum dolor sit.</Text>
          <Text style={[Colors.textStyle, styles.schemeText]}>2. Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
          <Text style={[Colors.textStyle, styles.schemeText]}>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum.</Text>
        </View>
        <View style={styles.imageViewContainer}>
          {imageList}
        </View>
        <Select actionId='exption' options={new Array(10).fill({ label: '原因1', value: '123' })} onSelect={handleSelect} />
      </ScrollView>
      <View style={styles.btnStyle}>
        <Button title='返回' onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}

export default RepairSchemeScreen;
