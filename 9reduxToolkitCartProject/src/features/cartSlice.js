import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "shopping cart",
    initialState : [], 
    reducers : {
        addToCart : (state, action) =>{
            // [..state, action.payload] redux do this internally
            state.push(action.payload)
        },

        removeFromCart : (state, action) =>{
            return state.filter((eachProduct) => eachProduct.id !== action.payload);
        },
    }

})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer
