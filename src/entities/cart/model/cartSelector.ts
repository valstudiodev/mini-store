import { RootState } from "@/app/store/store";
import { selectProducts } from "@/entities/product/model/productSelector";
import { createSelector } from "@reduxjs/toolkit";

export const selectCartItems = (state: RootState) => state.cart
export const selectCartTotalQuantity = (state: RootState) => state.cart.reduce((total, item) => total + item.quantity, 0)

export const selectCartProducts = createSelector(
  [selectCartItems, selectProducts],
  (cartItems, products) => {
    return cartItems
      .map((cartItem) => {
        const product = products.find(
          (product) => product.id === cartItem.productId
        )

        if (!product) return undefined

        return {
          ...product,
          quantity: cartItem.quantity,
        }
      })
      .filter((product) => product !== undefined)
  }
)

export const selectCartSubtotal = createSelector(
  [selectCartProducts],
  (cartProducts) => {
    return cartProducts.reduce(
      (total, product) =>
        total + product.price * product.quantity,
      0
    )
  }
)