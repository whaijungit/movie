import React from 'react'
import { awit } from '@/helpers'
import { Button, View, FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet'

interface ISelectProps {
  actionId: string
  options: ILabel[]
  onSelect: (item: ILabel) => void
  onClose?: (data: unknown) => void
}

const Select: React.FC<ISelectProps> = ({ actionId, options, onSelect, onClose }) => {
  const [curIndex, setCurIndex] = React.useState(-1);
  const actionSheetRef = React.useRef<ActionSheetRef>(null!)
  const handleSelect = async (item: ILabel, index: number) => {
    setCurIndex(index)
    await awit(100)
    onSelect(item)
  }
  return (
    <ActionSheet
      gestureEnabled
      id={actionId}
      onClose={onClose}
      ref={actionSheetRef}
      containerStyle={{
        height: options.length === 0 ? 30 : 400,
      }}
      indicatorStyle={{
        width: 100,
        backgroundColor: '#ddd'
      }}
    >
      <FlatList data={options} renderItem={({ item, index }) => (
        <View
          style={{
            padding: 20,
            paddingBottom: 10,
            flexDirection: 'row',
            width: '100%'
          }}>
          <View style={{ flexGrow: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Button title={item.label} onPress={() => handleSelect(item, index)} />
            </View>
            {curIndex === index ? <AntDesign name='check' style={{ position: 'absolute', color: '#fff', right: 10 }} size={25} /> : null}
          </View>

        </View>
      )} />
    </ActionSheet>
  )
}

export default Select;
