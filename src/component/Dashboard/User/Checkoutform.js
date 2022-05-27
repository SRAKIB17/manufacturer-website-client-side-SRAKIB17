import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const CheckoutForm = ({ props: { orderId, paymentOrder, refetch } }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const { image, name, discount_price, short_description, category, _id } = paymentOrder;

    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')

    const [transactionID, setTransactionId] = useState('')

    // for get order details 
    const { data, isLoading, error } = useQuery('getPaymentAnOrder', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/order/${orderId}`,
        {
            headers: {
                'authorize': `token ${localStorage.getItem('tokenVerify')}`
            }
        }));

    const { address, email, name: customerName, quantity, tel } = data?.data || {}
    const TotalPrice = parseInt(quantity) * Number(discount_price);

    useEffect(() => {
        if (TotalPrice && quantity && (discount_price)) {
            axios.post('https://fathomless-thicket-10172.herokuapp.com/create-payment-intent', { price: parseInt(quantity) * Number(discount_price) }, {
                headers: {
                    'authorize': `token ${localStorage.getItem('tokenVerify')}`
                }
            })
                .then(data => {

                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret)
                    }
                })
        }

    }, [quantity, discount_price, TotalPrice,])

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        if (error.response.status !== 200) {
            signOut(auth)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
            billing_details: {
                name: customerName,
                email: email,
            },
        });



        setCardError(error ? error.message : '')
        setSuccess('')



        //confirmed card payment

        if (error) {
            setCardError(error?.message)
            setSuccess('')

        }
        else {
            setTransactionId(paymentMethod.id)
            setCardError('')
            setSuccess('Congrats! your payment is completed');
            // 
            const payment = {
                transactionId: paymentMethod.id,
                payment: true,
            }
            const { data } = await axios.put(`https://fathomless-thicket-10172.herokuapp.com/order-payment/${orderId}`, payment, {
                headers: {
                    'authorize': `token ${localStorage.getItem('tokenVerify')}`
                }
            })
           


        }


    }


    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className=' w-60 h-60 rounded-md' alt='' />
                    <div>
                        <div className='mt-6 mb-6 flex flex-col items-center justify-center]'>
                            <div className="overflow-x-auto">
                                <h1 className='text-left p-2 text-2xl'>Customer Info:</h1>

                                <table className="table table-compact w-96">
                                    <tbody>

                                        <tr>
                                            <th>Name:</th>
                                            <td>{customerName}</td>
                                        </tr>

                                        <tr>
                                            <th>Email:</th>
                                            <td>{email}</td>
                                        </tr>
                                        <tr>
                                            <th>Address:</th>
                                            <td>{address}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone:</th>
                                            <td>{tel}</td>
                                        </tr>

                                    </tbody>
                                </table>
                                <h1 className='text-left p-2 text-2xl'>Product Info:</h1>
                                <table className="table table-compact w-96">
                                    <tbody>

                                        <tr>
                                            <th>Product:</th>
                                            <td>{name}</td>
                                        </tr>

                                        <tr>
                                            <th> Category:</th>
                                            <td>{category}</td>
                                        </tr>

                                        <tr>
                                            <th>Total amount:</th>
                                            <td>{TotalPrice}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>


                        </div>

                        <form onSubmit={handleSubmit}>
                            <CardElement className='input input-bordered input-sm p-2 w-96'
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}
                            />
                            <button type="submit" className='btn btn-info btn-sm mt-2 mb-2 text-white' disabled={!stripe}>
                                Pay
                            </button>
                        </form>
                        {
                            cardError && <p className='text-red-500'>{cardError}</p>
                        }
                        {
                            success && <p className='text-green-500'>{success}</p>
                        }
                        {
                            success && <p className='text-green-500'>Your transaction Id : <span className='text-red-400'>{transactionID}</span></p>
                        }
                        {
                            success && <Link to='/dashboard/my-order' className=' btn btn-primary btn-xs mt-3'>Back My Order</Link>
                        }
                    </div>
                </div>
            </div>

        </div >
    );
};

export default CheckoutForm;