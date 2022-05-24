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

const stripePromise = loadStripe('pk_test_51L0UtOAfMwzElyY70PHAgHmS8BwHD0eNNBhbtMPiBcTOs2hwHhj8bqlrojUJ0si4WYCLH3lUEln0ki0mvAZa62IC00kZA5TtFf');

const MyOrders = () => {
    // integration of react firebase hooks
    const [user] = useAuthState(auth);

    // integration of react hooks
    const [order, setOrder] = useState({});
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);

    // integration of react query
    const url = `http://localhost:5000/orders?email=${user?.email}`;
    const { data: userOrders, isLoading, refetch } = useQuery('userOrders', () => axios.get(url));

    if (isLoading) {
        return <p>Loading</p>;
    }

    // getting selected order that the user wants to pay
    const getSelectedOrder = async (id) => {
        const url = `http://localhost:5000/order/${id}`;
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
        </div>
    );
};

export default MyOrders;