import { createSlice } from "@reduxjs/toolkit";
import { CommentState } from "./types";
import { createCommentThunk, fetchComments } from "./commentThunk";


const initialState: CommentState = {
  comments: [],
  isFetching: false,
  isCreating: false,
  error: null
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isFetching = true
        state.error = null
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isFetching = false
        state.error = null
        state.comments = action.payload
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.isFetching = false
        state.error = action.payload ?? 'Failed to fetch comments'
      })

      .addCase(createCommentThunk.pending, (state) => {
        state.isCreating = true
        state.error = null
      })
      .addCase(createCommentThunk.fulfilled, (state, action) => {
        state.isCreating = false
        state.error = null
        // state.comments = action.payload
      })
      .addCase(createCommentThunk.rejected, (state, action) => {
        state.isCreating = false
        state.error = action.payload ?? 'Failed to create comment'
      })
  }
})

export default commentsSlice.reducer