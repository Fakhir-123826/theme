// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import cartReducer from './features/cartSlice';
import wishlistReducer from './features/wishlistSlice';
import compareReducer from './features/compareSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;