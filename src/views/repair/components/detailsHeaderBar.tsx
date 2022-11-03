import React from 'react'
import { Navigation } from '@/types'
import { Colors, windowSize } from '../../../helpers'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface IDetailsHeaderBarProps {
  title: string
  right?: string
  onClickRightControl?: () => void
}

const DetailsHeaderBar: React.FC<IDetailsHeaderBarProps> = ({ title, right, onClickRightControl }) => {
  const navigation = useNavigation<Navigation<any, ''>>()
  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name='left' style={Colors.textStyle} />
      </TouchableOpacity>
      <Text style={{ ...Colors.textStyle, fontSize: 25 }}>{title}</Text>
      <TouchableOpacity onPress={onClickRightControl}>
        <Text style={Colors.textStyle}>{right}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 52,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: windowSize.width,
    justifyContent: 'space-between',
    backgroundColor: Colors.headerBarColor,
  }
})

export default DetailsHeaderBar;
