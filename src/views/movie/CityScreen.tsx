import React from 'react'
import { Colors } from '@/helpers';
import Loading from '@/components/loading';
import { findAllCityApi } from '@/api/movie'
import { mapCityToSectionListDatas } from '@/helpers/city'
import { SectionList, SectionListData, StyleSheet, Text, View } from 'react-native'

interface SectionHeaderProps {
  item: ICityItem,
  section: SectionListData<ICityItem, {
    title: string;
    data: ICityItem[];
  }>;
}

const CityScreen: React.FC = () => {
  const [cityData, setCityData] = React.useState<{ title: string, data: ICityItem[] }[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  React.useEffect(() => {
    (async () => {
      setLoading(true)
      const cityAlls = await findAllCityApi()
      const citys = mapCityToSectionListDatas(cityAlls)
      setCityData(citys)
      setLoading(false)
    })()
  }, [])

  const renderSectionHeader = (info: SectionHeaderProps): JSX.Element => {
    return (
      <View style={styles.title}>
        <Text style={styles.titleText}>{info.section.title}</Text>
      </View>
    )
  }

  const renderItem = (info: SectionHeaderProps): JSX.Element => {
    const { item } = info;
    return (
      <View style={styles.cityItem}>
        <Text style={styles.cityText}>{item.name}</Text>
      </View>
    )
  }

  return (
    <>
      {loading ? <Loading loading={loading} /> :
        <SectionList
          data={cityData}
          sections={cityData}
          renderItem={renderItem}
          stickySectionHeadersEnabled
          keyExtractor={(item) => item.id + ''}
          //@ts-ignore
          renderSectionHeader={renderSectionHeader}
        />}
    </>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    height: 40,
    paddingLeft: 10,
    backgroundColor: '#ddd',
  },
  titleText: {
    lineHeight: 40,
    fontWeight: '900',
    ...Colors.textStyle
  },
  cityItem: {
    height: 35,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cityText: {
    lineHeight: 35,
    ...Colors.textStyle
  }
})

export default CityScreen;
