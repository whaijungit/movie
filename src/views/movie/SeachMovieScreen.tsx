import React from 'react'
import Label from './components/Label'
import Loading from '@/components/loading'
import MovieCell from './components/MovieCell'
import { findMovieByTitleApi } from '@/api/movie'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchContent } from '@/redux/search/reducres'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

const SearchMovieScreen: React.FC = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation<any>()
  const [movies, setMovies] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)
  const searchContent = useSelector<IRootState, string>(store => store.movieSearch.searchContent)
  const searchHistory = useSelector<IRootState, string[]>(store => store.movieSearch.searchHistory)
  const hostSearchHistory = useSelector<IRootState, string[]>(store => store.movieSearch.hostSearchHistory)
  React.useEffect(() => {
    if (searchContent.length > 0) {
      (async () => {
        setLoading(true)
        setMovies([])
        const movies = await findMovieByTitleApi(searchContent)
        setMovies(movies)
        setLoading(false)
      })()
    }
  }, [searchContent])
  useFocusEffect(React.useCallback(
    () => {
      dispatch(setSearchContent(''))
    }, [dispatch]
  ))

  return (
    <View style={[styles.container, searchContent.length > 0 && loading ? { flex: 1, justifyContent: 'center', alignItems: 'center' } : {}, movies.length > 0 ? { padding: 0 } : {}]}>
      {searchContent.length > 0 ? (<View>
        {movies.length > 0 ? (<ScrollView>
          {
            movies.map((item, index) => (
              <MovieCell onPress={() => navigation.navigate('MovieDetail', { id: item.id })} movie={item} key={index} />
            ))
          }
        </ScrollView>) : (
          <View>
            {loading ? <Loading loading={loading} /> : <Text style={[styles.noContentText]}>未找到内容</Text>}
          </View>
        )}
      </View>) : (
        <>
          {searchHistory.length > 0 ? <Label datas={searchHistory} title="历史搜索" type="searchHistory" /> : null}
          < Label datas={hostSearchHistory} title="热门历史搜索" type="hostSearchHistory" />
        </>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  noContentText: {
    textAlign: 'center',
    marginTop: 50
  }
})

export default SearchMovieScreen;
