import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteCommentById } from "../api/deleteCommentService";


export const deleteComment = createAsyncThunk<string, string, { rejectValue: string }>(
  'comments/deleteComment',
  async (commentId, thunkApi) => {
    try {
      await deleteCommentById(commentId)
      return commentId
    } catch (error) {
      return thunkApi.rejectWithValue('Failed to delete comment.')
    }
  }
)