import { configureStore } from "@reduxjs/toolkit";
import {cartReducer} from '../features/counter/cartSlice';
// import storage from 

export const store = configureStore({
  reducer: cartReducer
})