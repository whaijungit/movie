import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import MovieScreen from '@/views/movie'
import CityScreen from '@/views/movie/CityScreen'
import OnShowScreen from '@/views/movie/OnShowScreen'
import ComingScreen from '@/views/movie/ComingScreen'
import TheatreScreen from '@/views/movie/TheatreScreen'
import MovieBar from '@/views/movie/components/headerBar'
import SearchBar from '@/views/movie/components/SearchBar'
import MoreHeader from '@/views/movie/components/moreHeader'
import SearchMovieScreen from '@/views/movie/SeachMovieScreen'
import MovieDetailScreen from '@/views/movie/MovieDetailScreen'


const Stack = createNativeStackNavigator()
const TopTab = createMaterialTopTabNavigator()


const MovieNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: 'none' }}>
        {/* 首页 */}
        <Stack.Screen name="Movie" options={{ header: () => <MovieBar /> }} children={() => <MovieScreen />} />
        <Stack.Screen name="MovieDetail" options={{ title: '电影详情', headerTitleAlign: 'center' }} children={() => <MovieDetailScreen />} />
        <Stack.Screen name="MoreMovie" options={{ header: () => <MoreHeader type="电影" /> }} children={() => {
          return (
            <TopTab.Navigator screenOptions={{ tabBarIndicatorStyle: { backgroundColor: '#41bd55' } }}>
              <TopTab.Screen options={{ tabBarLabelStyle: { fontSize: 16 }, title: '正在热映' }} name="OnShowScreen" children={() => <OnShowScreen />} />
              <TopTab.Screen options={{ tabBarLabelStyle: { fontSize: 16 }, title: '即将上映' }} name="ComingScreen" children={() => <ComingScreen />} />
            </TopTab.Navigator>
          )
        }}
        />
        <Stack.Screen name="TheatreMovie" options={{ header: () => <MoreHeader type="影院" /> }} children={() => <TheatreScreen />} />
        <Stack.Screen name="SearchMovie" options={{ header: () => <SearchBar /> }} children={() => <SearchMovieScreen />} />
        <Stack.Screen name="City" options={{ title: '选择城市', headerTitleAlign: 'center' }} children={() => <CityScreen />} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MovieNavigator
