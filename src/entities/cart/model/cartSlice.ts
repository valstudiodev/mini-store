import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddToCartPayload, CartItem } from "./cartTypes";

const initialState: CartItem[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addToCart: (state, action: PayloadAction<string>) => {
    //   const existing = state.find((item) => item.productId === action.payload)
    //   if (existing) existing.quantity += 1
    //   else state.push({ productId: action.payload, quantity: 1 })
    // },
    // clearCart: () => [],

    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const existing = state.find((item) => item.productId === action.payload.productId)
      if (existing) {
        existing.quantity += action.payload.quantity
      } else {
        state.push({
          productId: action.payload.productId,
          quantity: action.payload.quantity,
        })
      }
    },
    clearCart: () => [],

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload

      const item = state.find((i) => i.productId === productId)

      if (!item) return

      item.quantity = item.quantity + 1

    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload

      const item = state.find((i) => i.productId === productId)

      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload

      const newState = state.filter((i) => i.productId !== productId)

      return newState
    }
  }
})

export const {
  addToCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} = cartSlice.actions

export default cartSlice.reducer