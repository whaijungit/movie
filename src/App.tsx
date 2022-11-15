import React from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'
import { StatusBar, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import RepairNavigator from '@/routers/RepairNavigator'
import { SheetProvider } from 'react-native-actions-sheet'

const App: React.FC = () => {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 100);
  }, [])
  return (
    <Provider store={store}>
      <SheetProvider>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={'rgb(19, 36, 52)'} barStyle='light-content' />
          <RepairNavigator />
        </View>
      </SheetProvider>
    </Provider>
  )
}

export default App;
