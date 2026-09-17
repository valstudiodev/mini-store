import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./types";
import { getProducts } from "../api/productServise";


export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProducts()
      return response
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Failed to fetch products')
    }
  }
)