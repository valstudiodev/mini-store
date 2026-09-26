import { createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "./types";
import { deleteProduct, fetchProductById, fetchProducts, updateProduct } from "./productThunk";

const initialState: ProductsState = {
  products: [],
  product: null,
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

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.error = null
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        )
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        state.error = null
        state.products = state.products.map(
          (product) => product.id === action.payload.id
            ? action.payload
            : product
        )
      })

      .addCase(fetchProductById.pending, (state) => {
        state.loading = true
        state.error = null
        state.product = null
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.product = action.payload
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false
        state.product = null
        state.error = action.payload ?? 'Failed to fetch product by ID'
      })
  }
})

export default productsSlice.reducer