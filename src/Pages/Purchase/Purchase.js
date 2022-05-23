import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from '../Shared/Dropdown/Dropdown';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Purchase = () => {
    // integration of react hooks
    const [part, setPart] = useState({});
    const [orderQuantity, setOrderQuantity] = useState(0);
    const [disableMinusButton, setDisableMinusButton] = useState(true);
    const [disablePlusButton, setDisablePlusButton] = useState(false);
    const { id } = useParams();
    const alterQuantityRef = useRef();
    const orderQuantityRef = useRef();

    // fetching individual part
    useEffect(() => {
        const getPartById = async () => {
            const url = `https://shielded-mountain-18545.herokuapp.com/parts/${id}`;
            const { data } = await axios.get(url);
            setPart(data);
            setOrderQuantity(part.minimumOrderQuantity);
        }
        getPartById();
    }, [id, part.minimumOrderQuantity]);

    // handling plus & minus button state based on alter quantity value
    const handleAlterValueChange = item => {

        if (orderQuantity + item < part.availableQuantity
            && orderQuantity - item > part.minimumOrderQuantity) {
            setDisableMinusButton(false);
            setDisablePlusButton(false);
        }
    }

    // handling alter order quantity
    const alterOrderQuantity = increaseOrDecrease => {

        const alterBy = parseInt(alterQuantityRef.current.value) * increaseOrDecrease;

        if (orderQuantity + alterBy < part.minimumOrderQuantity) {
            setDisableMinusButton(true);
            return;
        } else if (orderQuantity + alterBy === part.minimumOrderQuantity) {
            setDisableMinusButton(true);
            setOrderQuantity(orderQuantity + alterBy);
            return;
        } else if (orderQuantity + alterBy > part.availableQuantity) {
            setDisablePlusButton(true);
            return;
        } else if (orderQuantity + alterBy === part.availableQuantity) {
            setDisablePlusButton(true);
            setOrderQuantity(orderQuantity + alterBy);
            return;
        }

        setDisableMinusButton(false);
        setDisablePlusButton(false);
        setOrderQuantity(orderQuantity + alterBy);
    }

    // rendering purchase component here
    return (
        <section className='pt-20 w-[95%] md:w-4/5 mx-auto'>
            <PageTitle title={'Purchase'} />
            <div className='flex flex-col w-[95%] md:w-full mx-auto md:flex-row my-20'>
                <div className='md:w-1/2 flex flex-col justify-center'>
                    <img src={part.img} alt={part.name} />
                </div>
                <div className='mt-10 md:mt-0 md:ml-10 md:w-1/2 md:text-left flex flex-col justify-center'>
                    <h3 className='text-3xl text-primary font-bold'>{part.name}</h3>
                    <p className='mt-8 text-secondary'>{part.description}</p>
                    <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div>
                            <h3 className='font-semibold text-3xl text-neutral border-b-4 border-primary mx-auto md:mx-0 w-fit px-5 md:px-0 md:pr-5'>Design</h3>
                            <p className='mt-3 text-lg'>{part.design}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-3xl text-neutral border-b-4 border-primary mx-auto md:mx-0 w-fit px-5 md:px-0 md:pr-5'>Technology</h3>
                            <p className='mt-3 text-lg'>{part.technology}</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-3xl text-neutral border-b-4 border-primary mx-auto md:mx-0 w-fit px-5 md:px-0 md:pr-5'>Size</h3>
                            <p className='mt-3 text-lg'>{part.size}"</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-3xl text-neutral border-b-4 border-primary mx-auto md:mx-0 w-fit px-5 md:px-0 md:pr-5'>Weight</h3>
                            <p className='mt-3 text-lg'>{part.weight} Kg</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-3xl text-neutral border-b-4 border-primary mx-auto md:mx-0 w-fit px-5 md:px-0 md:pr-5'>Warranty</h3>
                            <p className='mt-3 text-lg'>{part.warranty} Years</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-3xl text-neutral border-b-4 border-primary mx-auto md:mx-0 w-fit px-5 md:px-0 md:pr-5'>Available</h3>
                            <p className='mt-3 text-lg'>{part.availableQuantity} Unit</p>
                        </div>
                        <div className='mt-8'>
                            <h2 className='font-extralight'><span className='text-4xl text-primary font-bold'>৳{part.price}</span>/Unit</h2>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-3xl font-semibold'>Order Product</h4>
                        <div className='mt-5 grid grid-cols-1 md:grid-cols-2'>
                            <div className='form-control w-[200px] mx-auto md:mx-0'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Order Quantity</span>
                                </label>
                                <div className='flex items-center'>
                                    <button onClick={() => alterOrderQuantity(-1)} className='btn btn-outline btn-secondary rounded-none text-2xl disabled:cursor-not-allowed' disabled={disableMinusButton}>-</button>
                                    <input ref={orderQuantityRef} type='number' placeholder='Enter Quantity' value={orderQuantity || ''} className='input input-bordered input-secondary rounded-none w-full text-center text-neutral' required readOnly />
                                    <button onClick={() => alterOrderQuantity(1)} className='btn btn-outline btn-secondary rounded-none text-2xl' disabled={disablePlusButton}>+</button>
                                </div>
                            </div>
                            <div>
                                <div className='form-control w-[140px] mx-auto md:mx-0 mt-5 md:mt-0'>
                                    <label className='label'>
                                        <span className='label-text'>Alter Quantity By</span>
                                    </label>
                                    <Dropdown
                                        dropDownOnClick={handleAlterValueChange}
                                        dropDownRef={alterQuantityRef}
                                        dropdownName='alterQuantity'
                                        dropdownDefaultValue={1}
                                        dropdownMenu={[1, 5, 10, 50, 100]} />
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