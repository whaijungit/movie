import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Pressable, Image, StyleProp, ViewStyle } from 'react-native'

interface IMovieItem {
  movie: any
  index: number
  style?: StyleProp<ViewStyle>
}

const MovieItem: React.FC<IMovieItem> = ({ movie, style }) => {
  const navigation = useNavigation<any>()

  const handlePress = () => {
    navigation.navigate('MovieDetail', { id: movie.id })
  }
  return (
    <Pressable style={[styles.container, style]} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: movie.movieImg }}
        />
      </View>
      <View>
        <View>
          <Text style={styles.title}>{movie.title.length > 6 ? movie.title.slice(0, 5) + '...' : movie.title}</Text>
        </View>
        <View style={styles.scoreContainer}>
          {
            !(movie.score == 0) && !movie.score ? (
              <Text style={styles.rate}>暂无评分</Text>
            ) : (
              <Text style={[styles.score, styles.rate]}>电影评分: <Text style={styles.rate}>{movie.score}</Text></Text>
            )
          }
        </View>
      </View>
      <Text>MovieItem</Text>
    </Pressable>
  )
}

export default MovieItem

const styles = StyleSheet.create({
  container: {
    width: 102,
    height: 185,
    marginLeft: 10,
  },
  imageContainer: {
    width: 102,
    height: 140,
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 5,
  },
  titleContainer: {
    textAlign: 'center'
  },
  title: {
    margin: 1,
    marginTop: 5,
    color: '#222',
    fontWeight: '900'
  },
  scoreContainer: {
    height: 20,
    width: '100%',
    justifyContent: 'center'
  },
  rate: {
    fontSize: 12,
    fontWeight: '900',
    alignItems: 'center',
    color: 'rgb(224,175,76)',
  },
  score: {
    fontSize: 14,
    fontWeight: '900',
    fontStyle: 'italic'
  }
})