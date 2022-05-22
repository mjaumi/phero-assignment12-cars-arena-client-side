import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import visa from '../../../Assets/images/visa.png';
import masterCard from '../../../Assets/images/master-card.png';
import americanExpress from '../../../Assets/images/american-express.png';
import discover from '../../../Assets/images/discover.png';
import unionPay from '../../../Assets/images/union-pay.png';
import jcb from '../../../Assets/images/jcb.png';

const Footer = () => {

    // rendering footer component here
    return (
        <footer className='border-t-2 border-primary bg-base-300'>
            <div className='py-20 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>
                <div className='text-left'>
                    <Link to='/' className='btn btn-ghost normal-case text-xl font-extralight'>Cars <span className='text-4xl font-bold text-primary'>Arena</span></Link>
                    <div className='mt-3'>
                        <p className='text-sm'>This is a trademark authorized website of CarsArena. Any kind of copyright infringement will cause taking legal actions against the person or group of persons.</p>
                    </div>
                    <div className='mt-10'>
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} className='mr-2 text-primary' />
                            14/B Razarbag, Dhaka-1000.
                        </p>
                        <p className='mt-1'>
                            <FontAwesomeIcon icon={faPhone} className='mr-2 text-primary' />
                            (+880)1788744803
                        </p>
                        <p className='mt-1'>
                            <FontAwesomeIcon icon={faEnvelope} className='mr-2 text-primary' />
                            cars@arena.com.bd
                        </p>
                    </div>
                </div>
                <div className='text-left md:text-center flex flex-col justify-center'>
                    <h4 className='text-neutral text-xl font-bold mb-5'>PAGES</h4>
                    <Link to='/' className='hover:text-secondary duration-300 block'>About Us</Link>
                    <Link to='/' className='hover:text-secondary duration-300 mt-3 block'>Our Team</Link>
                    <Link to='/' className='hover:text-secondary duration-300 mt-3 block'>Services</Link>
                    <Link to='/' className='hover:text-secondary duration-300 mt-3 block'>Blogs</Link>
                </div>
                <div className='text-left md:text-center flex flex-col justify-center'>
                    <h4 className='text-neutral text-xl font-bold mb-5'>QUICK LINKS</h4>
                    <Link to='/' className='hover:text-secondary duration-300 block'>Terms & Conditions</Link>
                    <Link to='/' className='hover:text-secondary duration-300 mt-3 block'>Support</Link>
                    <Link to='/' className='hover:text-secondary duration-300 mt-3 block'>Help & FAQ</Link>
                    <Link to='/' className='hover:text-secondary duration-300 mt-3 block'>Privacy Policy</Link>
                </div>
                <div className='text-left md:text-center flex flex-col justify-center'>
                    <h4 className='text-neutral text-xl font-bold mb-5'>WE ACCEPT</h4>
                    <div className='grid grid-cols-3 gap-y-10'>
                        <div className='bg-neutral w-[60px] h-[60px] mx-auto hover:scale-125 cursor-pointer duration-300'>
                            <img className='w-full' src={visa} alt='Visa Card' />
                        </div>
                        <div className='bg-neutral w-[60px] h-[60px] mx-auto hover:scale-125 cursor-pointer duration-300'>
                            <img src={masterCard} alt='Master Card' />
                        </div>
                        <div className='bg-neutral w-[60px] h-[60px] mx-auto hover:scale-125 cursor-pointer duration-300'>
                            <img src={americanExpress} alt='American Express Card' />
                        </div>
                        <div className='bg-neutral w-[60px] h-[60px] mx-auto flex items-center justify-center p-px hover:scale-125 cursor-pointer duration-300'>
                            <img src={discover} alt='Discover Card' />
                        </div>
                        <div className='bg-neutral w-[60px] h-[60px] mx-auto flex items-center justify-center p-px hover:scale-125 cursor-pointer duration-300'>
                            <img src={unionPay} alt='Union Pay Card' />
                        </div>
                        <div className='bg-neutral w-[60px] h-[60px] mx-auto hover:scale-125 cursor-pointer duration-300'>
                            <img src={jcb} alt='JCB Card' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5 border-t border-accent bg-banner-img bg-center'>
                <div className='w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between'>
                    <p className='text-neutral'><small>Copyright© 2022 CarsArena All Rights Reserved.</small></p>
                    <div className='flex mt-5 md:mt-0'>
                        <a href='https://www.facebook.com/mj.aumi/' className='text-accent hover:text-secondary duration-300 hover:scale-125' target='_blank' rel='noreferrer'>
                            <div className='bg-neutral h-[40px] w-[40px] flex items-center justify-center'>
                                <FontAwesomeIcon icon={faFacebookF} className='h-[20px] w-[20px] my-auto' />
                            </div>
                        </a>
                        <a href='https://github.com/mjaumi' className='text-accent hover:text-secondary duration-300 hover:scale-125' target='_blank' rel='noreferrer'>
                            <div className='bg-neutral h-[40px] w-[40px] flex items-center justify-center ml-5'>
                                <FontAwesomeIcon icon={faTwitter} className='h-[20px] w-[20px] my-auto' />
                            </div>
                        </a>
                        <a href='https://github.com/mjaumi' className='text-accent hover:text-secondary duration-300 hover:scale-125' target='_blank' rel='noreferrer'>
                            <div className='bg-neutral h-[40px] w-[40px] flex items-center justify-center ml-5'>
                                <FontAwesomeIcon icon={faInstagram} className='h-[20px] w-[20px] my-auto' />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;