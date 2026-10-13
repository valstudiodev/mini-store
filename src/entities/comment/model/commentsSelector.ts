import { RootState } from "@/app/store/store";

export const selectComments = (state: RootState) => state.comments.comments
export const selectCommentCount = (state: RootState) => state.comments.comments.length
export const selectCommentIsCreating = (state: RootState) => state.comments.isCreating
export const selectCommentIsFetching = (state: RootState) => state.comments.isFetching
export const selectCommentError = (state: RootState) => state.comments.error