import React, { useState } from "react";
import { createContext } from "react";


export const CartContextHolder = createContext(null);

export const CartContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);


    return (
        <CartContextHolder.Provider value={{cartItems, setCartItems}}>
            {props.children}
        </CartContextHolder.Provider>
    )
}