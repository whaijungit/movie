import React from 'react'
import MovieItem from './MovieItem'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

interface IMovieList {
  title: string
  movies: any[]
}

const MovieList: React.FC<IMovieList> = ({ title, movies }) => {
  const navigation = useNavigation<any>()
  const handlePress = () => {
    navigation.navigate('MoreMovie')
  }
  return (
    <View style={styles.movieListContainer}>
      <View style={styles.movieListHeader}>
        <Text style={styles.headerTitleStyle}>{title}</Text>
        <Pressable style={styles.moreButton} onPress={handlePress}>
          <Text style={styles.headerTextStyle}>查看更多</Text>
          <AntDesign name='right' size={10} color='#6666' />
        </Pressable>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        children={movies.map((movie, index) => index === 0 ? <MovieItem style={{ marginLeft: 0 }} index={index} movie={movie} key={movie.id} /> : <MovieItem movie={movie} style={{}} index={index} key={movie.id} />)}
      />
    </View>
  )
}

export default MovieList

const styles = StyleSheet.create({
  movieListContainer: {
    marginBottom: 30
  },
  movieListHeader: {
    fontSize: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  moreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleStyle: {
    color: '#494949',
    fontWeight: '900',
    fontSize: 18,
  },
  headerTextStyle: {
    color: '#41bd55',
    fontSize: 15,
  }
})
