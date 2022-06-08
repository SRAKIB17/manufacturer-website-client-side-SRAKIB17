import React from 'react';

import { useQuery } from 'react-query'

import axios from 'axios';
import Loading from '../../Loading/Loading';
import auth from '../../../firebase.init'

import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'

const MyOrderShow = ({ order, index, cancelOrder }) => {

    const navigate = useNavigate()

    const { orderId, quantity, address, payment, status } = order;


    const { data, isLoading, error } = useQuery('SpecificOrder', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/product/${orderId}`,
        {
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
    const orderFind = data?.data || {}
    const { name, image, category, discount_price } = orderFind;
    const TotalPrice = parseInt(quantity) * Number(discount_price)
    return (

        <tr>
            <td>{index + 1}</td>
            <td><img src={image} className='w-8 md:w-10 rounded-full' alt="" /></td>
            <td>{name?.slice(0, 30)}...</td>
            <td>{category}</td>
            <td>{TotalPrice}</td>
            <td>{address?.slice(0, 20)}..</td>
            {
                payment ? <td ><span className='rounded-md p-1 text-xs font-bold text-white border-none btn-success btn-xs'>{status || 'Paid'}</span></td> :
                    <td><button onClick={() => navigate(`/payment/${order._id}/${orderId}`)} className='btn btn-secondary btn-xs text-white'>Pay Now</button></td>
            }
            <td>

                <button className={'btn border-none bg-red-600 btn-xs ' + (payment ? 'btn-disabled' : '')} onClick={() => cancelOrder(order._id)}>
                    <label
                        className='text-white'
                        for="cancelOrder"
                    >
                        cancel
                    </label>
                </button>
            </td>
        </tr>
    );
};

export default MyOrderShow;