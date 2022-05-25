import React from 'react';

import { useQuery } from 'react-query'

import axios from 'axios';
import Loading from '../../Loading/Loading';


import { useAuthState } from 'react-firebase-hooks/auth'


const OrderShow = ({ order, index }) => {

    const { orderId, quantity, address } = order;
    console.log(orderId)
    const { data, isLoading } = useQuery('specificAllOrder', () => axios.get(`http://localhost:5000/product/${orderId}`, {
        headers: {
            'authorize': `token ${localStorage.getItem('tokenVerify')}`
        }
    }));
    const { name, image, category, discount_price } = data?.data || {}
    if (isLoading) {
        return <Loading />
    }
    const TotalPrice = parseInt(quantity) * Number(discount_price)
    return (

        <tr>
            <td>{index + 1}</td>
            <td><img src={image} className='w-8 md:w-10 rounded-full' alt="" /></td>
            <td>{name.slice(0, 30)}...</td>
            <td>{category}</td>
            <td>{TotalPrice}</td>
            <td>{address.slice(0, 20)}..</td>
            <td></td>
        </tr>
    );
};

export default OrderShow;

