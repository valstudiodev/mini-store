import { CreateProductPayload, Product } from "@/entities/product/model/types"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { updateProductById } from "../api/update-product"

export const updateProduct = createAsyncThunk<Product, { productId: string, productData: CreateProductPayload }, { rejectValue: string }>(
  'products/updateProduct',
  async ({ productId, productData }, thunkApi) => {
    try {
      const updatedProduct = await updateProductById(productId, productData)
      return updatedProduct
    } catch (error) {
      return thunkApi.rejectWithValue('Failed to update product')
    }
  }
)