import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets.js';

function NavBar() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8 font-medium bg-[#FFF2E1]">
            {/* Logo */}
            <Link
                to="/"
                className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
                aria-label="Go to homepage"
            >
                <img
                    src={assets.logo}
                    alt="Skilline logo"
                    className="h-16 sm:h-20 md:h-24 lg:h-28 object-contain drop-shadow-md transition-all duration-300"
                />
            </Link>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex gap-6 lg:gap-8 xl:gap-12 text-sm lg:text-base xl:text-lg text-gray-700'>
                <NavLink to={'/'} className='flex flex-col items-center gap-1 hover:text-[#F48C06] transition-colors duration-200'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to={'/careers'} className='flex flex-col items-center gap-1 hover:text-[#F48C06] transition-colors duration-200'>
                    <p>Careers</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to={'/blog'} className='flex flex-col items-center gap-1 hover:text-[#F48C06] transition-colors duration-200'>
                    <p>Blog</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to={'/about'} className='flex flex-col items-center gap-1 hover:text-[#F48C06] transition-colors duration-200'>
                    <p>About Us</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            {/* Right side buttons and menu */}
            <div className='flex items-center gap-2 sm:gap-4'>
                {/* Login/Signup buttons - hidden on small screens */}
                <div className='hidden sm:flex items-center gap-2 lg:gap-3'>
                    <Link to='/login'>
                        <button className="relative overflow-hidden border-2 border-[#F48C06] text-[#F48C06] px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 rounded-full font-medium text-sm lg:text-base transition-all duration-300 hover:text-white hover:scale-105 group">
                            <span className="absolute inset-0 bg-gradient-to-r from-[#F48C06] to-[#d97706] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                            <span className="relative z-10">Login</span>
                        </button>
                    </Link>
                    <Link to='/signup'>
                        <button className="relative overflow-hidden bg-gradient-to-r from-[#F48C06] to-[#d97706] text-white px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 rounded-full font-medium text-sm lg:text-base transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                            <span className="absolute inset-0 bg-gradient-to-r from-[#d97706] to-[#F48C06] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative z-10">Sign Up</span>
                        </button>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    className='w-6 h-6 cursor-pointer md:hidden'
                    alt="Menu"
                />
            </div>

            {/* Mobile Sidebar Menu */}
            <div className={`fixed top-0 right-0 bottom-0 bg-white shadow-lg z-50 transition-all duration-300 ${visible ? 'w-64 sm:w-72' : 'w-0'} overflow-hidden md:hidden`}>
                <div className='flex flex-col text-gray-600 h-full'>
                    {/* Back button */}
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 cursor-pointer border-b hover:bg-gray-50">
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                        <p className="font-medium">Back</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1">
                        <NavLink
                            onClick={() => setVisible(false)}
                            className='block py-4 px-6 border-b hover:bg-gray-50 hover:text-[#F48C06] transition-colors duration-200'
                            to='/'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            onClick={() => setVisible(false)}
                            className='block py-4 px-6 border-b hover:bg-gray-50 hover:text-[#F48C06] transition-colors duration-200'
                            to='/careers'
                        >
                            Careers
                        </NavLink>
                        <NavLink
                            onClick={() => setVisible(false)}
                            className='block py-4 px-6 border-b hover:bg-gray-50 hover:text-[#F48C06] transition-colors duration-200'
                            to='/blog'
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            onClick={() => setVisible(false)}
                            className='block py-4 px-6 border-b hover:bg-gray-50 hover:text-[#F48C06] transition-colors duration-200'
                            to='/about'
                        >
                            About Us
                        </NavLink>
                    </div>

                    {/* Mobile Login/Signup buttons */}
                    <div className="p-4 border-t bg-gray-50">
                        <Link to='/login' onClick={() => setVisible(false)}>
                            <button className="w-full mb-3 border-2 border-[#F48C06] text-[#F48C06] py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#F48C06] hover:text-white">
                                Login
                            </button>
                        </Link>
                        <Link to='/signup' onClick={() => setVisible(false)}>
                            <button className="w-full bg-gradient-to-r from-[#F48C06] to-[#d97706] text-white py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {visible && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setVisible(false)}
                ></div>
            )}
        </div>
    );
}

export default NavBar;