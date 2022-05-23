import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from '../Shared/Dropdown/Dropdown';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Purchase = () => {
    // integration of react hooks
    const [part, setPart] = useState({});
    const [orderQuantity, setOrderQuantity] = useState(0);
    const { id } = useParams();

    // fetching individual part
    useEffect(() => {
        const getPartById = async () => {
            const url = `https://shielded-mountain-18545.herokuapp.com/parts/${id}`;
            const { data } = await axios.get(url);
            await setPart(data);
            setOrderQuantity(part.minimumOrderQuantity);
        }
        getPartById();
    }, [id, part]);

    // rendering purchase component here
    return (
        <section className='pt-20 w-4/5 mx-auto'>
            <PageTitle title={'Purchase'} />
            <div className='flex my-20'>
                <div className='w-1/2 flex flex-col justify-center'>
                    <img src={part.img} alt={part.name} />
                </div>
                <div className='ml-10 w-1/2 text-left flex flex-col justify-center'>
                    <h3 className='text-3xl text-primary font-bold'>{part.name}</h3>
                    <p className='mt-8 text-secondary'>{part.description}</p>
                    <div className='mt-10 grid grid-cols-3 gap-8'>
                        <div>
                            <h3 className='font-semibold text-3xl text-neutral border-b-4 border-primary w-fit pr-5'>Design</h3>
                            <p className='mt-3 text-lg'>{part.design}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-3xl text-neutral border-b-4 border-primary w-fit pr-5'>Technology</h3>
                            <p className='mt-3 text-lg'>{part.technology}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-3xl text-neutral border-b-4 border-primary w-fit pr-5'>Size</h3>
                            <p className='mt-3 text-lg'>{part.size}"</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-3xl text-neutral border-b-4 border-primary w-fit pr-5'>Weight</h3>
                            <p className='mt-3 text-lg'>{part.weight} Kg</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-3xl text-neutral border-b-4 border-primary w-fit pr-5'>Warranty</h3>
                            <p className='mt-3 text-lg'>{part.warranty} Years</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-3xl text-neutral border-b-4 border-primary w-fit pr-5'>Available</h3>
                            <p className='mt-3 text-lg'>{part.availableQuantity} Unit</p>
                        </div>
                        <div className='mt-8'>
                            <h2 className='font-extralight'><span className='text-4xl text-primary font-bold'>৳{part.price}</span>/Unit</h2>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-3xl font-semibold'>Order Product</h4>
                        <div className='mt-5 grid grid-cols-2'>
                            <div className='form-control w-[200px]'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Order Quantity</span>
                                </label>
                                <div className='flex items-center'>
                                    <button className='btn btn-outline btn-secondary rounded-none text-2xl'>-</button>
                                    <input type='number' placeholder='Enter Quantity' value={orderQuantity || ''} className='input input-bordered input-secondary rounded-none w-full text-center text-neutral' required readOnly />
                                    <button className='btn btn-outline btn-secondary rounded-none text-2xl'>+</button>
                                </div>
                            </div>
                            <div>
                                <div className='form-control w-[200px]'>
                                    <label className='label'>
                                        <span className='label-text'>Alter Quantity By</span>
                                    </label>
                                    <Dropdown dropdownName='quantity' dropdownDefaultValue={1} dropdownMenu={[1, 5, 10, 50, 100]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purchase;