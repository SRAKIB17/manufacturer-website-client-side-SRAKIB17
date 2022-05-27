import React, { useEffect, useRef, useState } from 'react';
import { get, useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Image from './Image';
import { useUpdateProfile } from 'react-firebase-hooks/auth';


import { toast } from 'react-toastify';
import Name from './Name';



const UpdateForm = ({ props: { setUpdateProfile, refetch } }) => {

    const shortDescriptionRef = useRef()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [getImageData, setGetImageData] = useState('');
    const [getImageUrl, setGetImageUrl] = useState(null);

    const [user] = useAuthState(auth);


    const [product, setProduct] = useState()
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const onSubmit = async (data) => {
        let imageUrl;
        if (getImageUrl) {
            imageUrl = getImageUrl;
        }
        else {
            imageUrl = user?.photoURL;
        }
        updateProfile({ displayName: data.name, photoURL: imageUrl })
            .then(() => {
                toast.success('successfully update profile')
                refetch()
                setUpdateProfile(null)
            });
    }

    const handleClearProduct = () => {
        setProduct(null)
    }
    return (
        <div className='flex md:flex-row flex-col-reverse mb-8'>
            <div className='order-2 mx-auto m-5'>
                {
                    getImageData && <>

                        <h1 className='text-xl font-bold'>Image</h1>
                        <img src={getImageData} alt="" className='w-[50px]' />
                    </>
                }
            </div>
            <div className='flex flex-col justify-center items-center md:items-start order-1'>
                <form onKeyUp={handleClearProduct} onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-64 md:w-96 justify-center'>

                    {/* -----------------------------------------------for naem-----------------------------------------------  */}
                    <Name register={register} product={product} errors={errors} />
                    <Image product={product} props={{ setGetImageData, setGetImageUrl }} />

                    <input type="submit" className='btn btn-secondary text-white max-w-xs w-full' value="Update" />
                </form>

            </div>


        </div>
    );
};

export default UpdateForm;
