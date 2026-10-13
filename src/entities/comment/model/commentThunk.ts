import { createAsyncThunk } from "@reduxjs/toolkit";
import { BlogComment, CreatedCommentPayload } from "./types";
import { createComment, getComments } from "../api/commentService";


export const fetchComments = createAsyncThunk<BlogComment[], void, { rejectValue: string }>(
  'comments/fetchComments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getComments()
      return response
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Failed to fetch comments')
    }
  }
)

export const createCommentThunk = createAsyncThunk<string, CreatedCommentPayload, { rejectValue: string }>(
  'comments/createComment',
  async (payload, thunkApi) => {
    try {
      const response = await createComment(payload)
      return response
    } catch (error) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message)
      }
      return thunkApi.rejectWithValue('Failed')
    }
  }
)
