import React from 'react'

import { Colors } from '@/helpers'
import ScannerScreen from '@/views/repair/scanner'
import MaintainScreen from '@/views/repair/maintain'
import RepairScreen from '@/views/repair/RepairScreen'
import InfoMessageScreen from '@/views/repair/message'
import SpotCheckScreen from '@/views/repair/spot-check'

import IconIcons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export type RepairRootStackRouters = {
  Home: undefined
  Mine: undefined
  BindCar: undefined
  Setting: undefined
  BindDevice: undefined
  RepairDetail: undefined
  RepairScheme: undefined
  MaintainDetail: undefined
  SpotCheckDetail: undefined
}

export const tabBarScreenOptions = {
  tabBarPressColor: 'transparent',
  tabBarActiveTintColor: Colors.activeColor,
  tabBarInactiveTintColor: Colors.InactiveTintColor,
  tabBarContentContainerStyle: {
    backgroundColor: Colors.containerColor
  }, animationEnabled: false, tabBarIndicator: () => null, tabBarLabelStyle: { fontSize: 20 }
}

/** 标签页-基础配置 */
export const repairConfigScreenOptions = [
  {
    name: 'Repair',
    title: '维修',
    header: <></>,
    children: RepairScreen,
    icon: ({ color }) => {
      return (
        <AntDesign name='setting' color={color} size={24} />
      )
    },
  },
  {
    icon: ({ color }) => {
      return (
        <IconIcons name='checkbox-outline' color={color} size={24} />
      )
    },
    title: '点检',
    name: 'SpotCheck',
    header: <></>,
    children: SpotCheckScreen,
  },
  {
    icon: ({ color }) => {
      return (
        <MaterialCommunityIcon name='line-scan' color={color} size={26} />
      )
    },
    name: 'Scanner',
    title: '',
    header: <></>,
    children: ScannerScreen
  },
  {
    icon: ({ color }) => {
      return (
        <IconIcons name='cloud-done-outline' color={color} size={24} />
      )
    },
    title: '保养',
    name: 'Maintain',
    header: <></>,
    children: MaintainScreen
  },
  {
    icon: ({ color }) => {
      return (
        <AntDesign name='message1' color={color} size={24} />
      )
    },
    name: 'InfoMessage',
    title: '消息',
    header: <></>,
    children: InfoMessageScreen
  }
]
