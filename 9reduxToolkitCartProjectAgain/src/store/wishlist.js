import {createSlice } from "@reduxjs/toolkit";


const wishlist = createSlice({
    name: "wishlistProducts",

    initialState: {
        wishItems: []
    },

    reducers: {
        addToWishList: (state, action) => {
            const itemToAdd = action.payload;
            state.wishItems.push(itemToAdd)
        },

        removeFromWishlist: (state, action) => {
            const idToRemove = action.payload;
            state.wishItems = state.wishItems.filter((item) => item.id !== idToRemove);
        },
    }
})



export const {addToWishList, removeFromWishlist} = wishlist.actions;

export default wishlist.reducer