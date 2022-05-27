import React, { useRef } from 'react';
import { get, useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import { signOut } from 'firebase/auth';
import Loading from '../../Loading/Loading';
import profile from '../../../image/profile/headerProfile.svg';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const reviewRef = useRef();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const { data, isLoading, error } = useQuery('checkUser', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/verify-user`, {
        headers: {
            'authorize': `token ${localStorage.getItem('tokenVerify')}`
        }
    }));
    if (isLoading) {
        return <Loading />
    }
    if (error) {
        if (error.response.status !== 200) {
            signOut(auth)
        }
    }
    //---------------------auto matic ----------------------
    const heightAutoHandle = (e) => {
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight + 'px'
    }

    const onchangeInput = (e) => {
        heightAutoHandle(e)
    }

    const onSubmit = async (GetData, e) => {
        let rating = e.target.ownerDocument.querySelectorAll('.mask-star-2');
        let ratingChecked;
        rating.forEach((value, index) => {
            if (value.checked) {
                ratingChecked = index + 1;
            }

        })

        const review = {
            img: user.photoURL|| profile,
            name: user.displayName,
            email: user.email,
            review: reviewRef.current.value,
            rating: ratingChecked
        }

        const { data } = await axios.post('https://fathomless-thicket-10172.herokuapp.com/review', review, {
            headers: {
                'authorize': `token ${localStorage.getItem('tokenVerify')}`
            }
        });
       
        if (data.acknowledged) {
            toast.success('successfully add item')
            e.reset()
            reviewRef.current.value = ''
        }
        else {
            toast.error('Something is wrong')
        }
    }
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-64 md:w-96 justify-center'>
                <h1 className='text-2xl text-center p-4'>Add Review</h1>
                <textarea
                    ref={reviewRef}
                    placeholder="Review"
                    className="input input-bordered input-accent mb-2 p-2 w-full textareaScroll"

                    onChange={onchangeInput}
                    onInput={onchangeInput}

                    onCut={heightAutoHandle}
                    onPaste={heightAutoHandle}
                    onDrop={heightAutoHandle}
                    onKeyDown={heightAutoHandle}
                    onBlur={heightAutoHandle}
                    onKeyUp={heightAutoHandle}
                    required

                />

                <div className='m-3'>
                    <div className="rating gap-1">
                        <input
                            type="radio" name="rating-3"
                            className="mask mask-star-2 bg-red-400"
                        />

                        <input
                            type="radio"
                            name="rating-3"
                            className="mask mask-star-2 bg-orange-400"

                            checked
                        />
                        <input
                            type="radio"
                            name="rating-3"
                            className="mask mask-star-2 bg-yellow-400" />
                        <input
                            type="radio"
                            name="rating-3"
                            className="mask mask-star-2 bg-lime-400" />
                        <input
                            type="radio"
                            name="rating-3"
                            className="mask mask-star-2 bg-green-400" />
                    </div>
                </div>
                <input type="submit" className='btn btn-secondary text-white' value="Submit" />
            </form>

        </div>
    );
};

export default AddReview;