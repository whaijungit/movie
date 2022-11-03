import React from 'react'
import { useDispatch } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import { clearAllHistory, clearSingleHistory } from '@/redux/search/reducres'

interface ILableProps {
  type: 'searchHistory' | 'hostSearchHistory'
  datas: string[]
  title: string
}

const Label: React.FC<ILableProps> = ({ type, title, datas }) => {
  const dispatch = useDispatch()
  const handleClearAllHistory = () => {
    Alert.alert('', '是否要删除所有的历史记录', [
      {
        text: '取消',
      },
      {
        text: '确定',
        onPress: () => dispatch(clearAllHistory())
      }
    ])
  }
  const handleClearSingleHistory = (index: number) => {
    dispatch(clearSingleHistory(index))
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        {type === 'searchHistory' ? (
          <Pressable style={styles.historyItem} onPress={handleClearAllHistory}>
            <Text style={{ ...styles.titleText, marginRight: 10 }}>清除历史记录</Text>
            <AntDesign name='closecircleo' size={12} color="#666" />
          </Pressable>
        ) : null}

      </View>
      <View style={styles.itemContainer}>
        {datas.map((item, index) => {
          if (type === 'searchHistory') {
            return <Pressable style={[styles.item, styles.historyItem]} key={index}>
              <Text style={{ ...styles.itemText, marginRight: 5 }}>{item}</Text>
              <Pressable>
                <AntDesign onPress={() => handleClearSingleHistory(index)} name='closecircleo' size={15} color="#fff" />
              </Pressable>
            </Pressable>
          }
          return (
            <View style={styles.item} key={index}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: '#666',
  },
  clearSearchHistory: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    padding: 2,
    paddingLeft: 10,
    marginRight: 10,
    paddingRight: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    color: '#fff'
  }
})

export default Label;
