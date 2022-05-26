import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import SparePart from '../SparePart/SparePart';

const SpareParts = () => {
    // integration of react hooks here
    const [parts, setParts] = useState([]);

    // fetching first 6 parts here
    useEffect(() => {
        const getParts = async () => {
            const { data } = await axios.get('https://shielded-mountain-18545.herokuapp.com/parts');
            setParts(data);
        }
        getParts();
    }, []);


    // rendering spare parts component here
    return (
        <section className='my-40 w-[95%] md:w-4/5 mx-auto'>
            <h2 className='md:text-left text-4xl font-medium text-primary'>Spare Parts</h2>
            {
                parts.length === 0 ?
                    <div className='h-[20vh] flex justify-center items-center'>
                        <Loading />
                    </div>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
                        {
                            parts.map(part => <SparePart
                                key={part._id}
                                part={part}
                            />)
                        }
                    </div>
            }
        </section>
    );
};

export default SpareParts;