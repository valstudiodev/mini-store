import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateProductPayload, Product } from "./types";
import { deleteProductById, getProductById, getProducts, updateProductById } from "../api/productServise";


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