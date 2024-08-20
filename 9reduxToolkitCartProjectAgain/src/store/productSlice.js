import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})



const productSlice = createSlice({
    name: "products",

    initialState: {
        fetchedProducts: [],
        status: STATUSES.IDLE
    },

    reducers: {
        storeProducts: (state, action) => {
            state.fetchedProducts = action.payload
        },

        setStatus: (state, action) => {
            state.status = action.payload
        }
    }

})


export const { storeProducts, setStatus } = productSlice.actions;
export default productSlice.reducer


//thunk middleware for getting the data.

export function fetchProducts() {
    return async function fetchProductsThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await response.json();
            const pureData = data.filter((item) => item.images[1])
            dispatch(storeProducts(pureData));
            dispatch(setStatus(STATUSES.IDLE))
        } catch (error) {
            console.log(error);
        }
    }
}

