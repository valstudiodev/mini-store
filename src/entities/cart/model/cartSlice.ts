// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AddToCartPayload, CartItem } from "./cartTypes";

// // export function loadCart(): CartItem[] {
// //   try {
// //     const itemValue = localStorage.getItem('cart')

// //     if (!itemValue) {
// //       return []
// //     }

// //     const newArray = JSON.parse(itemValue)

// //     if (!Array.isArray(newArray)) return []

// //     return newArray


// //   } catch (error) {
// //     return []
// //   }
// // }

// export function loadCart(uid: string | null): CartItem[] {
//   const storageKey = uid ? `cart_${uid}` : 'cart_guest'

//   try {
//     const storedCart = localStorage.getItem(storageKey)

//     if (!storedCart) return []

//     const parsedCart: unknown = JSON.parse(storedCart)

//     if (!Array.isArray(parsedCart)) return []

//     return parsedCart as CartItem[]
//   } catch {
//     return []
//   }
// }

// const initialState: CartItem[] = []

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
//       const existing = state.find((item) => item.productId === action.payload.productId)
//       if (existing) {
//         existing.quantity += action.payload.quantity
//       } else {
//         state.push({
//           productId: action.payload.productId,
//           quantity: action.payload.quantity,
//         })
//       }
//     },
//     clearCart: () => [],

//     increaseQuantity: (state, action: PayloadAction<string>) => {
//       const productId = action.payload

//       const item = state.find((i) => i.productId === productId)

//       if (!item) return

//       item.quantity = item.quantity + 1

//     },

//     decreaseQuantity: (state, action: PayloadAction<string>) => {
//       const productId = action.payload

//       const item = state.find((i) => i.productId === productId)

//       if (item && item.quantity > 1) {
//         item.quantity -= 1
//       }
//     },

//     removeFromCart: (state, action: PayloadAction<string>) => {
//       const productId = action.payload

//       const newState = state.filter((i) => i.productId !== productId)

//       return newState
//     }
//   }
// })

// export const {
//   addToCart,
//   clearCart,
//   increaseQuantity,
//   decreaseQuantity,
//   removeFromCart
// } = cartSlice.actions

// export default cartSlice.reducer



// cartSlice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { AddToCartPayload, CartItem } from './cartTypes'

export function loadCart(uid: string | null): CartItem[] {
  const storageKey = uid ? `cart_${uid}` : 'cart_guest'

  try {
    const storedCart = localStorage.getItem(storageKey)

    if (!storedCart) return []

    const parsedCart: unknown = JSON.parse(storedCart)

    if (!Array.isArray(parsedCart)) return []

    return parsedCart as CartItem[]
  } catch {
    return []
  }
}

const initialState: CartItem[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (_state, action: PayloadAction<CartItem[]>) => {
      return action.payload
    },

    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const existing = state.find(
        item => item.productId === action.payload.productId
      )

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
      const item = state.find(i => i.productId === action.payload)

      if (item) {
        item.quantity += 1
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.find(i => i.productId === action.payload)

      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter(i => i.productId !== action.payload)
    },
  },
})

export const {
  setCart,
  addToCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions

export default cartSlice.reducer