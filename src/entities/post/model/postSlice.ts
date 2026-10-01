import { createSlice } from "@reduxjs/toolkit";
import { PostsState } from "./post-types";
import { fetchPosts } from "./postThunk";



const initialState: PostsState = {
  posts: [],
  post: null,
  loading: false,
  error: null,
  hasLoaded: false,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false
        state.hasLoaded = true
        state.error = null
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Failed to fetch posts'
      })
  }
})

export default postsSlice.reducer