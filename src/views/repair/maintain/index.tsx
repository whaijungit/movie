import React from 'react'
import { windowSize } from '../../../helpers'
import HeaderBar from '../components/headerBar'
import ConditionBar from '../components/ConditionBar'
import { View, StyleSheet, Button } from 'react-native'

const buttons = [
  (
    <View style={{ width: windowSize.width * 0.18, marginRight: 10 }} key={1}>
      <Button color='rgb(33, 99, 161)' title='全部99' />
    </View>
  ),
  (
    <View style={{ width: windowSize.width * 0.18, marginRight: 10 }} key={2}>
      <Button color='rgb(247, 176, 57)' title='代维护99' />
    </View>
  ),
  (
    <View style={{ width: windowSize.width * 0.18, marginRight: 10 }} key={3}>
      <Button color='rgb(41, 161, 247)' title='进行中50' />
    </View>
  ), (
    <View style={{ width: windowSize.width * 0.18, marginRight: 10 }} key={4}>
      <Button color='rgb(2, 199, 128)' title='已维护50' />
    </View>
  ),
]

const MaintainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <HeaderBar title="保养任务" />
      <ConditionBar buttons={buttons} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default MaintainScreen;
