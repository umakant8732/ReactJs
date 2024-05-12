import { createSlice } from "@reduxjs/toolkit";



// creating mechanism like enum;

const STATUSES = {
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
}

const productSlice = createSlice({
    name: "productList",
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },

    reducers: {
        setProducts: (state, action) => {
            state.data.push(action.payload);
        },

        setStatus: (state, action) => {
            state.status = action.payload
        }
    }


})


export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;


// creating redux thunk manually

export function fetchingDataUsingThunk() {
    return async function fetchProducts(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING))
        try {

            const response = await fetch('https://fakestoreapi.com/products/');
            const data = await response.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));

        } catch (error) {

            console.log(error);
            dispatch(setStatus(STATUSES.ERROR))

        }

    }
}