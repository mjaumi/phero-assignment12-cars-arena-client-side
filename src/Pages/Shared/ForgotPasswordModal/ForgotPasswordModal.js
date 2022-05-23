import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const ForgotPasswordModal = ({ setShowModal }) => {
    // integration of react firebase hooks
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleResetPasswordEmailSend = async (event) => {
        event.preventDefault();
        setShowModal(false);

        await sendPasswordResetEmail(event.target.email.value);

        if (!error) {
            toast.success(`Password Reset Email Sent To ${event.target.email.value} !!!`);
        }
    }

    if (sending) {

    }

    // rendering forgot password modal here
    return (
        <div>
            <input type='checkbox' id='forgot-password-modal' className='modal-toggle' />
            <div className='modal modal-bottom sm:modal-middle bg-base-300/50'>
                <div className='modal-box relative bg-base-100'>
                    <label htmlFor='forgot-password-modal' className='btn btn-sm btn-circle absolute right-2 top-2 bg-accent border-accent text-neutral hover:bg-base-200 hover:border-base-200'>✕</label>
                    <h3 className='font-bold text-lg'>Forgot Password?</h3>
                    <p className='py-4'>Just type your email below and we will send a password reset email to your account.</p>
                    <form onSubmit={handleResetPasswordEmailSend}>
                        <div className='form-control w-full mt-2'>
                            <label className='label'>
                                <span className="label-text after:content-['*'] after:text-primary">Your Email</span>
                            </label>
                            <input type='email' name='email' placeholder='Enter Your Email' className='input input-bordered input-secondary rounded-none w-full' required />
                        </div>
                        <div className='modal-action'>
                            <label htmlFor='forgot-password-modal' className='btn bg-red-700 rounded-none border-red-700 text-neutral hover:bg-accent hover:border-accent capitalize font-medium'>
                                <FontAwesomeIcon icon={faTimesCircle} className='mr-2' />
                                Close
                            </label>
                            <button type='submit' className='btn bg-green-700 rounded-none border-green-700 text-neutral hover:bg-accent hover:border-accent capitalize font-medium'>
                                <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                                Send Email
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;