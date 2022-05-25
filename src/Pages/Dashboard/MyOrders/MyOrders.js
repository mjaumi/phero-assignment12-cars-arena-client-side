import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import OrderRow from '../OrderRow/OrderRow';
import CheckoutModal from '../CheckoutModal/CheckoutModal';
import { Elements } from '@stripe/react-stripe-js';
import OrderDeleteModal from '../OrderDeleteModal/OrderDeleteModal';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const MyOrders = () => {
    // integration of react firebase hooks
    const [user] = useAuthState(auth);

    // integration of react hooks
    const [order, setOrder] = useState({});
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [showOrderDeleteModal, setShowOrderDeleteModal] = useState(false);

    // integration of react query
    const url = `https://shielded-mountain-18545.herokuapp.com/orders?email=${user?.email}`;
    const { data: userOrders, isLoading, refetch } = useQuery('userOrders', () => axios.get(url));

    if (isLoading) {
        return <p>Loading</p>;
    }

    // getting selected order that the user wants to pay
    const getSelectedOrder = async (id) => {
        const url = `https://shielded-mountain-18545.herokuapp.com/order/${id}`;
        const { data } = await axios.get(url);
        setOrder(data);
    }

    // rendering my orders component here
    return (
        <div>
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
                />
            }
        </div>
    );
};

export default MyOrders;