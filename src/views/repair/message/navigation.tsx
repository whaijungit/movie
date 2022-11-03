import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import MaintainMessageScreen from '../maintain/message'
import RepairMessageScreen from '../RepairMessageScreen'
import SpotCheckMessageScreen from '../spot-check/message'

const TopTab = createMaterialTopTabNavigator()
const screenOptions = { tabBarInactiveTintColor: '#999', tabBarLabelStyle: { fontSize: 20 }, tabBarPressColor: 'transparent', tabBarActiveTintColor: 'rgb(129, 211, 248)', tabBarContentContainerStyle: { backgroundColor: 'rgb(0, 43, 85)' } }


const MessageNavigation: React.FC = () => {
  return (
    <TopTab.Navigator sceneContainerStyle={{ backgroundColor: 'rgb(0, 43, 85)' }}>
      <TopTab.Group screenOptions={screenOptions}>
        <TopTab.Screen name='维修' children={() => <RepairMessageScreen />} />
        <TopTab.Screen name='点检' children={() => <SpotCheckMessageScreen />} />
        <TopTab.Screen name='保养' children={() => <MaintainMessageScreen />} />
      </TopTab.Group>
    </TopTab.Navigator>
  )
}

export default MessageNavigation;
