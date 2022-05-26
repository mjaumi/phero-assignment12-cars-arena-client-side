import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Summary from '../Summary/Summary';

const BusinessSummary = () => {
    // integration of react hooks
    const [summary, setSummary] = useState([]);

    // fetching the summary data
    useEffect(() => {
        const getSummaryData = async () => {
            const { data } = await axios.get('http://localhost:5000/summary');
            setSummary(data);
        }
        getSummaryData();
    }, []);

    // rendering business summary component here
    return (
        <section className='bg-base-200 py-40'>
            <div className='w-[95%] md:w-4/5 mx-auto'>
                <h2 className='text-3xl md:text-5xl text-neutral font-bold md:mb-3'>Why Choose Us?</h2>
                <p className='text-secondary md:text-lg'>Because, we have ...</p>
                <div className='grid grid-cols-1 md:grid-cols-4 mt-10'>
                    {
                        summary.map((sumData, index) => <Summary
                            key={sumData._id}
                            index={index}
                            data={sumData}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;