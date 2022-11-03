import React from 'react'
import { useDispatch } from 'react-redux'
import { Colors, windowSize } from '@/helpers'
import { useNavigation } from '@react-navigation/native'
import { setSearchContent } from '@/redux/search/reducres'
import { Pressable, View, StyleSheet, Text, TextInput, Keyboard } from 'react-native'

const SearchBar: React.FC = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    const unlister = Keyboard.addListener('keyboardDidHide', () => {
      dispatch(setSearchContent(value))
    })
    return () => {
      unlister.remove()
    }
  }, [value, dispatch])
  return (
    <View style={styles.headerStyle}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.searchBar}
        placeholder="搜索影片、影院、演出、资讯、视频"
      />
      <Pressable onPress={() => {
        navigation.goBack()
        setValue('')
      }}>
        <Text style={Colors.textStyle}>取消</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 52,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 25,
    width: windowSize.width,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  searchBar: {
    height: 38,
    width: '85%',
    marginLeft: 10,
    borderRadius: 3,
    paddingLeft: 10,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    justifyContent: 'flex-start',
  }
})

export default SearchBar;
