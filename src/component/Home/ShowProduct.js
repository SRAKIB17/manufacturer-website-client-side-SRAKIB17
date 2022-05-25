import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowProduct = ({ product: { _id,category, image, short_description, minimum_quantity, name, total_quantity, price, discount_price, newI } }) => {
    const navigate = useNavigate()
    return (

        <div className="card bg-base-100 shadow-xl h-full">
            <figure><img src={image} alt="Shoes" className='p-2 w-[250px] h-[250px]' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    {
                        newI==='true' ? <div className="badge badge-secondary">NEW</div> : ''
                    }
                </h2>
                <p>{short_description?.slice(0, 50)}...</p>
                <div>
                    <div className="text-xl card-actions justify-start mb-2">
                        <div>Price:</div>
                        <div className='text-orange-500'><del>{price}</del></div>
                        <div>{discount_price}</div>
                        <div className='text-sm text-gray-500'>/pice</div>
                    </div>
                    <div className="text-xl card-actions justify-start mb-2">
                        <div>Quantity:</div>
                        <div>{total_quantity}</div>
                    </div>
                    <div className="text-sm card-actions justify-start mb-2">
                        <div>Minimum Order:</div>
                        <div>{minimum_quantity}</div>
                    </div>
                </div>
                <div className="card-actions justify-end mb-2">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">Products</div>
                </div>
                <div className='flex justify-between'>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary">Add to Favorite</button>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={()=>navigate('/purchase/'+_id)} className="btn btn-secondary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ShowProduct;