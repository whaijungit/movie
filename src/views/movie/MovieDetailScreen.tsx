import React from 'react'
import Video from 'react-native-video'
import Loading from '@/components/loading'
import { findMovieByIdApi } from '@/api/movie'
import { Colors, windowSize } from '@/helpers'
import { useRoute } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

const { width, height } = windowSize

const MovieDetailScreen: React.FC = () => {
  const route = useRoute()
  const [loading, setLoading] = React.useState(false)
  const [auto, setAuto] = React.useState(false)
  const [movie, setMovie] = React.useState<IMovie | null>(null)
  React.useEffect(() => {
    (async () => {
      const { id } = route.params as { id?: string }
      if (id) {
        setLoading(true)
        const movie = await findMovieByIdApi(id)
        setMovie(movie)
        setLoading(false)
      }
    })()
  }, [])
  if (!movie) {
    return <Loading loading={loading} />
  }
  return (
    <View>
      <View style={styles.vdContainer}>
        <Video
          controls
          style={styles.video}
          source={{
            uri: movie.vd,
          }}
          resizeMode="contain"
        />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTop}>
            <View style={styles.headerLeft}>
              <Image source={{ uri: movie.movieImg }} style={styles.movieImg} />
            </View>
            <View style={styles.headerRight}>
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.score}>{movie.average === "0" ? "暂无评分" : movie.average + '分'}</Text>
              <Text style={[styles.commonStyle]}>上映日期 {movie.year}</Text>
              <Text style={[styles.commonStyle]}>类型 {movie.genres}</Text>
              <Text style={[styles.commonStyle]}>导演 {movie.directors}</Text>
              <Text style={[styles.commonStyle]}>主演 {movie.casts.length > 13 ? movie.casts.slice(0, 13) + '...' : movie.casts}</Text>
            </View>
          </View>
          <View style={styles.headerBottom}>
            <View style={styles.priceStyle}>
              <AntDesign name='heart' size={16} />
              <Text style={styles.priceTxt}>想看</Text>
            </View>
            <View style={styles.priceStyle}>
              <AntDesign name='star' size={16} />
              <Text style={styles.priceTxt}>看过</Text>
            </View>
          </View>
        </View>
        <Pressable style={[styles.movieIntroContainer, auto ? styles.autoHeight : {}]} onPress={() => setAuto(!auto)}>
          <Text style={{ ...styles.movieIntroTxt }}>{movie.summary.replaceAll('<p>', '').replaceAll('</p>', '')}</Text>
        </Pressable>
      </ScrollView>
      <View style={styles.selectSeatBtnContainer}>
        <Pressable style={styles.selectSeatBtn}>
          <Text style={styles.selectSeatBtnTxt}>选座购票</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  vdContainer: {
    width: "100%",
    height: 230,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    alignSelf: 'center',
    width: 400,
    height: 230,
  },
  container: {
    height: height - 230 - 80, // 减去视频区域的高度 230 以及头部区域的高度 80
  },
  headerContainer: {
    width: "100%",
    height: 220,
    marginTop: 10
  },
  headerTop: {
    width: "100%",
    height: "80%",
    flexDirection: "row",
  },
  headerLeft: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
  },
  movieImg: {
    width: "100%",
    height: "95%",
    resizeMode: 'contain'
  },
  headerRight: {
    paddingTop: 5
  },
  title: {
    fontWeight: "900",
    marginBottom: 5,
    ...Colors.textStyle,
    fontSize: 22,
  },
  score: {
    fontSize: 16,
    color: 'rgb(241,149,62)'
  },
  commonStyle: {
    fontSize: 16,
    marginTop: 8,
    color: "#555"
  },
  headerBottom: {
    flexDirection: "row",
    justifyContent: 'space-around',
    height: "20%",
    alignItems: "center",
    marginTop: 10
  },
  priceStyle: {
    borderRadius: 25,
    justifyContent: 'center',
    width: 120,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  priceImage: {
    height: 16,
    width: 16
  },
  priceTxt: {
    ...Colors.textStyle,
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 10
  },
  movieIntroContainer: {
    width: "100%",
    height: 150,
    // height: "auto",
    marginTop: 15,
    padding: 10,
    marginBottom: 50
  },
  autoHeight: {
    height: "auto",
  },
  movieIntroTxt: {
    color: '#333',
    lineHeight: 40,
    // fontSize: 20,
    letterSpacing: 5
  },
  selectSeatBtnContainer: {
    width: "100%",
    height: 60,
    // borderWidth: 1,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  selectSeatBtn: {
    width: 250,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#41bd55",
  },
  selectSeatBtnTxt: {
    textAlign: "center",
    lineHeight: 40,
    fontSize: 16,
    color: "#fff",
    fontWeight: "900",
  }
})


export default MovieDetailScreen;
