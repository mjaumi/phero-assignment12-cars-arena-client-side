import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import ManageOrderRow from '../ManageOrderRow/ManageOrderRow';
import ShipmentModal from '../ShipmentModal/ShipmentModal';

const ManageAllOrders = () => {
    // integration of react hooks
    const [selectedOrderId, setSelectedOrderId] = useState('');
    const [showShipmentModal, setShowShipmentModal] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    // integration of react query
    const url = ` https://cars-arena.onrender.com/allOrders`;
    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => axios.get(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }));

    if (isLoading || showLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <Loading />
            </div>
        );
    }

    // rendering manage all orders component here
    return (
        <div>
            <PageTitle title={'Manage All Orders'} />
            <div className='w-[90%] mx-auto pb-10 min-h-screen'>
                <h3 className='text-3xl md:text-4xl md:text-left font-semibold text-primary'>Manage All Orders</h3>
                <div className='overflow-x-auto mt-10'>
                    <table className='table w-full text-center rounded-none'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Order Id</th>
                                <th>Ordered By</th>
                                <th>Product Name</th>
                                <th>Ordered Quantity</th>
                                <th>Total Price</th>
                                <th>Status</th>
                                <th>Shipped</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrders?.data.map((order, index) => <ManageOrderRow
                                    key={order._id}
                                    order={order}
                                    index={index}
                                    setSelectedOrderId={setSelectedOrderId}
                                    setShowShipmentModal={setShowShipmentModal}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                showShipmentModal &&
                <ShipmentModal
                    refetch={refetch}
                    selectedOrderId={selectedOrderId}
                    setShowShipmentModal={setShowShipmentModal}
                    setShowLoading={setShowLoading}
                />
            }
        </div>
    );
};

export default ManageAllOrders;