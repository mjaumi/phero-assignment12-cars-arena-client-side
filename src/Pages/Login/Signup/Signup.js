import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import ArenaButton from '../../Shared/ArenaButton/ArenaButton';

const Signup = () => {
    // integration of react firebase hook here
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    //integration of react hooks here
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const navigate = useNavigate();

    // integration of react hook form here
    const { register, handleSubmit, formState: { errors } } = useForm();

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // event handler for sign up
    const handleSignup = async (data) => {
        if (data.password === data.confirmPassword) {
            await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: data.name });

            if (!error || !updatingError || user) {
                toast.success('Account Creation Successful!!! Now Login.');
                signOut(auth);
                navigate('/');
            }
        } else {
            setPasswordMatchError('Password Mismatched. Please Re-enter Password.');
        }
    }

    if (loading || updating) {

    }

    // rendering signup component here
    return (
        <section className='relative min-h-[90vh] flex items-center justify-center'>
            <div className='w-[90%] md:w-1/3 mb-20 mt-40'>
                <div className='w-full bg-base-200 border border-accent py-5 px-5 md:px-14'>
                    <div className='text-left mb-8'>
                        <h3 className='text-3xl font-bold text-primary'>Sign Up</h3>
                        <p className='text-sm md:text-base text-secondary'>Don't have an account? Signup now. It's free.</p>
                    </div>
                    <form onSubmit={handleSubmit(handleSignup)}>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className="label-text after:content-['*'] after:text-primary">Name</span>
                            </label>
                            <input onClick={() => setPasswordMatchError(null)} type='text' placeholder='Enter Your Name' className='input input-bordered input-secondary rounded-none w-full text-neutral' {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Name Required'
                                }
                            })} />
                            <label className='label'>
                                {errors.name?.type === 'required' && <span className='label-text-alt text-warning'>{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className="label-text after:content-['*'] after:text-primary">Email</span>
                            </label>
                            <input onClick={() => setPasswordMatchError(null)} type='email' placeholder='Enter Your Email' className='input input-bordered input-secondary rounded-none w-full text-neutral' {...register('email', {
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
                            <input onClick={() => setPasswordMatchError(null)} type='password' placeholder='Enter Your Password' className='input input-bordered input-secondary rounded-none w-full text-neutral' {...register('password', {
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
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className="label-text after:content-['*'] after:text-primary">Confirm Password</span>
                            </label>
                            <input onClick={() => setPasswordMatchError(null)} type='password' placeholder='Re-enter Your Password' className='input input-bordered input-secondary rounded-none w-full text-neutral' {...register('confirmPassword', {
                                required: {
                                    value: true,
                                    message: 'Password Re-enter Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters or longer'
                                }
                            })} />
                            <label className='label'>
                                {errors.confirmPassword?.type === 'required' && <span className='label-text-alt text-warning'>{errors.confirmPassword.message}</span>}
                                {errors.confirmPassword?.type === 'minLength' && <span className='label-text-alt text-warning'>{errors.confirmPassword.message}</span>}
                            </label>
                        </div>
                        <div>
                            <p className='text-warning'>{passwordMatchError}</p>
                        </div>
                        <div className='mt-10'>
                            <ArenaButton type={'submit'}>Sign Up</ArenaButton>
                            <p className='text-neutral text-sm'>Already have an account? <Link className='text-primary underline hover:opacity-60 duration-300' to='/login'>Login Now!</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Signup;