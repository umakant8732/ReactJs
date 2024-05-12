import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../features/cartSlice';

function Cart() {

  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => {
    return state.cartReducer;
  })


  const handleRemoveItem = (productId) => {
      dispatch(removeFromCart(productId))
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-4">

      {
        cartProducts.map((eachProduct) => {
          return <div key={eachProduct?.id} className=" w-full rounded-lg shadow-md lg:max-w-sm mt-4">
          <img
            className="object-cover w-full h-52 p-3"
            src={eachProduct?.image}
            alt="image"
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold tracking-tight text-blue-600">
             {eachProduct?.title}
            </h4>
            <p className="mb-2 leading-normal">
            Rs {Math.floor(eachProduct?.price * 82)}
            </p>
            <button 
             className="px-4 py-2 text-sm text-blue-100 bg-red-500 rounded shadow"
             onClick={() => handleRemoveItem(eachProduct?.id)}
             >
              remove
            </button>
          </div>
        </div>
        })
      }
    </div>
  )
}

export default Cart
