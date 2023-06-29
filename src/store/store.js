import { configureStore } from '@reduxjs/toolkit'
import getDataSlice from './slices/getData'

export const store = configureStore({
  reducer: {
    getData: getDataSlice
  },
})