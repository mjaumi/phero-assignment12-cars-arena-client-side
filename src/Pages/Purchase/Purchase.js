import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    // integration of react hooks
    const { id } = useParams();

    // rendering purchase component here
    return (
        <section className='pt-40'>
            <h1>This is purchase {id}</h1>
        </section>
    );
};

export default Purchase;