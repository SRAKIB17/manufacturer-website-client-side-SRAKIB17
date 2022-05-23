import React from 'react';
import bgDicount from '../../image/home/parallax.jpg';

const Discount = () => {
    return (
        <div className='h-[400px] flex flex-col justify-center items-center' style={{ backgroundImage: `url('${bgDicount}')`, backgroundPosition: '50% 40.5963%', width: 'auto' }}>
            <div className=' text-center'>
                <h1 className='text-5xl md:text-7xl text-white mb-4'>Clearance & Discount</h1>
                <h3 className='text-3xl md:text-4xl text-white'>Top quality, great selection and expert advice you can trust</h3>
                <button className='btn btn-secondary p-3 mt-4'>Shop Now</button>
            </div>
        </div>
    );
};

export default Discount;