import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/entities/product/model/productsSlice";
import cartReducer from "@/entities/cart/model/cartSlice";
import postsReducer from "@/entities/post/model/postSlice";
import authReducer from "@/features/auth/model/authSlice";
import authModalReducer from "@/features/auth/model/authModalSlice";
import commentsReducer from "@/entities/comment/model/commentsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    posts: postsReducer,
    users: authReducer,
    authModal: authModalReducer,
    comments: commentsReducer
  }
})

// let previousCart = store.getState().cart

// store.subscribe(() => {
//   const currentCart = store.getState().cart
//   if (currentCart !== previousCart) {
//     previousCart = currentCart

//     try {
//       localStorage.setItem('cart', JSON.stringify(currentCart))
//     } catch (error) {
//       console.log('Failed to save cart:', error);
//     }
//   }
// })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;