import React from 'react'
import * as Api from '@/api/movie'
import Area from '@/components/area'
import { windowSize } from '@/helpers'
import Loading from '@/components/loading'
import ThreatrItem from './components/TheatreItem'
import { ScrollView, StyleSheet, View } from 'react-native'

const TheatreScreen: React.FC = () => {
  const [loading, setLoading] = React.useState(true)
  const [theatrDatas, setTheatrDatas] = React.useState<ITheatre[]>([])

  React.useEffect(() => {
    (async () => {
      const theatrData = await Api.findAllTheatreApi()
      setTheatrDatas(theatrData)
      setLoading(false)
    })()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.areaSelectontainr}>
        <View style={styles.areaLeft}>
          <Area areaName='全城' />
          <Area areaName='筛选' />
        </View>
        <View style={styles.areaRight}>
          <Area areaName='综合排序' />
        </View>
      </View>
      {loading ? <Loading loading={loading} /> : (
        <ScrollView style={styles.scrollContainer}>
          {
            theatrDatas.map((item, index) => (
              <ThreatrItem item={item} key={item.theaterName} index={index} />
            ))
          }
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  areaSelectontainr: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  areaLeft: {
    width: '40%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  areaRight: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
  },
  theatrContainer: {
    padding: 10,
  },
  scrollContainer: {
    height: windowSize.height - 110
  }
})

export default TheatreScreen;
