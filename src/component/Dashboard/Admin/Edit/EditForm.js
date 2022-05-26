import React, { useEffect, useRef, useState } from 'react';
import { get, useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Name from './Name';
import Category from './Category';
import Description from './Description';
import AllQuantity from './AllQuantity';
import Image from './Image';
import axios from 'axios';
import { toast } from 'react-toastify';



const EditForm = ({ setEdit: { setEdit, edit, refetch } }) => {

    console.log(edit)
    const shortDescriptionRef = useRef()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [getImageData, setGetImageData] = useState('');
    const [getImageUrl, setGetImageUrl] = useState('');
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState()





    useEffect(() => {
        const getEditProduct = async () => {
            const { data } = await axios.get(`https://fathomless-thicket-10172.herokuapp.com/product-admin/${edit}?email=${user.email}`, {
                headers: {
                    'authorize': `token ${localStorage.getItem('tokenVerify')}`
                }
            });
            setProduct(data)
        }
        getEditProduct()

    }, [edit, user])






    const onSubmit = async (productInfo) => {
        const ProductData = { ...productInfo, image: getImageUrl, short_description: shortDescriptionRef.current.value }
        console.log(ProductData)
        const { data } = await axios.put(`https://fathomless-thicket-10172.herokuapp.com/product/${edit}`, ProductData);
        console.log(data)
        if (data.modifiedCount) {
            toast.success('successfully add item')
        }
        else {
            toast.error('Everything up-to-date')
        }

        refetch()
        setEdit(null)
    }

    const handleClearProduct = () => {
        setProduct(null)
    }
    return (
        <div className='flex md:flex-row flex-col-reverse'>
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

                    {/*___________________________________________________ for image  ____________________________________*/}
                    <Category register={register} product={product} errors={errors} />

                    <AllQuantity register={register} product={product} errors={errors} />

                    <Image product={product} props={{ setGetImageData, setGetImageUrl }} />

                    <Description product={product} getRef={shortDescriptionRef} />




                    <input type="submit" className='btn btn-secondary text-white max-w-xs w-full' value="Add Product" />
                </form>

            </div>


        </div>
    );
};

export default EditForm;
