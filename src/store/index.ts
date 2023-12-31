import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './slices/ModalSlice'
export const store = configureStore({
  reducer: {
    profileMenu: profileSlice,
  },
})
export type RootState = {
  profileMenu: {
    isOpen: boolean
  }
}
