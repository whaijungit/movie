import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

interface ILoadingProps {
  loading: boolean
}

const Loading: React.FC<ILoadingProps> = ({ loading }) => {
  return (
    <>
      {loading ? <View style={styles.container}>
        <ActivityIndicator size={'large'} color="rgb(41, 161, 247)" />
        <Text style={{ color: '#fff', paddingLeft: 10 }}>
          努力加载中....
        </Text>
      </View> : null}
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  }
})

export default Loading;
