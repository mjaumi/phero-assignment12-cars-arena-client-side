import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import ArenaButton from '../../Shared/ArenaButton/ArenaButton';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const AddProduct = () => {
    // integration of react hook form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // integration of react hooks
    const [showLoading, setShowLoading] = useState(false);
    const navigate = useNavigate();

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // event handler for adding new product
    const handleAddProduct = async (data) => {
        setShowLoading(true);
        const image = data.productImage[0];
        const imageFormData = new FormData();
        imageFormData.append('image', image);
        const imageUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_APIKEY}`;

        const name = data.name;
        const img = imageUrl;
        const minimumOrderQuantity = data.minimumQuantity;
        const availableQuantity = data.quantity;
        const price = data.price;
        const size = data.size;
        const weight = data.weight;
        const design = data.design;
        const technology = data.technology;
        const description = data.description;
        const warranty = data.warranty;

        const newProduct = {
            name,
            img,
            minimumOrderQuantity,
            availableQuantity,
            price,
            size,
            weight,
            design,
            technology,
            description,
            warranty
        }

        console.log(newProduct);
        const result = await axios.post('http://localhost:5000/parts', newProduct, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });

        if (result.status === 401) {
            toast.error('Forbidden Access. Please, Login again!!!');
            signOut(auth);
            navigate('/');

        } else if (result.status === 401) {
            toast.error('Unauthorized Access. Please, Login again!!!');
        } else {
            toast.success('Product Added Successfully!!!');
        }

        reset();
        setShowLoading(false);
    }

    // rendering add product component here
    return (
        <div className='overflow-hidden'>
            <PageTitle title={'Add A Product'} />
            <div className='w-[90%] mx-auto pb-10 min-h-screen'>
                <h3 className='text-3xl md:text-4xl md:text-left font-semibold text-primary'>Add A Product</h3>
                <div className='mt-10 w-[95%] md:w-[70%] mx-auto'>
                    <form onSubmit={handleSubmit(handleAddProduct)} >
                        <div className='flex flex-col md:flex-row'>
                            <div className='form-control w-full'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Product Name</span>
                                </label>
                                <input type='text' placeholder='Enter Product Name' className='input input-bordered input-secondary rounded-none w-full' {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Product Name Required'
                                    }
                                })} />
                                <label className='label'>
                                    {errors.name?.type === 'required' && <span className='label-text-alt text-warning'>{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className='form-control w-full mt-5 md:mt-0 md:ml-10'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Upload Product Image</span>
                                </label>
                                <input className='input input-bordered input-secondary rounded-none w-full text-neutral read-only:cursor-not-allowed px-3 py-1.5' type='file' id='formFile' {...register('productImage', {
                                    required: {
                                        value: true,
                                        message: 'Product Image Required'
                                    }
                                })} />
                                <label className='label'>
                                    {errors.productImage?.type === 'required' && <span className='label-text-alt text-warning'>{errors.productImage.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='form-control w-full'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Product Quantity</span>
                                </label>
                                <input type='number' placeholder='Enter Product Quantity' className='input input-bordered input-secondary rounded-none w-full' {...register('quantity', {
                                    required: {
                                        value: true,
                                        message: 'Product Quantity Required'
                                    }
                                })} />
                                <label className='label'>
                                    {errors.quantity?.type === 'required' && <span className='label-text-alt text-warning'>{errors.quantity.message}</span>}
                                </label>
                            </div>
                            <div className='form-control w-full mt-5 md:mt-0 md:ml-10'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Minimum Order Quantity</span>
                                </label>
                                <input type='number' placeholder='Enter Minimum Order Quantity' className='input input-bordered input-secondary rounded-none w-full' {...register('minimumQuantity', {
                                    required: {
                                        value: true,
                                        message: 'Minimum Order Quantity Required'
                                    }
                                })} />
                                <label className='label'>
                                    {errors.minimumQuantity?.type === 'required' && <span className='label-text-alt text-warning'>{errors.minimumQuantity.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='form-control w-full'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Unit Price</span>
                                </label>
                                <input type='number' placeholder='Enter Price' className='input input-bordered input-secondary rounded-none w-full' {...register('price', {
                                    required: {
                                        value: true,
                                        message: 'Unit Price Required'
                                    }
                                })} />
                                <label className='label'>
                                    {errors.price?.type === 'required' && <span className='label-text-alt text-warning'>{errors.price.message}</span>}
                                </label>
                            </div>
                            <div className='form-control w-full mt-5 md:mt-0 md:ml-10'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Size</span>
                                </label>
                                <input type='number' placeholder='Enter Size' className='input input-bordered input-secondary rounded-none w-full' {...register('size', {
                                    required: {
                                        value: true,
                                        message: 'Size Required'
                                    }
                                })} />
                                <label className='label'>
                                    {errors.size?.type === 'required' && <span className='label-text-alt text-warning'>{errors.size.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='form-control w-full'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Weight</span>
                                </label>
                                <input type='text' placeholder='Enter Weight' className='input input-bordered input-secondary rounded-none w-full' {...register('weight', {
                                    required: {
                                        value: true,
                                        message: 'Weight Required'
                                    }
                                })} />
                                <label className='label'>
                                    {errors.weight?.type === 'required' && <span className='label-text-alt text-warning'>{errors.weight.message}</span>}
                                </label>
                            </div>
                            <div className='form-control w-full mt-5 md:mt-0 md:ml-10'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Design</span>
                                </label>
                                <input type='text' placeholder='Enter Design' className='input input-bordered input-secondary rounded-none w-full' {...register('design', {
                                    required: {
                                        value: true,
                                        message: 'Design Required'
                                    }
                                })} />
                                <label className='label'>
                                    {errors.design?.type === 'required' && <span className='label-text-alt text-warning'>{errors.design.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='form-control w-full'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Technology</span>
                                </label>
                                <input type='text' placeholder='Enter Technology' className='input input-bordered input-secondary rounded-none w-full' {...register('technology', {
                                    required: {
                                        value: true,
                                        message: 'Technology Required'
                                    }
                                })} />
                                <label className='label'>
                                    {errors.technology?.type === 'required' && <span className='label-text-alt text-warning'>{errors.technology.message}</span>}
                                </label>
                            </div>
                            <div className='form-control w-full mt-5 md:mt-0 md:ml-10'>
                                <label className='label'>
                                    <span className="label-text after:content-['*'] after:text-primary">Warranty</span>
                                </label>
                                <input type='number' placeholder='Enter Warranty' className='input input-bordered input-secondary rounded-none w-full' {...register('warranty', {
                                    required: {
                                        value: true,
                                        message: 'Warranty Required'
                                    }
                                })} />
                                <label className='label'>
                                    {errors.warranty?.type === 'required' && <span className='label-text-alt text-warning'>{errors.warranty.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className='form-control mt-5'>
                            <label className='label'>
                                <span className="label-text after:content-['*'] after:text-primary">Product Description</span>
                            </label>
                            <textarea className='textarea textarea-bordered textarea-secondary rounded-none h-24' placeholder='Enter Product Description' {...register('description', {
                                required: {
                                    value: true,
                                    message: 'Description Required'
                                }
                            })} ></textarea>
                            <label className='label'>
                                {errors.description?.type === 'required' && <span className='label-text-alt text-warning'>{errors.description.message}</span>}
                            </label>
                        </div>
                        <div className='mt-8 md:w-3/12 mx-auto'>
                            <ArenaButton type={'submit'}>Add Product</ArenaButton>
                        </div>
                    </form>
                </div>
            </div>
            {
                showLoading &&
                <div className='h-full w-screen absolute top-0 left-0 z-[999999] bg-base-300/50'>
                    <div className='h-full flex items-center justify-center'>
                        <Loading />
                    </div>
                </div>
            }
        </div>
    );
};

export default AddProduct;