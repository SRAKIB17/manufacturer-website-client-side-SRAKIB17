import React from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './Checkoutform';
import { useLocation, useParams } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import { useQuery } from 'react-query';
import axios from 'axios';



const stripePromise = loadStripe('pk_test_51L1W9xCcK8NGum973CzvdWyDEtbUTACE0zhATf8iH6Eo1suNA79e9k2mxUQ4WqlR6iIfLkNoLCD3x3uLdcsKZ3sE00MiDHjCZq');

const OrderPayment = () => {
    const { orderId, productId } = useParams();


    // const productId = useLocation().search.split('=')[1]

    const { data, isLoading, error, refetch } = useQuery('paymentForGetOrder', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/product/${productId}`,
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

    const paymentOrder = data?.data || {};


    // const TotalPrice = parseInt(quantity) * Number(discount_price);

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm props={{ orderId, paymentOrder, refetch }} />
            </Elements>
        </div>
    );
};

export default OrderPayment;