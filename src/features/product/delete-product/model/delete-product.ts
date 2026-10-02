import { createAsyncThunk } from "@reduxjs/toolkit"
import { deleteProductById } from "../api/deleteProductService"

export const deleteProduct = createAsyncThunk<string, string, { rejectValue: string }>(
  'products/deleteProduct',
  async (productId, thunkApi) => {
    try {
      await deleteProductById(productId)
      return productId
    } catch (error) {
      return thunkApi.rejectWithValue('Failed to delete product')
    }
  }
)