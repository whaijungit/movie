import React from 'react'
import Area from '@/components/area'
import Header from '@/components/header'
import Search from '@/components/search'
import { useNavigation } from '@react-navigation/native'

const MovieBar: React.FC = () => {
  const navigation = useNavigation<any>()
  return <Header leftRC={<Area areaName='长沙' onPress={() => navigation.navigate('City')} />} rightRC={<Search onPress={() => navigation.navigate('SearchMovie')} placeholder='搜索影片、影院、演出、视频、资讯' />} />
}

export default MovieBar;
