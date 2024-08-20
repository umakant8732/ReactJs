import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "shoppingCart",

    initialState,

    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
            if (existingItemIndex !== -1) {
                // console.log(existingItemIndex);
                state.items[existingItemIndex].quantity++;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }

            state.totalQuantity++;
            state.totalPrice += newItem.price * 30;
        },

        incrementItemQuantity(state, action) {
            const itemIdToIncrement = action.payload;
            const itemToIncrement = state.items.find(item => item.id === itemIdToIncrement);
            if (itemToIncrement) {
                itemToIncrement.quantity++;
                state.totalQuantity = state.totalQuantity++;
                state.totalPrice = state.totalPrice += itemToIncrement.price * 30;
            }
        },

        decrementItemQuantity(state, action) {
            const itemIdToDecrement = action.payload;
            const itemToDecrement = state.items.find(item => item.id === itemIdToDecrement);
            if (itemToDecrement) {
                itemToDecrement.quantity--;
                state.totalQuantity = state.totalQuantity--;
                state.totalPrice = state.totalPrice -= itemToDecrement.price * 30;
            }
        },

        removeFromCart: (state, action) => {
            const itemIdToRemove = action.payload;
            const itemToRemoveIndex = state.items.findIndex(item => item.id === itemIdToRemove);

            if (itemToRemoveIndex !== -1) {

                const itemToRemove = state.items[itemToRemoveIndex];
                state.totalQuantity -= itemToRemove.quantity;
                state.totalPrice -= itemToRemove.price * itemToRemove.quantity * 30;
                state.items = state.items.filter((item) => item.id !== itemIdToRemove)

            }

        }
    }

})


export const { addToCart, removeFromCart, incrementItemQuantity, decrementItemQuantity } = cartSlice.actions;
export default cartSlice.reducer