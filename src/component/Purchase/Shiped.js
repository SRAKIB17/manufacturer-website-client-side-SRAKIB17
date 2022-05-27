import React, { useRef } from 'react';
import { get, useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import axios from 'axios';


const Shipped = ({ product: { product, quantityRef, setProductSet } }) => {

    const addressRef = useRef()
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = async order => {
        const orderBody = {
            ...order,
            address: addressRef.current.value,
            name: user?.displayName,
            email: user?.email,
            orderId: product?._id,
            quantity: quantityRef.current.value
        }
        const { data } = await axios.post('https://fathomless-thicket-10172.herokuapp.com/order', orderBody, {
            headers: {
                'authorize': `token ${localStorage.getItem('tokenVerify')}`
            }
        });
        if (data.acknowledged) {
            toast.success('Successfully Placed Order')
            setProductSet(false)
        }
        else {
            toast.error('Something is wrong')
        }
    }

    const heightAutoHandle = (e) => {
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight + 'px'
    }

    const onchangeInput = (e) => {
        heightAutoHandle(e)
    }

    return (
        <div>



            <input type="checkbox" id="shippedProduct" className="modal-toggle" />


            <div className="modal">
                <div className="modal-box relative">
                    <label for="shippedProduct" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center text-primary">Please Provide right information</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center max-w-xs mx-auto'>


                        <input
                            value={user?.displayName}
                            className="input input-bordered input-accent  m-2 max-w-xs w-full" disabled
                        />

                        <input
                            value={user?.email}
                            disabled
                            className="input input-bordered input-accent  m-2 max-w-xs w-full"
                        />




                        <input
                            type='tel'
                            {...register("tel", {
                                required: {
                                    value: true,
                                    message: "Please provide phone number"

                                }

                            })}
                            placeholder="Phone Number"
                            className="input input-bordered input-accent  m-2 max-w-xs w-full"
                        />
                        {errors.tel?.type === 'required' && <span className="label-text-alt text-red-500">{errors.tel.message}</span>}
                        {errors.tel?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.tel.message}</span>}

                        <textarea
                            ref={addressRef}
                            // {...register("address", {
                            //     required: {
                            //         value: true,
                            //         message: 'address is required'
                            //     }
                            // })}
                            placeholder="Address"
                            className="input input-bordered input-accent mt-2 m-2 p-2 w-full textareaScroll"

                            onChange={onchangeInput}
                            onInput={onchangeInput}

                            onCut={heightAutoHandle}
                            onPaste={heightAutoHandle}
                            onDrop={heightAutoHandle}
                            onKeyDown={heightAutoHandle}
                            onBlur={heightAutoHandle}
                            onKeyUp={heightAutoHandle}

                        />
                        {errors.address?.type === 'required' && <span className='label-text-alt text-red-500'> {errors.address.message}</span>}
                        <input className=' max-w-xs btn btn-secondary text-white w-full p-3 m-2' type="submit" value="Place Order" />

                    </form>
                </div>
            </div>

        </div >
    );
};

export default Shipped;