import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const CheckoutModal = ({ order, refetch, setShowCheckoutModal }) => {
    // integration of stripe hooks
    const stripe = useStripe();
    const elements = useElements();

    // integration of react hooks
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const navigate = useNavigate();

    // destructuring the props
    const { _id, email, name, orderedQuantity, totalPrice } = order;

    // making the payment
    useEffect(() => {
        const getClientSecretKey = async () => {
            if (totalPrice) {
                const result = await axios.post('https://cars-arena.onrender.com/create-payment-intent', { price: totalPrice }, {
                    method: 'POST',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });

                if (result.status === 403) {
                    toast.error('Forbidden Access. Please, Login again!!!');
                    signOut(auth);
                    navigate('/');
                } else if (result.status === 401) {
                    toast.error('Unauthorized Access. Please, Login again!!!');
                    signOut(auth);
                    navigate('/');
                }

                setClientSecret(result.data);
            }
        }
        totalPrice && getClientSecretKey();
    }, [totalPrice, navigate]);

    const handlePayment = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardNumberElement = elements?.getElement(CardNumberElement);

        if (cardNumberElement) {
            const { error } = await stripe?.createPaymentMethod({
                type: 'card',
                card: cardNumberElement,
            });

            setCardError(error?.message || '');
            setProcessing(true);

            const { paymentIntent, intendError } = await stripe.confirmCardPayment(
                clientSecret.clientSecret,
                {
                    payment_method: {
                        card: cardNumberElement,
                        billing_details: {
                            name: name,
                            email: email
                        }
                    }
                }
            );

            if (intendError) {
                setCardError(intendError.message);
                setProcessing(false);
            } else {
                setCardError('');

                const paymentStatus = {
                    tId: paymentIntent.id,
                }
                const url = `https://cars-arena.onrender.com/order/${_id}`;
                const result = await axios.patch(url, paymentStatus, {
                    method: 'PATCH',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });

                if (result.status === 403) {
                    toast.error('Forbidden Access. Please, Login again!!!');
                    signOut(auth);
                    navigate('/');

                } else if (result.status === 401) {
                    toast.error('Unauthorized Access. Please, Login again!!!');
                    signOut(auth);
                    navigate('/');
                }

                if (result.data.modifiedCount > 0) {
                    const order = await axios.get(url, {
                        method: 'GET',
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    });
                    const partsUrl = `https://cars-arena.onrender.com/parts/${order.data.productId}`
                    const parts = await axios.get(partsUrl);

                    const newAvailable = {
                        availableQuantity: parts.data.availableQuantity - order.data.orderedQuantity
                    }

                    const updatePartUrl = `https://cars-arena.onrender.com/updateParts/${parts.data._id}`
                    await axios.patch(updatePartUrl, newAvailable, {
                        method: 'PATCH',
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    });
                    toast.success('Payment Successful!!!');

                } else {
                    toast.error('Payment Was Rejected!!!');
                }

                setShowCheckoutModal(false);
                setProcessing(false);
                refetch();
            }
        }
    }

    // rendering checkout modal component here
    return (
        <div>
            <input type='checkbox' id='checkout-modal' className='modal-toggle' />
            <div className='modal modal-bottom sm:modal-middle bg-base-300/50'>
                <div className='modal-box relative bg-base-100'>
                    <label htmlFor='checkout-modal' className='btn btn-sm btn-circle absolute right-2 top-2 bg-accent border-accent text-neutral hover:bg-base-200 hover:border-base-200'>✕</label>
                    <h3 className='font-bold text-lg'>Checkout</h3>
                    <p className='py-4'>Check the payment details and make the payment.</p>
                    <div>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>Ordered Quantity</span>
                            </label>
                            <input type='text' placeholder='Ordered Quantity' className='input input-bordered input-secondary rounded-none w-full text-neutral read-only:cursor-not-allowed' readOnly value={orderedQuantity || ''} />
                        </div>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>Total Price</span>
                            </label>
                            <input type='text' placeholder='Total Price' className='input input-bordered input-secondary rounded-none w-full text-neutral read-only:cursor-not-allowed' readOnly value={totalPrice || ''} />
                        </div>
                    </div>
                    <div className='mt-10'>
                        <p className='text-secondary font-semibold'>Card Information</p>
                        <form onSubmit={handlePayment}>
                            <div>
                                <label className='label'>
                                    <span className='label-text'>Card Number</span>
                                </label>
                                <div className='border border-secondary px-4 py-4 rounded-none w-full text-neutral'>
                                    <CardNumberElement
                                        options={{
                                            style: {
                                                base: {
                                                    iconColor: '#c4f0ff',
                                                    color: '#ffffff',
                                                    fontWeight: '500',
                                                    fontSize: '16px',
                                                    fontSmoothing: 'antialiased',
                                                    ':-webkit-autofill': {
                                                        color: '#fce883',
                                                    },
                                                    '::placeholder': {
                                                        color: '#21252c',
                                                    }
                                                },
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='mt-5 flex'>
                                <div className='w-1/2'>
                                    <label className='label'>
                                        <span className='label-text'>Expiry Date</span>
                                    </label>
                                    <div className='border border-secondary px-4 py-4 rounded-none w-full text-neutral'>
                                        <CardExpiryElement
                                            options={{
                                                style: {
                                                    base: {
                                                        iconColor: '#c4f0ff',
                                                        color: '#ffffff',
                                                        fontWeight: '500',
                                                        fontSize: '16px',
                                                        fontSmoothing: 'antialiased',
                                                        ':-webkit-autofill': {
                                                            color: '#fce883',
                                                        },
                                                        '::placeholder': {
                                                            color: '#21252c',
                                                        }
                                                    },
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='w-1/2 ml-5'>
                                    <label className='label'>
                                        <span className='label-text'>CVV Code</span>
                                    </label>
                                    <div className='border border-secondary px-4 py-4 rounded-none w-full text-neutral'>
                                        <CardCvcElement
                                            options={{
                                                style: {
                                                    base: {
                                                        iconColor: '#c4f0ff',
                                                        color: '#ffffff',
                                                        fontWeight: '500',
                                                        fontSize: '16px',
                                                        fontSmoothing: 'antialiased',
                                                        ':-webkit-autofill': {
                                                            color: '#fce883',
                                                        },
                                                        '::placeholder': {
                                                            color: '#21252c',
                                                        }
                                                    },
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className='btn btn-success btn-sm rounded-none mt-10 capitalize' type='submit' disabled={!stripe || !clientSecret}>
                                Make Payment
                            </button>
                        </form>
                    </div>
                    {
                        cardError && <p className='text-red-500'>{cardError}</p>
                    }
                </div>
            </div>
            {
                processing &&
                <div className='h-screen w-full absolute top-0 left-0 z-[999999] bg-base-300/50'>
                    <div className='h-full flex items-center justify-center'>
                        <Loading />
                    </div>
                </div>
            }
        </div>
    );
};

export default CheckoutModal;