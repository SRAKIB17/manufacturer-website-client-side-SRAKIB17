import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Shipped from './Shiped';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom'

const Purchase = () => {
    const quantityRef = useRef();
    const [productSet, setProductSet] = useState(false)
    const { id } = useParams();


    
    const { data, isLoading } = useQuery('Purchase', () => axios.get(`http://localhost:5000/product/${id}`,{
        headers :{
            'authorize': `token ${localStorage.getItem('tokenVerify')}`
        }
    }));

    if (isLoading) {
        return <Loading />
    }
    const minimumQ = data?.data?.minimum_quantity;





    // const product = {
    //     name: 'Hummingbird Printed Sweater',
    //     image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
    //     short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    //     minimum_quantity: 4,
    //     total_quantity: 300,
    //     price: 29,
    //     discount_price: 20,
    //     category: 'black'
    // }
    const product = data?.data || {};


    const increaseDecreaseHandle = (method) => {
        const quantityParse = Number(quantityRef.current.value)
        if (method === 'inc') {
            quantityRef.current.value = quantityParse + 1;
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
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={product?.image} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='p-4 m-2'>
                        <h1 class="text-5xl text-primary font-bold">{product?.name}</h1>
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

                        <label for="shippedProduct" onClick={() => setProductSet(true)} class="btn btn-secondary text-white">Buy Now</label>
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