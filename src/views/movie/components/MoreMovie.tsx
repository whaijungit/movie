import React from 'react'
import * as Api from '@/api/movie'
import MovieCell from './MovieCell'
import movieDate from '@/data/movie.json'
import Loading from '@/components/loading'
import { useNavigation } from '@react-navigation/native'
import { FlatList, StyleSheet, View } from 'react-native'

interface IMoreMovieProps {
  type: 'onShow' | "coming"
}

let totalPage = Math.ceil(movieDate.length / 10)
let curentPage = 1;

const MoreMovie: React.FC<IMoreMovieProps> = ({ type }) => {
  const navigation = useNavigation<any>()
  const [loading, setLoading] = React.useState(true)
  const [movieList, setMovieList] = React.useState<any[]>([])
  const [headerRefresh, setHeaderRefresh] = React.useState(false);
  const [footerRefresh, setFooterRefresh] = React.useState(false)
  React.useEffect(() => {
    (async () => {
      setLoading(true)
      if (type === 'onShow') {
        const movieList = await Api.queryMoviesApi(1)
        setMovieList(movieList)
      } else {
        const movieList = await Api.queryMoviesApi(10)
        setMovieList(movieList)
      }
      setLoading(false)
    })()
  }, [type])
  // 上拉刷新
  const handleRefreshHeader = async () => {
    setHeaderRefresh(true)
    const newMovies = await Api.randomRefreshMoviesApi()
    const newState = [...newMovies, ...movieList]
    setMovieList(newState)
    setHeaderRefresh(false)
  }
  // 下拉刷新
  const handleRefresFooter = async () => {
    setFooterRefresh(true)
    if (curentPage < totalPage) {
      curentPage++
      const newMovies = await Api.queryMoviesApi(curentPage)
      const newState = [...movieList, ...newMovies]
      setMovieList(newState)
      setFooterRefresh(false)
    }
  }
  const renderFooter = () => {
    return <>
      {footerRefresh && <View style={styles.footerStyle}>
        <Loading loading={footerRefresh} />
      </View>}
    </>
  }
  return (
    <View style={styles.container}>
      {loading ? <Loading loading={loading} /> : <FlatList
        data={movieList}
        refreshing={headerRefresh}
        onEndReachedThreshold={0.5}
        onRefresh={handleRefreshHeader}
        onEndReached={handleRefresFooter}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <MovieCell onPress={() => navigation.navigate('MovieDetail', { id: item.id })} movie={item} />}
        keyExtractor={item => item.id + Date.now() + Math.random()}
      />}
      {renderFooter()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barStyle: {
    height: 48,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#268dcd',
  },
  txtStyle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  footerStyle: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
})

export default MoreMovie;
