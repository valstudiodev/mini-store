import { createSlice } from "@reduxjs/toolkit";
import { AuthModalState } from "./types";

const initialState: AuthModalState = {
  isOpen: false
}

export const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    openAuthModal: (state) => {
      state.isOpen = true
    },

    closeAuthModal: (state) => {
      state.isOpen = false
    }
  }
})

export const { openAuthModal, closeAuthModal } = authModalSlice.actions

export default authModalSlice.reducer