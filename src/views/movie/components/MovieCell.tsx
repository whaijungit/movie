import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

interface IMovieCellProps {
  movie: any
  onPress: () => void
}

const MovieCell: React.FC<IMovieCellProps> = ({ movie, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: movie.movieImg }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
        {/* 评分 */}
        {movie.average !== '0' ? (
          <View style={styles.horizontaView}>
            <Text style={styles.titleTag}>评分</Text>
            <Text style={styles.score}>{movie.average}</Text>
          </View>
        ) : (
          <View style={styles.horizontaView}>
            <Text style={styles.titleTag}>暂无评分</Text>
          </View>
        )}
        {/* 导演 */}
        <View style={styles.horizontaView}>
          <Text style={styles.titleTag}>导演</Text>
          <Text style={styles.name}>{movie.directors}</Text>
        </View>
        {/* 主演 */}
        <View style={styles.horizontaView}>
          <Text style={styles.titleTag}>主演</Text>
          <Text style={styles.name}>
            {movie.casts.length > 13 ? movie.casts.slice(0, 13) + '...' : movie.casts}
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
    borderBottomColor: '#e0e0e0'
  },
  image: {
    width: 110,
    height: 150,
    backgroundColor: '#f0f0f0'
  },
  textContainer: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  title: {
    fontSize: 15,
    color: '#333333',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  horizontaView: {
    marginTop: 10,
    flexDirection: 'row',
  },
  year: {
    textAlign: 'left',
    color: '#777777',
    marginTop: 10,
  },
  titleTag: {
    color: '#666666'
  },
  score: {
    color: '#ff8800',
    fontWeight: 'bold',
  },
  name: {
    color: '#333333',
    flex: 1
  }
})

export default MovieCell;
