import React from 'react'
import { Colors } from '@/helpers'
import { Navigation } from '@/types'
import Modal from '@/components/Modal'
import BlockItem from './components/blockItem'
import { detailStyles as styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import DetailsHeaderBar from './components/detailsHeaderBar'
import { View, StyleSheet, Text, ScrollView, Button, TouchableOpacity } from 'react-native'

const recoeds = new Array(20).fill(1);

const RepairDetailScreen: React.FC = () => {
  const [visiable, setVisiable] = React.useState(false)
  const navigation = useNavigation<Navigation<any, 'RepairScheme'>>()
  const listRecoeds = React.useMemo(() => recoeds.map((item, index) => (
    <View style={styles.recoedItemStyle} key={index}>
      <View style={styles.circle} />
      {(recoeds.length === 1 || index + 1 === recoeds.length) ? null : <View style={styles.line} />}
      <View style={{ marginLeft: 20 }}>
        <BlockItem items={[{ title: '2022/02/01 08:00', value: ' 机台告警' }]} />
      </View>
    </View>
  )), [])
  const children = React.useMemo(() => (
    <View style={styles.modalContainer}>
      <Text style={{ ...styles.modalTextStyle, marginTop: 10 }}>确认</Text>
      <Text style={{ ...styles.modalTextStyle, color: '#ccc', marginTop: 100 }}>确认认领任务</Text>
      <View style={styles.modalControlsContainer}>
        <TouchableOpacity onPress={() => setVisiable(false)} style={[styles.modalControlBtn, { borderRightColor: '#999', borderRightWidth: StyleSheet.hairlineWidth }]}>
          <Text>取消</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVisiable(false)} style={styles.modalControlBtn}>
          <Text>确认</Text>
        </TouchableOpacity>
      </View>
    </View>
  ), [])
  return (
    <View style={styles.container}>
      <DetailsHeaderBar title="机台维修处理" />
      <Modal onClose={() => setVisiable(false)} visible={visiable} children={children} />
      <ScrollView style={styles.scrollContainer}>
        {/* 维修信息 */}
        <View>
          <Text style={{ ...Colors.textStyle, color: Colors.titleColor, ...styles.titleStyle }}>维修信息</Text>
          <BlockItem items={[{ title: '机台名称', value: '纺粘1号机' }, { title: '机台编码', value: '123123123' }]} />
          <BlockItem items={[{ title: '告警发生', value: '2022/03/02 08:30' }, { title: '告警时长', value: <Text style={styles.red}>30分</Text> }]} />
          <BlockItem items={[{ title: '上报维修', value: '2022/03/02 08:00' }, { title: '机台编码', value: <Text style={styles.red}>30分</Text> }]} />
          <BlockItem items={[{ title: '维修状态', value: '未认领' }]} />
        </View>
        {/* 维修处理 */}
        <View>
          <View style={styles.titleContainer}>
            <Text style={[Colors.textStyle, { color: Colors.titleColor }, styles.titleStyle]}>维修处理</Text>
            <View>
              <Button title='标准维修' onPress={() => navigation.navigate('RepairScheme')} />
            </View>
          </View>
          <BlockItem items={[{ title: '故障原因', value: '原因1' }]} />
          <BlockItem items={[{ title: '故障详情', value: '无法计量生产、影响机台生产' }]} />
          <BlockItem items={[{ title: '维修处理', value: '暂未维修' }]} />
          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <View style={{ width: '59%' }}>
              <Button title='认领任务' onPress={() => setVisiable(true)} />
            </View>
          </View>
        </View>
        {/* 维修记录 */}
        <View>
          <Text style={{ ...Colors.textStyle, color: Colors.titleColor, ...styles.titleStyle }}>维修处理记录</Text>
          {listRecoeds}
        </View>
      </ScrollView>
    </View >
  )
}

export default RepairDetailScreen;
