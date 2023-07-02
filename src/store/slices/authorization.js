import { createSlice } from '@reduxjs/toolkit'

export const authorizationSlice = createSlice({
  name: 'getData',
  initialState: {
    address: ''
  },
  reducers: {
    setAddress: (state, action) => {
        state.address = action.payload
    }
  }
})

export const { setAddress } = authorizationSlice.actions

export default authorizationSlice.reducer