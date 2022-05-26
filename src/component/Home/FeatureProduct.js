import React from 'react';
import Loading from '../Loading/Loading';
import ShowProduct from './ShowProduct';

import { useQuery } from 'react-query'

import axios from 'axios';


const FeatureProduct = () => {
    const { data, isLoading } = useQuery('FeatureProduct', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/products?newI=false`));
   
    if (isLoading) {
        return <Loading />
    }
    const products = data?.data;
    return (
        <div className='mt-4 mb-4'>
            <h1 className='text-3xl m-4 font-bold text-black'>🔘 Feature Product</h1>
            <div className='p-6 m-4 grid-cols-1 sm:grid-cols-2  gap-2 items-center justify-center grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
                {
                    products && (products.map(product => <ShowProduct key={product._id} product={product} />))
                }
            </div>
            <div className='text-right mr-2'>
                <button className='btn text-white'>Load More</button>
            </div>
        </div>
    );
};



export default FeatureProduct;