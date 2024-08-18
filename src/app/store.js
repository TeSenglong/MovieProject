import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productsSlice from "../features/products/productsSlice";

export const store= configureStore({
    reducer:{
        counter:counterReducer,
        movies:productsSlice
    },
})