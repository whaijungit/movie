import movieSearch from './search/reducres'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore<IRootState>({
  reducer: {
    movieSearch,
  }
})

export default store;
