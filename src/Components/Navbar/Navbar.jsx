import React from 'react';

const Navbar = () => {
    const navItem = (
        <>
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>

        </>
    )
    return (
        <div className="navbar bg-base-100 shadow-sm px-2 lg:px-10">
            <div className="navbar-start">

                <a className=" text-xl font-bold cursor-pointer">CS-Ticket System</a>
            </div>

            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <button className='btn bg-linear-to-r from-[#422AD5] to-[#6D5BFF] text-white'>+<span className='ml-2'>New Ticket</span></button>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {navItem}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;