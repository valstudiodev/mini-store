import { RootState } from "@/app/store/store";


export const selectPosts = (state: RootState) => state.posts.posts
export const selectPost = (state: RootState) => state.posts.post