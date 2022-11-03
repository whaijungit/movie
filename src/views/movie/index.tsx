import React from 'react';
import * as Api from '@/api/movie'
import Loading from '@/components/loading';
import MovieList from './components/MovieList';
import { ScrollView, StyleSheet, View } from 'react-native'

const HomeScreen: React.FC = () => {
  const [loading, setLoading] = React.useState(true)
  const [recentlyMovies, setRecentlyMovies] = React.useState<any[]>([])
  const [upcomingMovies, setUpcomingMovies] = React.useState<any[]>([])
  const [classicMovies, setClassicMovies] = React.useState<any[]>([])
  const [recommendMovies, setRecommendMovies] = React.useState<any[]>([])


  React.useEffect(() => {
    (async () => {
      setLoading(true)
      const recentlyMovies = await Api.recentlyMoviesApi()
      setRecentlyMovies(recentlyMovies)
      setLoading(false)
    })()
  }, [])

  React.useEffect(() => {
    (async () => {
      setLoading(true)
      const recommendMovies = await Api.recommendMoviesApi()
      setRecommendMovies(recommendMovies)
      setLoading(false)
    })()
  }, [])
  React.useEffect(() => {
    (async () => {
      setLoading(true)
      const upcomingMovies = await Api.upcomingMoviesApi()
      setUpcomingMovies(upcomingMovies)
      setLoading(false)
    })()
  }, [])
  React.useEffect(() => {
    (async () => {
      setLoading(true)
      const classicMovies = await Api.classicMoviesApi()
      setClassicMovies(classicMovies)
      setLoading(false)
    })()
  }, [])

  return (
    <View style={loading ? styles.loadingContainer : {}}>
      {loading ? <Loading loading={loading} /> : (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

          {loading ? <Loading loading={loading} /> : <>
            <MovieList
              title="近期上映"
              movies={recentlyMovies}
            />
            <MovieList
              title="推荐电影"
              movies={recommendMovies}
            />
            <MovieList
              title="经典电影"
              movies={classicMovies}
            />
            <MovieList
              title="即将上映"
              movies={upcomingMovies}
            />
            <MovieList
              title="即将上映"
              movies={upcomingMovies}
            />
            <MovieList
              title="即将上映"
              movies={upcomingMovies}
            />
          </>}
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})

export default HomeScreen;
