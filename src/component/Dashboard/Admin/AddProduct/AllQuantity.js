import React from 'react';

const AllQuantity = ({ register, errors }) => {
    // minimum_quantity: 4,/
    //                     total_quantity: 300,
    //                      
    //                     newI: true
    return (
        <div className=' max-w-xs w-full'>
            <div className='flex'>
                <input
                    type='number'
                    {...register("price", {
                        required: {
                            value: true,
                            message: 'Price is required'
                        }

                    })}
                    placeholder="Price"
                    className="input input-bordered input-accent w-full m-2"
                />


                <input
                    type='number'
                    {...register("discount_price", {
                        required: {
                            value: true,
                            message: ' Discount price is required'
                        }

                    })}
                    placeholder="Discount Price"
                    className="input input-bordered input-accent w-full m-2"
                />

            </div>
            <div className='flex justify-between m-2'>
                {errors.price?.type === 'required' && <span className='label-text-alt text-red-500'> {errors.price.message}  </span>}
                {errors.discount_price?.type === 'required' && <span className='label-text-alt text-red-500'>  {errors.discount_price.message}</span>}

            </div>

            <input
                type='number'
                {...register("total_quantity", {
                    required: {
                        value: true,
                        message: ' Quantity is required'
                    }

                })}
                placeholder="Quantity"
                className="input input-bordered input-accent w-full m-2"
            />
            {errors.total_quantity?.type === 'required' && <span className='label-text-alt text-red-500'> {errors.total_quantity.message}  </span>}


        </div>
    );
};

export default AllQuantity;