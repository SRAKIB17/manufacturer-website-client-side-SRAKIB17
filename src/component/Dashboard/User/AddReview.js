import React from 'react';
import { get, useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // {
    //     img: ',
    //         name: "Yousuf",
    //             text: 'fsdfsdflsdfjsdlfjsdlfjsdlfsdjfsdlfsdfsdlf',
    //                 rating: 5
    // // }

    const onSubmit = async (data, e) => {
        let rating = e.target.ownerDocument.querySelectorAll('.mask-star-2');
        let ratingChecked;
        rating.forEach((value, index) => {
            if (value.checked) {
                ratingChecked = index + 1;
            }

        })

        const name = user.displayName;

        const review = {
            img: 'https://demo.templatetrend.com/prestashop/PRS373/img/cms/mail.png',
            name: name,
            text: data.review,
            rating: ratingChecked
        }
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-64 justify-center'>

                <textarea
                    cols="30" rows="10"
                    {...register("review", {
                        required: {
                            value: true,
                            message: 'Review is required'
                        }
                    })}
                    placeholder="Review"
                    className="input input-bordered input-accent mb-2 w-full"
                />
                {errors.review?.type === 'required' && <span className='label-text-alt text-red-500'> {errors.review.message}</span>}

                <div className='m-3'>
                    <div class="rating gap-1">
                        <input
                            type="radio" name="rating-3"
                            class="mask mask-star-2 bg-red-400"
                        />

                        <input
                            type="radio"
                            name="rating-3"
                            class="mask mask-star-2 bg-orange-400"

                            checked
                        />
                        <input
                            type="radio"
                            name="rating-3"
                            class="mask mask-star-2 bg-yellow-400" />
                        <input
                            type="radio"
                            name="rating-3"
                            class="mask mask-star-2 bg-lime-400" />
                        <input
                            type="radio"
                            name="rating-3"
                            class="mask mask-star-2 bg-green-400" />
                    </div>
                </div>
                <input type="submit" className='btn btn-secondary text-white' value="Submit" />
            </form>

        </div>
    );
};

export default AddReview;