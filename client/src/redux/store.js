import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/cartSlice'
import booksApi from './books/bookApi'
import ordersApi from './orders/ordersApi'
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware,ordersApi.middleware),
})