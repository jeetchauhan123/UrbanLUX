import { configureStore } from '@reduxjs/toolkit'
import { loginSlice } from './redux/loginSlice'


export const store = configureStore({
  reducer: {
    userData: loginSlice.reducer,
  },
})