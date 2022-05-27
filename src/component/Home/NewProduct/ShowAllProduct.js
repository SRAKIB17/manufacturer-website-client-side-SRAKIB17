import React, { useEffect, useState } from 'react';


import { useQuery } from 'react-query'
import { useLocation, useParams } from 'react-router-dom';

import axios from 'axios';
import Loading from '../../Loading/Loading';
import ShowProduct from '../ShowProduct';
import Pagination from '../../Pagination/Pagination';


const ShowAllProduct = () => {

    const {newI} = useParams()
   
    const [page, setPage] = useState(0)
    const [skip, setSkip] = useState(10);
    const { hash, pathname } = useLocation();


    useEffect(() => {
        if (hash === '') {
            window.scrollTo(0, 0)
        }

    }, [hash, pathname])
    const { data, isLoading, refetch } = useQuery('AllNewFeatureProduct', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/products/${page}/${skip}?newI=${newI}`));
    if (isLoading) {
        return <Loading />
    }
    const totalCount = data?.data?.count
    const newProduct = data?.data?.products || [];
    console.log(data)
    const skipHandle = e => {
        setSkip(e.target.value);
        refetch()
    }
    const pageHandle = (pageNumber) => {
        refetch()
        setPage(pageNumber)
        refetch()
    }
    return (
        <div className='mt-4 mb-4'>
            <h1 className='text-3xl m-4 font-bold text-black'>🔘{(newI === 'true')?'New Product': 'Feature Product'}</h1>
            <div className='p-6 m-4 grid-cols-1 sm:grid-cols-2  gap-2 items-center justify-center grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
                {
                    newProduct?.map(product => <ShowProduct key={product._id} product={product} />)
                }
            </div>
            <Pagination count={totalCount} page={page} skipHandle={skipHandle} pageHandle={pageHandle} />
        </div>
    );
};

export default ShowAllProduct;
