import React from 'react';

import { useQuery } from 'react-query'

import axios from 'axios';
import Loading from '../../Loading/Loading';
import auth from '../../../firebase.init'

import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';


const MyOrderShow = ({ order, index ,cancelOrder}) => {



    const { orderId, quantity, address } = order

    const { data, isLoading, error } = useQuery('SpecificOrder', () => axios.get(`http://localhost:5000/product/${orderId}`,
        {
            headers: {
                'authorize': `token ${localStorage.getItem('tokenVerify')}`
            }
        }));

    if (error) {
        if (error.response.status !== 200) {
            signOut(auth)
        }
    }
    const orderFind = data?.data || {}
    const { name, image, category, discount_price } = orderFind;
    if (isLoading) {
        return <Loading />
    }
    const TotalPrice = parseInt(quantity) * Number(discount_price)
    return (

        <tr>
            <td>{index + 1}</td>
            <td><img src={image} className='w-8 md:w-10 rounded-full' alt="" /></td>
            <td>{name?.slice(0, 30)}...</td>
            <td>{category}</td>
            <td>{TotalPrice}</td>
            <td>{address.slice(0, 20)}..</td>
            <td><button className='btn btn-success btn-xs text-white'>Pay Now</button></td>
            <td>

                <label
                    for="cancelOrder"
                   onClick={()=>cancelOrder(order._id)}
                    className='btn border-none bg-red-600 btn-xs'>
                    cancel
                </label>
            </td>
        </tr>
    );
};

export default MyOrderShow;