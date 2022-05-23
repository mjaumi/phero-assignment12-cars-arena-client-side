import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ArenaButton from '../../Shared/ArenaButton/ArenaButton';
import { async } from '@firebase/util';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    // integration of react hook form here
    const { register, handleSubmit, formState: { errors } } = useForm();

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLogin = async (data) => {

    }

    // rendering login component here
    return (
        <section className='relative min-h-[90vh] flex items-center justify-center'>
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
                            <button className='text-primary text-sm underline hover:opacity-60 duration-300'>Forgot Password?</button>
                        </div>
                        <div className='mt-10'>
                            <ArenaButton type={'submit'}>Log In</ArenaButton>
                        </div>
                    </form>
                    <div>
                        <p className='text-neutral text-sm'>Not a member yet? <Link className='text-primary underline hover:opacity-60 duration-300' to='/signup'>Register Now!</Link></p>
                    </div>
                    <SocialLogin />
                </div>
            </div>
        </section>
    );
};

export default Login;