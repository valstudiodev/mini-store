import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/entities/product/model/productsSlice";
import cartReducer from "@/entities/cart/model/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;