import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import DeleteProductModal from '../DeleteProductModal/DeleteProductModal';
import ProductRow from '../ProductRow/ProductRow';

const ManageProducts = () => {
    // integration of react hooks
    const [showProductDeleteModal, setShowProductDeleteModal] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [part, setPart] = useState({});

    // integration of react query
    const { data: allParts, isLoading, refetch } = useQuery('allParts', () => axios.get('https://cars-arena.onrender.com/parts'));

    // getting selected product
    const getSelectedPart = async (id) => {
        const url = `https://cars-arena.onrender.com/parts/${id}`;
        const { data } = await axios.get(url);
        setPart(data);
    }

    if (isLoading || showLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <Loading />
            </div>
        );
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
                                    setShowProductDeleteModal={setShowProductDeleteModal}
                                    getSelectedPart={getSelectedPart}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                showProductDeleteModal &&
                <DeleteProductModal
                    part={part}
                    refetch={refetch}
                    setShowLoading={setShowLoading}
                    setShowProductDeleteModal={setShowProductDeleteModal}
                />
            }
        </div>
    );
};

export default ManageProducts;