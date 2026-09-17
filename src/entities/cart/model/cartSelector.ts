import { RootState } from "@/app/store/store";

export const selectCartItems = (state: RootState) => state.cart
export const selectCartTotalQuantity = (state: RootState) => state.cart.reduce((total, item) => total + item.quantity, 0)
export const selectCartProducts = (state: RootState) => {
  const cartItems = state.cart
  const products = state.products.products

  return cartItems.map((cartItem) => {
    const product = products.find(
      (product) => product.id === cartItem.productId
    )

    if (!product) return undefined


    return {
      ...product,
      quantity: cartItem.quantity
    }
  })
    .filter((product) => product !== undefined)
}
export const selectCartSubtotal = (state: RootState) => {
  const cartProducts = selectCartProducts(state)
  return cartProducts.reduce((prev, product) => {
    const total = prev + (product.price * product.quantity)
    return total
  }, 0)
}