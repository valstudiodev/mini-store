import { createSlice } from "@reduxjs/toolkit";
import { CommentState } from "./types";
import { createCommentThunk, fetchComments } from "./commentThunk";
import { deleteComment } from "@/features/comment/delete-comment/model/delete-comment";


const initialState: CommentState = {
  comments: [],
  isFetching: false,
  isCreating: false,
  isDeleting: false,
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
      .addCase(createCommentThunk.fulfilled, (state) => {
        state.isCreating = false
        state.error = null
        // state.comments = action.payload
      })
      .addCase(createCommentThunk.rejected, (state, action) => {
        state.isFetching = false
        state.error = action.payload ?? 'Failed to create comment'
      })

      .addCase(deleteComment.pending, (state) => {
        state.isDeleting = true
        state.error = null
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.isDeleting = false
        state.error = null
        state.comments = state.comments.filter(
          (comment) => comment.id !== action.payload
        )
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.isDeleting = false
        state.error = action.payload ?? 'Failed to delete comment.'
      })
  }
})

export default commentsSlice.reducer