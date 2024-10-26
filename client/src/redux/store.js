import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/cartSlice'
import booksApi from './books/bookApi'
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
})