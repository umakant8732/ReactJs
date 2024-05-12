import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo/todoSlice";
export const reduxStore = configureStore({
    reducer : todoSlice
})