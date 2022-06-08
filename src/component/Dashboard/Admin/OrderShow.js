import React, { useRef } from 'react';

import { useQuery } from 'react-query'

import axios from 'axios';
import Loading from '../../Loading/Loading';




const OrderShow = ({ order, index }) => {
    const statusRef = useRef()

    const { orderId, quantity, address, payment, status } = order;

    const { data, isLoading, refetch } = useQuery('specificAllOrder', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/product/${orderId}`, {
        headers: {
            'authorize': `token ${localStorage.getItem('tokenVerify')}`
        }
    }));
    const { name, image, category, discount_price } = data?.data || {}
    if (isLoading) {
        return <Loading />
    }
    const TotalPrice = parseInt(quantity) * Number(discount_price);

    const changingHandleOrder = async (e) => {
        e.preventDefault()
        const status = statusRef.current.value;

        let statusChange = {
            status: status
        }
        const { data } = await axios.put(`https://fathomless-thicket-10172.herokuapp.com/order-payment-status/${order._id}`, statusChange, {
            headers: {
                'authorize': `token ${localStorage.getItem('tokenVerify')}`
            }
        })
        refetch()
    }

    return (

        <tr>
            <td>{index + 1}</td>
            <td><img src={image} className='w-8 md:w-10 rounded-full' alt="" /></td>
            <td>{name?.slice(0, 30)}...</td>
            <td>{category}</td>
            <td>{TotalPrice}</td>
            <td title={address}>{address?.slice(0, 15)}..</td>
            <td>
                {payment ?
                    <span className=''>
                        <form onChange={changingHandleOrder} onInput={changingHandleOrder} onClick={changingHandleOrder} onBlur={changingHandleOrder}>
                            <select name="status" ref={statusRef} id="" className='input input-bordered p-1  input-accent'>
                                <option value="" disabled selected >{status}</option>
                                <option disabled={(status === 'Refund') ? true : false} value="Refund" >Refund</option>
                                <option disabled={(status === 'Approved') ? true : false} value="Approved" >Approved</option>
                                <option disabled={(status === 'Pending') ? true : false} value="Pending">Pending</option>
                                <option disabled={(status === 'Shipped') ? true : false} value="Shipped">Shipped</option>
                            </select>
                        </form>
                    </span> :
                    <span className='rounded-md p-1 text-xs font-bold text-white border-none btn-error btn-xs'>Unpaid</span>
                }
            </td>
        </tr>
    );
};

export default OrderShow;

