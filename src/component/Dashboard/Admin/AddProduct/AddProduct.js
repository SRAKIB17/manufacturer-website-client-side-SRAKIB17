import React, { useRef, useState } from 'react';
import { get, useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Name from './Name';
import Category from './Category';
import Description from './Description';
import AllQuantity from './AllQuantity';
import Image from './Image';

const AddProduct = () => {
    const [user] = useAuthState(auth)
    const reviewRef = useRef();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [getImageData, setGetImageData] = useState('');
    const [getImageUrl, setGetImageUrl] = useState('')


    //---------------------auto matic ----------------------

    // {
    //     
    //         image: 'https://demo.templatetrend.com/prestashop/PRS373/img/p/3/4/34-large_default.jpg',
    //                 
    //                                 category: 'black',
    //                                    
    // },

    const onSubmit = async (data, e) => {

        reset()
    }
    return (
        <div className='flex'>
            <div className='flex flex-col justify-center items-center md:items-start'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-64 md:w-96 justify-center'>

                    {/* -----------------------------------------------for naem-----------------------------------------------  */}
                    <Name register={register} errors={errors} />

                    {/*___________________________________________________ for image  ____________________________________*/}
                    <Category register={register} errors={errors} />

                    <AllQuantity register={register} errors={errors} />
                    <Image props={{ setGetImageData , setGetImageUrl}} />

                    <Description register={register} errors={errors} />




                    <input type="submit" className='btn btn-secondary text-white max-w-xs w-full' value="Add Product" />
                </form>

            </div>

            <div>
                {
                    getImageData && <>

                        <h1 className='text-3xl font-bold'>Preview Image</h1>
                        <img src={getImageData} alt="" />
                    </>
                }
            </div>
        </div>
    );
};

export default AddProduct;
