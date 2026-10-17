import { RootState } from "@/app/store/store";

export const selectPosts = (state: RootState) => state.posts.posts
export const selectPost = (state: RootState) => state.posts.post
export const selectPostsLoading = (state: RootState) => state.posts.loading
export const selectPostError = (state: RootState) => state.posts.error
export const selectHasLoaded = (state: RootState) => state.posts.hasLoaded