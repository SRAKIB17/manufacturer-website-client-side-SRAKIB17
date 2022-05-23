import React from 'react';
import { get, useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const Shipped = ({ product:{product, quantityRef, setProductSet} }) => {
    console.log(quantityRef.current.value)

    const [user] = useAuthState(auth)

    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async data => {
        setProductSet(false);
        toast.success('Successfully Placed Order')
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



            <input type="checkbox" id="shippedProduct" class="modal-toggle" />


            <div class="modal">
                <div class="modal-box relative">
                    <label for="shippedProduct" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-center text-primary">Please Provide right information</h3>

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
                            className="input input-bordered input-accent  m-2 w-full max-w-xs w-full"
                        />
                        {errors.tel?.type === 'required' && <span className="label-text-alt text-red-500">{errors.tel.message}</span>}
                        {errors.tel?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.tel.message}</span>}

                        <textarea
                            // {...register("address", {
                            //     required: {
                            //         value: true,
                            //         message: 'address is required'
                            //     }
                            // })}
                            placeholder="Address"
                            className="input input-bordered input-accent mt-2 mb-2 p-2 w-full textareaScroll"

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
                        <input className=' max-w-xs btn btn-secondary text-white w-full p-3' type="submit" value="Place Order" />

                    </form>
                </div>
            </div>

        </div >
    );
};

export default Shipped;