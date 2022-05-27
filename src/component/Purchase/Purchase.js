import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Shipped from './Shiped';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const quantityRef = useRef();
    const [productSet, setProductSet] = useState(false)
    const { id } = useParams();



    const { data, isLoading, error } = useQuery('Purchase', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/product/${id}`, {
        headers: {
            'authorize': `token ${localStorage.getItem('tokenVerify')}`
        }
    }));
    if (isLoading) {
        return <Loading />
    }
    if (error) {
        if (error.response.status !== 200) {
            signOut(auth)
        }
    }

    const minimumQ = data?.data?.minimum_quantity;


    const product = data?.data || {};


    const increaseDecreaseHandle = (method) => {
        const quantityParse = Number(quantityRef.current.value)
        if (method === 'inc') {
            if (quantityParse >= Number(product?.total_quantity)) {
                toast.error('You should add minimum ' + product?.total_quantity + ' quantity')
            }
            else {
                quantityRef.current.value = quantityParse + 1;
            }
        }
        else if (method === 'dec') {
            if (quantityParse > Number(product?.minimum_quantity)) {
                quantityRef.current.value = quantityParse - 1;
            }
            else {
                toast.error('You should add minimum ' + product?.minimum_quantity + ' quantity')
            }

        }

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={product?.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='p-4 m-2'>
                        <h1 className="text-5xl text-primary font-bold">{product?.name}</h1>
                        <div className='p-2'>
                            <p>{product.short_description}</p>
                        </div>
                        <div >
                            <div className="text-xl card-actions justify-start mb-2">
                                <div>Price:</div>
                                <div className='text-orange-500'><del>{product.price}</del></div>
                                <div>{product.discount_price}</div>
                                <div className='text-sm text-gray-500'>/pice</div>
                            </div>
                            <div className="text-xl card-actions justify-start mb-2">
                                <div>Quantity:</div>
                                <div>{product.total_quantity}</div>
                            </div>
                            <div className="text-sm card-actions justify-start mb-2">
                                <div>Minimum Order:</div>
                                <div>{product.minimum_quantity}</div>
                            </div>
                        </div>
                        <div className='mt-4 mb-4 flex items-center'>
                            <button onClick={() => increaseDecreaseHandle('dec')} className='btn text-2xl mr-2'>-</button>

                            <input ref={quantityRef} value={minimumQ} type="number" className="input input-bordered input-accent mb-2 p-2 w-20 textareaScroll text-2xl" name="" id="" />

                            <button onClick={() => increaseDecreaseHandle('inc')} className='btn text-2xl ml-2'>+</button>
                        </div>

                        <label for="shippedProduct" onClick={() => setProductSet(true)} className="btn btn-secondary text-white">Buy Now</label>
                    </div>
                    {
                        productSet && <Shipped product={{ product, quantityRef, setProductSet }} />
                    }
                </div>

            </div>

        </div>
    );
};

export default Purchase;