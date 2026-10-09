import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { AuthUser } from "@/shared/types/Role";

const initialState: AuthState = {
  user: null,
  initialized: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUser | null>) => {
      state.user = action.payload
    },
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload
    }
  },
})

export const { setUser, setInitialized } = authSlice.actions

export default authSlice.reducer