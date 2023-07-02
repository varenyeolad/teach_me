import { configureStore } from '@reduxjs/toolkit'
import getDataSlice from './slices/getData'
import authorizationSlice from './slices/authorization'

export const store = configureStore({
  reducer: {
    getData: getDataSlice,
    authorization: authorizationSlice
  },
})