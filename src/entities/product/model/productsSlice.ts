import { createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "./types";
import { fetchProducts } from "./productThunk";

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  hasLoaded: false
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.hasLoaded = true
        state.error = null
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Failed to fetch products'
      })
  }
})

export default productsSlice.reducer