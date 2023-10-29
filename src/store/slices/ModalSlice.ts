import { createSlice } from '@reduxjs/toolkit'

interface profile {
  isOpen: boolean
}

const initialState: profile = {
  isOpen: false,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    openProfile(state) {
      state.isOpen = true
      console.log(state.isOpen)
    },
    toggleProfile(state) {
      state.isOpen = !state.isOpen
      console.log(state.isOpen)
    },
    closeProfile(state) {
      state.isOpen = false
    },
  },
})

export const { openProfile, closeProfile, toggleProfile } = profileSlice.actions
export default profileSlice.reducer
