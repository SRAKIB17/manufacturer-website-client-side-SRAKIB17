import React from 'react';

const Category = ({ register, errors,product }) => {
    return (
        <div className=' max-w-xs w-full'>


            <input
                list="category"
                placeholder='Category'
                name="category"
                id="category"
                value={product?.category}
                className="input input-bordered input-accent w-full m-2"
                {...register("category", {
                    required: {
                        value: true,
                        message: 'Category is required'
                    }
                   
                })}

            />
            <datalist id="category">
                <option value="car" />
                <option value="motor cycle" />
                <option value="cycle" />
                <option value="other" />
              
            </datalist>

           
            {errors.category?.type === 'required' && <span className='label-text-alt text-red-500'> {errors.category.message}</span>}

           

        </div>
    );
};

export default Category;