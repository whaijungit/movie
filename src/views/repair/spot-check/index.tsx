import React from 'react'
import { Navigation } from '@/types'
import Select from '../components/Select'
import Loading from '@/components/loading'
import { awit, SpotCheck } from '@/helpers'
import HeaderBar from '../components/headerBar'
import ConditionBar from '../components/ConditionBar'
import ItemSpotCheck from '../components/itemSpotCheck'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, FlatList } from 'react-native'
import { SheetManager } from 'react-native-actions-sheet'

const titles: [string, string, string, string] = ['机台编码', '已检/总检', '最近点检时间', '车间部门']

const SpotCheckScreen: React.FC = () => {
  const [condition, setCondition] = React.useState({
    task: 1,
    taskType: 1,
    carId: '',
  })
  const [loading, setLoading] = React.useState(false)
  const [datas, setdatas] = React.useState<ISpotcheck[]>([])
  const [car, setCar] = React.useState<ILabel>({ label: '全部车间', value: '' })
  const navivation = useNavigation<Navigation<{ id: string }, 'SpotCheckDetail'>>()

  const handlePressSelect = () => {
    SheetManager.show('SpotCheckHomeId')
  }

  const handleSelect = (item: ILabel) => {
    setCar(item)
    setCondition({
      ...condition,
      carId: item.value
    })
    SheetManager.hide('SpotCheckHomeId')
  }

  React.useEffect(() => {
    const focusLister = navivation.addListener('focus', async () => {
      setLoading(true)
      await awit()
      setdatas(SpotCheck.cars())
      setLoading(false)
    })
    const blurLister = navivation.addListener('blur', () => { })
    return () => {
      focusLister()
      blurLister()
    }
  }, [navivation])
  React.useEffect(() => {
    (async () => {
      setLoading(true)
      await awit()
      setdatas(SpotCheck.cars())
      setLoading(false)
    })()
  }, [condition])
  return (
    <View style={styles.container}>
      <HeaderBar onChooseTask={(task) => setCondition({ ...condition, taskType: task })} title="点检任务" />
      <ConditionBar onPressSelect={handlePressSelect} onSearch={(v) => setCondition({ ...condition, carId: v })} selectValue={car.label} />
      <ItemSpotCheck key={1} titles={titles} />
      <Select actionId={'SpotCheckHomeId'} options={new Array(1000).fill({ label: '生产车间', value: Math.random().toString(36) })} onSelect={handleSelect} />
      {loading ? <Loading loading={loading} /> : <FlatList
        data={datas}
        onEndReachedThreshold={0.1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemSpotCheck onClickItem={() => navivation.navigate('SpotCheckDetail')} item={item} isStatic={false} key={item.id} />}
      />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default SpotCheckScreen;
