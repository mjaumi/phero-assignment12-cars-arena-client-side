import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutModal = ({ order, refetch, setShowCheckoutModal }) => {
    // integration of stripe hooks
    const stripe = useStripe();
    const elements = useElements();

    // integration of react hooks
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    // destructuring the props
    const { _id, email, name, orderedQuantity, totalPrice } = order;

    // making the payment
    useEffect(() => {
        const getClientSecretKey = async () => {
            if (totalPrice) {
                const { data } = await axios.post('https://shielded-mountain-18545.herokuapp.com/create-payment-intent', { price: totalPrice });
                setClientSecret(data);
            }
        }
        totalPrice && getClientSecretKey();
    }, [totalPrice]);

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
                const url = `https://shielded-mountain-18545.herokuapp.com/order/${_id}`;
                const { data } = await axios.patch(url, paymentStatus);

                if (data.modifiedCount > 0) {
                    toast.success('Payment Successful!!!');
                } else {
                    toast.error('Payment Was Rejected!!!');
                }

                setShowCheckoutModal(false);
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
        </div>
    );
};

export default CheckoutModal;