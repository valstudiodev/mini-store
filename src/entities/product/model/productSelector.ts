import { RootState } from "@/app/store/store";


export const selectProducts = (state: RootState) => state.products.products
export const selectProduct = (state: RootState) => state.products.product
export const selectProductloading = (state: RootState) => state.products.loading
export const selectProductError = (state: RootState) => state.products.error
export const selectHasLoaded = (state: RootState) => state.products.hasLoaded

