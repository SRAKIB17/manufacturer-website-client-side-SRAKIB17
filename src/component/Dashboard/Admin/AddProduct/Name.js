import React from 'react';

const Name = ({register, errors}) => {
    return (
        <div className=' max-w-xs w-full'>
            <input
                type='text'
                {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is required'
                    }
        
                })}
                placeholder="Name"
                className="input input-bordered input-accent w-full m-2"
            />
            {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'> {errors.name.message}</span>}


        </div>
    );
};

export default Name;