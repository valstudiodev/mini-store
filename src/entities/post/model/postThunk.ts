import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreatePostPayload, Post } from "./post-types";
import { getPostById, getPosts } from "../api/postServise";
import { deletePostById } from "@/features/post/delete-post/api/deletePost";
import { updatePostById } from "@/features/post/edit-post/api/editPost";


export const fetchPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPosts()
      return response
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Failed to fetch posts')
    }
  }
)

export const fetchPostById = createAsyncThunk<Post | null, { postId: string }, { rejectValue: string }>(
  'posts/fetchPostById',
  async ({ postId }, thunkApi) => {
    try {
      const response = await getPostById(postId)
      return response
    } catch (error) {
      return thunkApi.rejectWithValue('Failed to fetch post by ID')
    }
  }
)

export const deletePost = createAsyncThunk<string, string, { rejectValue: string }>(
  'posts/deletePost',
  async (postId, thunkApi) => {
    try {
      await deletePostById(postId)
      return postId
    } catch (error) {
      return thunkApi.rejectWithValue('Failed to delete post')
    }
  }
)

export const updatePost = createAsyncThunk<Post, { postId: string, postData: CreatePostPayload }, { rejectValue: string }>(
  'posts/updatePost',
  async ({ postId, postData }, thunkApi) => {
    try {
      const updatedPost = await updatePostById(postId, postData)
      return updatedPost
    } catch (error) {
      return thunkApi.rejectWithValue('Failed to update post')
    }
  }
)