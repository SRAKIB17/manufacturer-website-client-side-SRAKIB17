import React from 'react';
import ShowProduct from '../ShowProduct';
import { useQuery } from 'react-query'
import {Link} from 'react-router-dom';

import axios from 'axios';
import Loading from '../../Loading/Loading';


const NewProduct = () => {
    const { data, isLoading, refetch } = useQuery('newProduct', () => axios.get(`http://localhost:5000/products/0/6?newI=true`));

    if (isLoading) {
        return <Loading />
    }
    const newProduct = data?.data?.products;

    
    return (
        <div className='mt-4 mb-4'>
            <h1 className='text-3xl m-4 font-bold text-black'>🔘 New Product</h1>
            <div className='p-6 m-4 grid-cols-1 sm:grid-cols-2  gap-2 items-center justify-center grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
                {
                    newProduct?.map(product => <ShowProduct key={product._id} product={product} />)
                }
            </div>
            <div className='text-right mr-2'>
                <Link className='btn text-white' to='/products/true'>Load More</Link>
            </div>
        </div>
    );
};

export default NewProduct;