import { configureStore } from '@reduxjs/toolkit'
import { loginSlice } from './redux/loginslice'


export const store = configureStore({
  reducer: {
    userData: loginSlice.reducer,
  },
})