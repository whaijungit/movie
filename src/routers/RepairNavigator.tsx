import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import MineScreen from '@/views/repair/mine'
import SettingScreen from '@/views/repair/mine'
import BindCarScreen from '@/views/repair/mine/BindDevice'
import BindDeviceScreen from '@/views/repair/mine/BindDevice'
import SpotCheckDetailScreen from '@/views/repair/spot-check/detail'
import RepairDetailScreen from '@/views/repair/RepairDetailScreen'
import RepairSchemScreen from '@/views/repair/RepairSchemScreen'

import { repairConfigScreenOptions as repairConfig, RepairRootStackRouters, tabBarScreenOptions } from '@/routers/repair'

const Stack = createNativeStackNavigator<RepairRootStackRouters>();
const Tab = createMaterialTopTabNavigator();

const RepairNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Group screenOptions={{ contentStyle: { backgroundColor: 'rgb(0, 43, 85)' } }}>
          <Stack.Screen name='Home'>
            {() => (
              <Tab.Navigator sceneContainerStyle={{ backgroundColor: 'rgb(0, 43, 85)' }} tabBarPosition="bottom">
                <Tab.Group screenOptions={{ ...tabBarScreenOptions, animationEnabled: false }}>
                  {repairConfig.map((config) => (
                    <Tab.Screen
                      key={config.name}
                      name={config.name}
                      children={() => <config.children />}
                      options={{ tabBarLabel: config.title, tabBarIcon: config.icon, tabBarShowLabel: config.name === 'Scanner' ? false : true }}
                    />
                  ))}
                </Tab.Group>
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen name='Mine' children={() => <MineScreen />} />
          <Stack.Screen name='BindCar' children={() => <BindCarScreen />} />
          <Stack.Screen name='Setting' children={() => <SettingScreen />} />
          <Stack.Screen name='BindDevice' children={() => <BindDeviceScreen />} />
          <Stack.Screen name='RepairScheme' children={({ navigation }) => <RepairSchemScreen navigation={navigation} />} />
          <Stack.Screen name='RepairDetail' children={() => <RepairDetailScreen />} />
          <Stack.Screen name='SpotCheckDetail' children={() => <SpotCheckDetailScreen />} />
        </Stack.Group>
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default RepairNavigator;
