import { createSlice } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem('userInfo');

const initialState = {
    userInfo: userInfoFromLocalStorage ? JSON.parse(userInfoFromLocalStorage) : null,
};



const authSlice = createSlice({
    name : "authentication",
    initialState,

    reducers : {
        setUserCredentials : (state, action) =>{
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(state.userInfo));   
        },

        logout : (state, action) =>{
            state.userInfo = null;
            localStorage.removeItem("userInfo");
        }   
        
    }
})

export const {setUserCredentials, logout} = authSlice.actions;
export default authSlice.reducer;
