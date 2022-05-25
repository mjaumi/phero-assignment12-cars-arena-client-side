import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const AddProduct = () => {
    return (

        // rendering add product component here
        <div>
            <PageTitle title={'Add A Product'} />
            Add A Product
            <Loading />
        </div>
    );
};

export default AddProduct;