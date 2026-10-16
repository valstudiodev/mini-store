import { createSlice } from "@reduxjs/toolkit";
import { PostsState } from "./post-types";
import { deletePost, fetchPostById, fetchPosts, updatePost } from "./postThunk";



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

      .addCase(fetchPostById.pending, (state) => {
        state.loading = true
        state.error = null
        state.post = null
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.post = action.payload
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false
        state.post = null
        state.error = action.payload ?? 'Failed to fetch post bi ID'
      })

      .addCase(deletePost.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false
        state.posts = state.posts.filter(
          (post) => post.id !== action.payload
        )
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Failed to delete a post.'
      })

      .addCase(updatePost.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false
        state.posts = state.posts.map(
          (post) => post.id === action.payload.id
            ? action.payload
            : post
        )
        if (state.post?.id === action.payload.id) {
          state.post = action.payload
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Failed to update a post.'
      })
  }
})

export default postsSlice.reducer