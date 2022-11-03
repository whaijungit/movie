import React from 'react'
import Area from '@/components/area'
import { useNavigation } from '@react-navigation/native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { windowSize } from '@/helpers'

interface IMoreHeaderProps {
  type: '电影' | '影院'
}

const MoreHeader: React.FC<IMoreHeaderProps> = ({ type }) => {
  const navigation = useNavigation<any>()
  return (
    <View style={styles.headerStyle}>
      <Area areaName='长沙' onPress={() => navigation.navigate('City')} />
      <View style={styles.pressContainer}>
        <Pressable
          onPress={() => navigation.navigate('MoreMovie')}
          style={[styles.btn, type === '电影' ? styles.btnLeftSelected : {}]}
        >
          <Text style={[styles.btnText, type === '电影' ? styles.btnTextSelected : {}]}>电影</Text>
        </Pressable>
        <Pressable style={[styles.btn, type === '影院' ? styles.btnRightSelected : {}]}
          onPress={() => navigation.navigate('TheatreMovie')}
        >
          <Text style={[styles.btnText, type === '影院' ? styles.btnTextSelected : {}]}>影院</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate('SearchMovie')}>
        <EvilIcons name="search" size={30} color="#41bd55" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: windowSize.width,
    justifyContent: 'space-between',
  },
  pressContainer: {
    width: 140,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#41bd55',
  },
  btn: {
    width: 70,
    height: 30,
    justifyContent: "center"
  },
  btnText: {
    color: '#41bd55',
    fontWeight: '900',
    textAlign: 'center'
  },
  btnTextSelected: {
    color: '#fff'
  },
  btnLeftSelected: {
    backgroundColor: '#41bd55',
    borderTopLeftColor: '#41bd55',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  btnRightSelected: {
    borderTopRightRadius: 5,
    borderTopColor: '#41bd55',
    backgroundColor: '#41bd55',
    borderBottomRightRadius: 5,
  }
})

export default MoreHeader;
