
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./types";
import { getProductById, getProducts } from "../api/productServise";


export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      console.log('fetchProducts: started')

      await new Promise((resolve) => setTimeout(resolve, 2000))
      const response = await getProducts()
      console.log('fetchProducts: finished')
      return response
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Failed to fetch products')
    }
  }
)

export const fetchProductById = createAsyncThunk<Product | null, { productId: string }, { rejectValue: string }>(
  'products/fetchProductById',
  async ({ productId }, thunkApi) => {
    try {
      const response = await getProductById(productId)
      return response
    } catch (error) {
      return thunkApi.rejectWithValue('Failed to fetch product by ID')
    }
  }
)

