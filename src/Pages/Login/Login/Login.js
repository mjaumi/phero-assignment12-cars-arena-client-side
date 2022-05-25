import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ArenaButton from '../../Shared/ArenaButton/ArenaButton';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import ForgotPasswordModal from '../ForgotPasswordModal/ForgotPasswordModal';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';

const Login = () => {
    // integration of react firebase hooks
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    // integration of react hook form here
    const { register, handleSubmit, formState: { errors } } = useForm();

    // integration of react hook
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // event handler for login
    const handleLogin = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);

        // getting token from API
        const result = await axios.post('https://shielded-mountain-18545.herokuapp.com/getToken', { email: data.email });
        localStorage.setItem('accessToken', result.data.accessToken);
    }

    if (user) {
        toast.success('Log In Successful!!!');
        navigate('/');
    }

    // rendering login component here
    return (
        <section className='relative min-h-[90vh] overflow-hidden'>
            <div className=' flex items-center justify-center'>
                <PageTitle title={'Log In'} />
                <div className='w-[90%] md:w-1/3 mb-20 mt-40'>
                    <div className='w-full bg-base-200 border border-accent py-5 px-5 md:px-14'>
                        <div className='text-left mb-8'>
                            <h3 className='text-3xl font-bold text-primary'>Log In</h3>
                            <p className='text-sm md:text-base text-secondary'>Log in to your respective account here.</p>
                        </div>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className='form-control w-full'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Email</span>
                                </label>
                                <input type='email' placeholder='Enter Your Email' className='input input-bordered input-secondary rounded-none w-full text-neutral' {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Invalid Email Address'
                                    }
                                })} />
                                <label className='label'>
                                    {errors.email?.type === 'required' && <span className='label-text-alt text-warning'>{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className='label-text-alt text-warning'>{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className='form-control w-full'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Password</span>
                                </label>
                                <input type='password' placeholder='Enter Your Password' className='input input-bordered input-secondary rounded-none w-full text-neutral' {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer'
                                    }
                                })} />
                                <label className='label'>
                                    {errors.password?.type === 'required' && <span className='label-text-alt text-warning'>{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className='label-text-alt text-warning'>{errors.password.message}</span>}
                                </label>
                            </div>
                            <div className='flex justify-end'>
                                <label onClick={() => setShowModal(true)} htmlFor='forgot-password-modal' className='text-primary text-sm underline hover:opacity-60 duration-300 cursor-pointer'>Forgot Password?</label>
                            </div>
                            <div className='mt-10'>
                                <ArenaButton type={'submit'}>Log In</ArenaButton>
                            </div>
                        </form>
                        <div>
                            <p className='text-neutral text-sm'>Not a member yet? <Link className='text-primary underline hover:opacity-60 duration-300' to='/signup'>Register Now!</Link></p>
                            <p className='mt-2 text-warning text-sm'>{error && error.message}</p>
                        </div>
                        <SocialLogin />
                    </div>
                </div>
            </div>
            {
                showModal && <ForgotPasswordModal setShowModal={setShowModal} />
            }
            {
                loading &&
                <div className='h-full w-screen absolute top-0 left-0 z-[999999] bg-base-300/50'>
                    <div className='h-full flex items-center justify-center'>
                        <Loading />
                    </div>
                </div>
            }
        </section>
    );
};

export default Login;