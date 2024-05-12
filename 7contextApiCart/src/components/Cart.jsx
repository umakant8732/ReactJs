import React from "react";
import { CartContextHolder } from "../context/CartContext";
import { useContext } from "react";


const Cart = () => {

    const { cartItems, setCartItems } = useContext(CartContextHolder);

    const total = cartItems.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue.price;
    },0);


    return (
        <div className="cart-container">
            <h3>Cart</h3>
            {
                cartItems && cartItems.map((item) => {
                    return <li>{item.name} - {item.price}</li>
                })
            }

            <p>Total Amount - {total}</p>
        </div>
    )
}

export default Cart;