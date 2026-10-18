import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddToCartPayload, CartItem } from "./cartTypes";

export function loadCart(): CartItem[] {
  try {
    const itemValue = localStorage.getItem('cart')

    if (!itemValue) {
      return []
    }

    const newArray = JSON.parse(itemValue)

    if (!Array.isArray(newArray)) return []

    return newArray


  } catch (error) {
    return []
  }
}

const initialState: CartItem[] = loadCart()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
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