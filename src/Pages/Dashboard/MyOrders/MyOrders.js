import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import OrderRow from '../OrderRow/OrderRow';
import CheckoutModal from '../CheckoutModal/CheckoutModal';
import { Elements } from '@stripe/react-stripe-js';
import OrderDeleteModal from '../OrderDeleteModal/OrderDeleteModal';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const MyOrders = () => {
    // integration of react firebase hooks
    const [user, loading] = useAuthState(auth);

    // integration of react hooks
    const [order, setOrder] = useState({});
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [showOrderDeleteModal, setShowOrderDeleteModal] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const navigate = useNavigate();

    // integration of react query
    const url = `https://shielded-mountain-18545.herokuapp.com/orders?email=${user?.email}`;
    const { data: userOrders, isLoading, refetch, error } = useQuery('userOrders', () => axios.get(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }));

    // checking the JWT
    useEffect(() => {
        if (error) {
            if (error.response.status === 403) {
                toast.error('Forbidden Access. Please, Login again!!!');

            } else if (error.response.status === 401) {
                toast.error('Unauthorized Access. Please, Login again!!!');
            }

            signOut(auth);
            navigate('/');
        }
    }, [error, navigate]);

    if (isLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <Loading />
            </div>
        );
    }

    // getting selected order that the user wants to pay
    const getSelectedOrder = async (id) => {
        const url = `https://shielded-mountain-18545.herokuapp.com/order/${id}`;
        const result = await axios.get(url, {
            method: 'GET',
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
        } else {
            setOrder(result.data);
        }
    }

    // rendering my orders component here
    return (
        <div className='overflow-hidden'>
            <PageTitle title={'My Orders'} />
            <div className='w-[90%] mx-auto pb-10 min-h-screen'>
                <h3 className='text-3xl md:text-4xl md:text-left font-semibold text-primary'>My Orders</h3>
                <div className='overflow-x-auto mt-10'>
                    <table className='table w-full text-center rounded-none'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Ordered Quantity</th>
                                <th>Total Price</th>
                                <th>Status</th>
                                <th>Transaction ID</th>
                                <th>Pay</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userOrders.data.map((order, index) => <OrderRow
                                    key={order._id}
                                    order={order}
                                    index={index}
                                    getSelectedOrder={getSelectedOrder}
                                    setShowCheckoutModal={setShowCheckoutModal}
                                    setShowOrderDeleteModal={setShowOrderDeleteModal}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                showCheckoutModal &&
                <Elements stripe={stripePromise}>
                    <CheckoutModal
                        order={order}
                        refetch={refetch}
                        setShowCheckoutModal={setShowCheckoutModal}
                    />
                </Elements>
            }
            {
                showOrderDeleteModal &&
                <OrderDeleteModal
                    order={order}
                    refetch={refetch}
                    setShowOrderDeleteModal={setShowOrderDeleteModal}
                    setShowLoading={setShowLoading}
                />
            }
            {
                (loading || showLoading) &&
                <div className='h-full w-screen absolute top-0 left-0 z-[999999] bg-base-300/50'>
                    <div className='h-full flex items-center justify-center'>
                        <Loading />
                    </div>
                </div>
            }
        </div>
    );
};

export default MyOrders;