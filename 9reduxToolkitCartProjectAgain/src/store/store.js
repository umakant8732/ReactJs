import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from "redux";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import wishlist from "./wishlist";

// Combine all your reducers
const rootReducer = combineReducers({
    cart: cartSlice,
    products: productSlice,
    wishList: wishlist
});

// Config for redux-persist
const persistConfig = {
    key: 'root', // Key in storage
    storage,     // Type of storage (localStorage)
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
    reducer: persistedReducer,
});

// Create a persistor
export const persistor = persistStore(store);

export default store;
