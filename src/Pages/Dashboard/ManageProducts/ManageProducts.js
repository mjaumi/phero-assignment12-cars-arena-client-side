import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import ProductRow from '../ProductRow/ProductRow';

const ManageProducts = () => {
    // integration of react query
    const { data: allParts, isLoading, refetch } = useQuery('allParts', () => axios.get('http://localhost:5000/parts'));

    if (isLoading) {
        return <p>Loading</p>;
    }

    // rendering manage products component here
    return (
        <div>
            <PageTitle title={'Manage Products'} />
            <div className='w-[90%] mx-auto pb-10 min-h-screen'>
                <h3 className='text-3xl md:text-4xl md:text-left font-semibold text-primary'>Manage Products</h3>
                <div className='overflow-x-auto mt-10'>
                    <table className='table w-full text-center rounded-none'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Id</th>
                                <th>Product Name</th>
                                <th>Unit Price</th>
                                <th>Available Quantity</th>
                                <th>Minimum Order Quantity</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allParts.data.map((parts, index) => <ProductRow
                                    key={parts._id}
                                    parts={parts}
                                    index={index}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;