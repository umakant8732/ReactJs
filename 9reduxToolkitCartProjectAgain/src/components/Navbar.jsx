import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import { IoMdHeartEmpty } from "react-icons/io";
import { useSelector } from 'react-redux';

const menuItems = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Contact',
        href: '/contact-us',
    },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const cartItems = useSelector((state) => state.cart.items.length);
    const wishItems = useSelector((state) => state.wishList.wishItems.length);
    

    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="sticky top-0 z-50 w-full bg-gray-100 rounded-2xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                {/* Sidebar toggle button for smaller screens */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded p-2"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {/* Brand Name */}
                <div className="lg:flex items-center space-x-2">
                    <span className="font-bold hidden lg:inline-block">REDUX-CART</span>
                </div>
                {/* Menu for larger screens */}
                <div className={`lg:block ${isMenuOpen ? 'hidden' : 'block'}`}>
                    <ul className="hidden lg:flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'
                                        } border-b border-gray-100 font-semibold hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Cart Icon for larger screens */}
                <div className={`lg:flex  ${isMenuOpen ? 'hidden' : 'block'}`}>
                    <div className='flex justify-center items-center'>
                        <Link
                            to="/wishlist"
                            className="text-black focus:ring-4 focus:ring-pink-300 font-medium rounded-2xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-0 focus:outline-none flex items-center"
                        >
                            <IoMdHeartEmpty className="mr-2 text-2xl mt-2" />
                            {wishItems}
                        </Link>
                        <Link
                            to="/cart"
                            className="text-black focus:ring-4 mt-1 focus:ring-orange-300 font-medium rounded-2xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none flex items-center"
                        >
                            <BsCart2 className="mr-2 text-2xl" />
                            {cartItems}
                        </Link>
                    </div>
                </div>
                {/* Sidebar for smaller screens */}
                <div className={`lg:hidden fixed inset-0 bg-gray-100 z-50 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <div className="py-2 pl-4 pr-8 bg-gray-200 text-gray-800 font-bold">Menu</div>
                            <ul className="pt-2 pb-6">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <NavLink
                                            to={item.href}
                                            className="block py-2 px-4 text-gray-700 font-semibold hover:bg-gray-50"
                                            onClick={toggleMenu}
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
