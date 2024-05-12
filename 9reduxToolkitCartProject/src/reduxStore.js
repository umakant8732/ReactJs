import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import productSlice from "./features/productSlice";

const reduxStore = configureStore({
    reducer: {
        cartReducer: cartSlice,
        productReducer : productSlice
    }
})

export default reduxStore