import React from 'react';

const AllReviewShow = ({ review, index }) => {
    const bgRatingAll = ['bg-red-400', ' bg-orange-400', 'bg-yellow-400', 'bg-lime-400', ' bg-green-400']
    const bgRating = bgRatingAll.slice(0, review?.rating)

    return (
        <div className='mx-auto' style={{maxWidth: '700px'}}>
            <div className="card bg-base-100 shadow-xl mb-2">
                <div className='flex p-4'>
                    <div className="avatar mr-4">
                        <div className="w-24 mask mask-hexagon">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div >
                        <h1 className='text-2xl font-bold text-black card-title'>{review.name}</h1>

                        <div className='m-3'>
                            <div className="rating gap-1">
                                <input
                                    disabled="true"
                                    type="radio" name="rating-3"
                                    className={"mask mask-star-2 " + bgRating[0]}
                                />

                                <input
                                    disabled="true"
                                    type="radio"
                                    name="rating-3"
                                    className={"mask mask-star-2 " + bgRating[1]}

                                    checked
                                />
                                <input
                                    disabled="true"
                                    type="radio"
                                    name="rating-3"
                                    className={"mask mask-star-2 " + bgRating[2]} />
                                <input
                                    checked
                                    disabled="true"
                                    type="radio"
                                    name="rating-3"
                                    className={"mask mask-star-2 " + bgRating[3]} />
                                <input
                                    disabled="true"
                                    type="radio"
                                    name="rating-3"
                                    className={"mask mask-star-2 " + bgRating[4]} />
                            </div>
                        </div>
                    </div>

                </div>
                <p className="card-body">{review.review} ...</p>
            </div>
        </div>
    );
};

export default AllReviewShow;
