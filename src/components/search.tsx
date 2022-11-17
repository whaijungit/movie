import React from 'react'
import { Colors } from '../helpers'
import { windowSize } from '../helpers'
import { Pressable, StyleSheet, Text } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

interface ISearchProps {
  onPress?: () => void
  placeholder?: string
}

const Search: React.FC<ISearchProps> = ({ onPress, placeholder }) => {
  const handlePress = () => {
    onPress && onPress()
  }

  return (
    <Pressable style={styles.searchStyle} onPress={handlePress}>
      <EvilIcons name="search" size={25} color="#111" />
      <Text style={Colors.textStyle}>{placeholder}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  searchStyle: {
    height: 38,
    marginLeft: 10,
    paddingLeft: 10,
    borderRadius: 3,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    width: windowSize.width * 0.8,
  },
  textStyle: {
    fontSize: 16,
    color: '#999',
    lineHeight: 38,
  }
})

export default Search;
