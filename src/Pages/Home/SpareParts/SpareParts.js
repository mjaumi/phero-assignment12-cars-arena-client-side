import React, { useEffect, useState } from 'react';
import SparePart from '../SparePart/SparePart';

const SpareParts = () => {
    // integration of react hooks here
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setParts(data));
    }, []);


    // rendering spare parts component here
    return (
        <section className='my-20 w-[95%] md:w-4/5 mx-auto'>
            <h2 className='md:text-left text-4xl font-medium text-primary'>Spare Parts</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
                {
                    parts.slice(0, 6).map(part => <SparePart
                        key={part._id}
                        part={part}
                    />)
                }
            </div>
        </section>
    );
};

export default SpareParts;