import { configureStore } from "@reduxjs/toolkit";
import {cartReducer} from '../features/counter/cartSlice';

export const store = configureStore({
  reducer: cartReducer
})