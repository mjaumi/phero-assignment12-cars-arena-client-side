import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    // rendering header component here
    return (
        <header className='bg-base-300 py-3 bg-opacity-70 sticky top-0 -mb-[90px] z-[99999]'>
            <nav className='w-full md:w-4/5 mx-auto'>
                <div className='navbar p-0'>
                    <div className='navbar-start'>
                        <div className='dropdown'>
                            <label tabIndex='0' className='btn btn-ghost lg:hidden'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
                            </label>
                            <ul tabIndex='0' className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52'>
                                <div className='flex flex-col items-center'>
                                    <li><Link to='/'>Home</Link></li>
                                    <li className='mb-5'><Link to='/blogs'>Blogs</Link></li>
                                    <Link to='/login' className='btn'>Get started</Link>
                                </div>
                            </ul>
                        </div>
                        <Link to='/' className='btn btn-ghost normal-case text-lg font-extralight'>Cars <span className='text-3xl font-bold text-primary'>Arena</span></Link>
                    </div>
                    <div className='navbar-end hidden lg:flex'>
                        <ul className='menu menu-horizontal p-0 mr-5'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                        </ul>
                        <Link to='/login' className='btn btn-secondary btn-md rounded-none text-neutral'>Log In</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;