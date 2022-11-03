import initialState from './state'
import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  initialState,
  name: 'Search',
  reducers: {
    clearAllHistory(state) {
      state.searchHistory = []
    },
    clearSingleHistory(state, { payload }) {
      const arr = [...state.searchHistory]
      arr.splice(payload, 1)
      state.searchHistory = arr
    },
    setSearchContent(state, { payload }) {
      state.searchContent = payload
    }
  }
})

export const { clearAllHistory, clearSingleHistory, setSearchContent } = searchSlice.actions

export default searchSlice.reducer
