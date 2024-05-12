import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { fetchingDataUsingThunk } from '../features/productSlice';


function Products() {

  const dispatch = useDispatch();
  const fetchedProducts = useSelector((state) => state.productReducer)


  useEffect(() => {
    dispatch(fetchingDataUsingThunk())
  }, [])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }








  return (
    <div className="grid grid-cols-4 gap-4">

      {
        fetchedProducts.data[0]?.map((eachProduct) => {

          return <div key={eachProduct.id} className=" w-full rounded-lg shadow-md lg:max-w-sm mt-4">
            <img
              className="object-cover w -full h-52 p-3"
              src={eachProduct.image}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                {eachProduct.title}
              </h4>
              <p className="mb-2 leading-normal">
                Rs {Math.floor(eachProduct.price * 82)}
              </p>
              <button
                className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
                onClick={() => handleAddToCart(eachProduct)}>
                Add to cart
              </button>
            </div>
          </div>
        })
      }

    </div>
  )
}

export default Products
