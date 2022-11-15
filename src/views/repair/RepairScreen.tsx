import React from 'react'
import Select from './components/Select'
import Loading from '@/components/loading'
import { awit, windowSize } from '@/helpers'
import HeaderBar from './components/headerBar'
import ItemRepair from './components/ItemRepair'
import ConditionBar from './components/ConditionBar'
import { SheetManager } from 'react-native-actions-sheet'
import { View, StyleSheet, Button, FlatList } from 'react-native'

const RepairScreen: React.FC = () => {
  const [] = React.useState<ILabel[]>([])
  const [loading, setLoading] = React.useState(true)
  const [repairs, setRepairs] = React.useState<number[]>([])
  const [refreshing, setRefreshing] = React.useState(false)
  const [carTitle, setcarTitle] = React.useState('全部车间')
  const [condition, setCondition] = React.useState({
    type: 1,
    taskType: 1,
    keyWord: '',
    carId: undefined,
  })

  const onPressButtonFilter = React.useCallback((type: 1 | 2 | 3) => {
    setCondition({
      ...condition,
      type,
    })
  }, [condition])
  const handleSearch = React.useCallback((value: string) => {
    if (!value) {
      return
    }
    setCondition({
      ...condition,
      keyWord: value
    })
  }, [condition])
  const handleClearSearchText = () => {
    setCondition({
      ...condition,
      keyWord: ''
    })
  }
  const handleClickConditionTask = (type: 1 | 2) => {
    setCondition({
      ...condition,
      taskType: type
    })
  }
  const handlePressSelect = () => {
    SheetManager.show('cars')
  }

  const handleSelectCar = (item: ILabel) => {
    SheetManager.hide('cars')
    setcarTitle(item.label)
    setCondition({
      ...condition,
      carId: item.value
    })
  }

  const refreshHeaderhandle = async () => {
    setRefreshing(true)
    setCondition({ ...condition })
    setRefreshing(false)
  }

  const buttons = React.useMemo(() => {
    return [(
      <View style={{ width: windowSize.width * 0.22, marginRight: 10 }} key={1}>
        <Button onPress={() => {
          onPressButtonFilter(1)
        }} color='rgb(247, 176, 57)' title='未认领3' />
      </View>
    ),
    (
      <View style={{ width: windowSize.width * 0.22, marginRight: 10 }} key={2}>
        <Button onPress={() => {
          onPressButtonFilter(2)
        }} color='rgb(244, 91, 105)' title='未认领3' />
      </View>
    ),
    (
      <View style={{ width: windowSize.width * 0.22, marginRight: 10 }} key={3}>
        <Button onPress={() => {
          onPressButtonFilter(3)
        }} color='rgb(33, 99, 161)' title='处理中' />
      </View>
    ),
    ]
  }, [onPressButtonFilter])

  React.useEffect(() => {
    (async () => {
      setLoading(true)
      await awit()
      setRepairs(new Array(30).fill(Math.random()))
      setLoading(false)
    })()
  }, [condition])

  return (
    <View style={styles.container}>
      <HeaderBar onChooseTask={handleClickConditionTask} title="维修任务" />
      <ConditionBar
        buttons={buttons}
        selectValue={carTitle}
        onSearch={handleSearch}
        onPressSelect={handlePressSelect}
        onClearSearchText={handleClearSearchText}
        taskValue={`${condition.taskType === 1 ? '全部任务' : '我的任务'}:`}
      />
      {loading ? <Loading loading={loading} />
        : (
          <FlatList
            numColumns={2}
            data={repairs}
            refreshing={refreshing}
            pinchGestureEnabled={false}
            onRefresh={refreshHeaderhandle}
            keyExtractor={(item, index) => item + index + Math.random() + ''}
            // @ts-ignore
            renderItem={({ item }) => (<ItemRepair type={condition.type} item={item} key={Math.random() + '' + Math.random() + Date.now()} />)}
          />
        )
      }
      <Select
        onClose={(data) => {
          console.log(data)
        }}
        actionId='cars'
        onSelect={handleSelectCar}
        options={new Array(20).fill({ label: '生产车间', value: Math.random().toString(36) })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default RepairScreen;
