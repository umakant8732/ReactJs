import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Link, } from 'react-router-dom'
import { fetchProducts } from '../store/productSlice';
import { BsCart2 } from 'react-icons/bs';
import { IoMdHeartEmpty } from "react-icons/io";
import { addToWishList } from '../store/wishlist';



export default function Products() {


    const dispatch = useDispatch();
    const { fetchedProducts: Products } = useSelector((state) => state.products)

    const fetchApiOfProducts = async () => {
        dispatch(fetchProducts())
    };

    useEffect(() => {
        fetchApiOfProducts();
    }, []);


    function handleAddToCart(product) {
        dispatch(addToCart(product))
    }

    function handleAddToWishlist(product) {

        dispatch(addToWishList(product))
    }

    const [page, setPage] = useState(1);
    const itemsPerPage = 12;
    const pageNumbers = [...Array(Math.ceil(Products.length / itemsPerPage))];


    // get wishlist items so that i can check whether product is added or not into the wishlist

    const { wishItems } = useSelector((state) => state.wishList)
    console.log(wishItems);








    return (


        // Inside your component render method or JSX:
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {Products.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage).map((product) => (
                        <div key={product.id} className="group">
                            <Link to="/">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={product.images[1]}
                                        alt={product.name}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                            </Link>
                            <div className="mt-4">
                                <h3 className="text-sm text-gray-700 max-w-full truncate">{product.title}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price * 30}</p>
                            </div>
                            {/* Add to Cart Button */}
                            <div className='flex items-center justify-center gap-4'>
                                <button
                                    className="mt-2 flex justify-center bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded w-[50px]"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    <BsCart2 />
                                </button>
                                <button
                                    className={`mt-2 flex justify-center ${wishItems.some(item => item.id === product.id) ? 'bg-pink-900 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-800'} text-white font-bold py-2 px-4 rounded w-[50px]`}
                                    onClick={() => handleAddToWishlist(product)}
                                    disabled={wishItems.some(item => item.id === product.id)}
                                >
                                    <IoMdHeartEmpty />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* code for pagination */}
            <div className="flex items-center justify-center mt-4 mb-4">
                <span className="mx-1 text-sm  font-semibold cursor-pointer text-gray-900" onClick={() => page <= 1 ? setPage(1) : setPage(page - 1)}>
                    &larr; Previous
                </span>
                {pageNumbers.map((_, pageNumber) => (
                    <span
                        key={pageNumber}
                        className={page === pageNumber + 1 ? `bg-slate-300 mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 cursor-pointer` : `mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 cursor-pointer`}
                        onClick={() => setPage(pageNumber + 1)}
                    >
                        {pageNumber + 1}
                    </span>
                ))}
                <span className="mx-1 text-sm font-semibold cursor-pointer text-gray-900" onClick={() => page === pageNumbers.length ? setPage(page) : setPage(page + 1)}>
                    Next &rarr;
                </span>
            </div>
            {/* code for pagination ends here */}
        </div>

    )
}


