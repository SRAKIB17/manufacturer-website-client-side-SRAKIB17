import React, { useRef, useState } from 'react';
import { get, useForm } from "react-hook-form";

import Name from './Name';
import Category from './Category';
import Description from './Description';
import AllQuantity from './AllQuantity';
import Image from './Image';
import axios from 'axios';
import {toast} from 'react-toastify';

const AddProduct = () => {

    const shortDescriptionRef = useRef()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [getImageData, setGetImageData] = useState('');
    const [getImageUrl, setGetImageUrl] = useState('');



    const onSubmit = async (productInfo) => {
        const ProductData = { ...productInfo, image: getImageUrl, short_description: shortDescriptionRef.current.value }
        const {data} = await axios.post('https://fathomless-thicket-10172.herokuapp.com/add-product',ProductData);
        if(data.acknowledged){
            toast.success('successfully add item')
        }
        else{
            toast.error('Something is wrong')
        }
        reset()
    }
    return (
        <div className='flex md:flex-row flex-col-reverse'>
            <div className='order-2 mx-auto m-5'>
                {
                    getImageData && <>

                        <h1 className='text-3xl font-bold'>Preview Image</h1>
                        <img src={getImageData} alt="" className='image-full'/>
                    </>
                }
            </div>
            <div className='flex flex-col justify-center items-center md:items-start order-1'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-64 md:w-96 justify-center'>

                    {/* -----------------------------------------------for naem-----------------------------------------------  */}
                    <Name register={register} errors={errors} />

                    {/*___________________________________________________ for image  ____________________________________*/}
                    <Category register={register} errors={errors} />

                    <AllQuantity register={register} errors={errors} />
                    <Image props={{ setGetImageData, setGetImageUrl }} />

                    <Description getRef={shortDescriptionRef} />




                    <input type="submit" className='btn btn-secondary text-white max-w-xs w-full' value="Add Product" />
                </form>

            </div>


        </div>
    );
};

export default AddProduct;
