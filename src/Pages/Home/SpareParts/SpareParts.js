import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SparePart from '../SparePart/SparePart';

const SpareParts = () => {
    // integration of react hooks here
    const [parts, setParts] = useState([]);

    // fetching first 6 parts here
    useEffect(() => {
        const getFirstSixParts = async () => {
            const { data } = await axios.get('https://shielded-mountain-18545.herokuapp.com/parts');
            setParts(data);
        }
        getFirstSixParts();
    }, []);


    // rendering spare parts component here
    return (
        <section className='my-40 w-[95%] md:w-4/5 mx-auto'>
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