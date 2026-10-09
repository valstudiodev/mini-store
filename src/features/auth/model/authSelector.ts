import { RootState } from "@/app/store/store";



export const selectAuthUser = (state: RootState) => state.users.user
export const selectAuthInitialized = (state: RootState) => state.users.initialized
// selectIsAuthenticated

export const selectIsAuthModalOpen = (state: RootState) => state.authModal.isOpen