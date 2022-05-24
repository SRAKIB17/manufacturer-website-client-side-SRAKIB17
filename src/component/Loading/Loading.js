import React from 'react';
import loader from './loader.gif';

const Loading = () => {
    return (
        <div className='flex items-center justify-center m-10'>
            <img src={loader} alt="" />
        </div>
    );
};

export default Loading;