import { ChevronDownIcon, LogoutIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const Header = () => {
    // integration of react firebase hooks
    const [user] = useAuthState(auth);

    // integration of react hooks
    const [popoverMenuShow, setPopoverMenuShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // showing header popover menu
    const showMenu = () => {
        setPopoverMenuShow(!popoverMenuShow);
    }

    // event handler for log out
    const handleSignOut = async () => {
        await signOut(auth);
        setPopoverMenuShow(false);
        toast.success('Log Out Successful!!!');
    }

    // rendering header component here
    return (
        <header className='bg-base-300 py-3 bg-opacity-70 sticky top-0 -mb-[90px] z-[99999] backdrop-blur-[6px]'>
            <nav className='w-full md:w-4/5 mx-auto'>
                <div className='navbar p-0'>
                    <div>
                        <div className='dropdown'>
                            <label tabIndex='0' className='btn btn-ghost lg:hidden'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
                            </label>
                            <ul tabIndex='0' className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52'>
                                <div className='flex flex-col items-center'>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/'>Spare Parts</Link></li>
                                    <li><Link to='/'>Reviews</Link></li>
                                    <li><Link to='/'>About</Link></li>
                                    <li><Link to='/'>Contact</Link></li>
                                    {
                                        (user && !location.pathname === '/signup') ? <>
                                            <div onClick={showMenu} className='btn btn-ghost relative flex items-center normal-case'>
                                                <p>{user.displayName}</p>
                                                <div className='ml-3 h-10 w-10 rounded-full overflow-hidden border-2 border-primary'>
                                                    {
                                                        user.photoURL ?
                                                            <img src={user.photoURL} alt={user.displayName} />
                                                            :
                                                            <div className='h-full bg-accent'>
                                                                <FontAwesomeIcon icon={faUserAlt} className='mt-2 h-[90%]' />
                                                            </div>
                                                    }
                                                </div>
                                                <ChevronDownIcon className={`${popoverMenuShow ? 'rotate-0' : 'rotate-90'} text-neutral duration-300 h-5 w-5 ml-2`} />
                                            </div>
                                            <div className={`${popoverMenuShow ? 'scale-y-100' : 'scale-y-0'} bg-base-200 z-50 text-neutral origin-top duration-300 absolute top-full w-[160px]`}
                                            >
                                                <button onClick={() => navigate('/dashboard')} className={`${popoverMenuShow ? 'scale-y-100' : 'scale-y-0'} text-sm py-2 px-4 font-normal block w-full whitespace-nowrap hover:bg-secondary hover:font-bold duration-300 origin-top`}>
                                                    <FontAwesomeIcon icon={faUserAlt} className='mr-2' />
                                                    Dashboard
                                                </button>
                                                <button className={`${popoverMenuShow ? 'scale-y-100' : 'scale-y-0'} text-sm py-2 px-4 font-normal w-full whitespace-nowrap hover:bg-secondary hover:font-bold duration-300 origin-top flex items-center justify-center`}>
                                                    <LogoutIcon className='h-5 w-5 mr-2' />
                                                    <p>Log Out</p>
                                                </button>
                                            </div>
                                        </>
                                            :
                                            <Link to='/login' className='btn btn-secondary btn-md rounded-none text-neutral mt-5 capitalize'>Log In</Link>
                                    }
                                </div>
                            </ul>
                        </div>
                        <Link to='/' className='btn btn-ghost normal-case text-lg font-extralight'>Cars <span className='text-3xl font-bold text-primary'>Arena</span></Link>
                    </div>
                    <div className='navbar-end hidden lg:flex flex-1'>
                        <ul className='menu menu-horizontal p-0 mr-5 text-neutral text-lg font-extralight'>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#spareParts'>Spare Parts</a></li>
                            <li><a href='#reviews'>Reviews</a></li>
                            <li><a href='#featured'>Featured</a></li>
                            <li><a href='#about'>About Us</a></li>
                            <li><a href='#services'>Services</a></li>
                            <li><a href='#ourTeam'>Our Team</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                        {
                            (user && location.pathname !== '/signup') ? <>
                                <div onClick={showMenu} className='btn btn-ghost relative flex items-center normal-case'>
                                    <p>{user.displayName}</p>
                                    <div className='ml-3 h-10 w-10 rounded-full overflow-hidden border-2 border-primary'>
                                        {
                                            user.photoURL ?
                                                <img src={user.photoURL} alt={user.displayName} />
                                                :
                                                <div className='h-full bg-accent'>
                                                    <FontAwesomeIcon icon={faUserAlt} className='mt-2 h-[90%]' />
                                                </div>
                                        }
                                    </div>
                                    <ChevronDownIcon className={`${popoverMenuShow ? 'rotate-0' : 'rotate-90'} text-neutral duration-300 h-5 w-5 ml-2`} />
                                </div>
                                <div className={`${popoverMenuShow ? 'scale-y-100' : 'scale-y-0'} bg-base-200 z-50 text-neutral origin-top duration-300 absolute top-full w-[160px]`}
                                >
                                    <button onClick={() => navigate('/dashboard')} className={`${popoverMenuShow ? 'scale-y-100' : 'scale-y-0'} text-sm py-2 px-4 font-normal block w-full whitespace-nowrap hover:bg-secondary hover:font-bold duration-300 origin-top`}>
                                        <FontAwesomeIcon icon={faUserAlt} className='mr-2' />
                                        Dashboard
                                    </button>
                                    <button onClick={handleSignOut} className={`${popoverMenuShow ? 'scale-y-100' : 'scale-y-0'} text-sm py-2 px-4 font-normal w-full whitespace-nowrap hover:bg-secondary hover:font-bold duration-300 origin-top flex items-center justify-center`}>
                                        <LogoutIcon className='h-5 w-5 mr-2' />
                                        <p>Log Out</p>
                                    </button>
                                </div>
                            </>
                                :
                                <Link to='/login' className='btn btn-secondary btn-md rounded-none text-neutral capitalize'>Log In</Link>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;