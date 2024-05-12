import React from "react";
import { CartContextHolder } from "../context/CartContext";
import { useContext } from "react";

const Items = (props) => {
    const { cartItems, setCartItems } = useContext(CartContextHolder);
    console.log(cartItems);
    function addToCart() {
        const addItem = [...cartItems, { name: props.name, price: props.price }];
        setCartItems(addItem);
    }
    return (
        <div className="item-cart">
            <h4>{props.name}</h4>
            <p>{props.price} <span>Rs</span></p>
            <button onClick={addToCart}>Add To Cart</button>
        </div>
    )
}

export default Items;