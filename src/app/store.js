import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
// import TDslice from "../features/products/TDslice";

export const store= configureStore({
    reducer:{
        movies:productsSlice,
    },
})