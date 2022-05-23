import React from 'react';

const ReviewShow = ({ review, index }) => {

    const bgRatingAll = ['bg-red-400',' bg-orange-400','bg-yellow-400','bg-lime-400', ' bg-green-400' ]
    const bgRating = bgRatingAll.slice(0, review?.rating)
    return (
        <div id={'review' + index} className="carousel-item w-full p-4">
            <div className="avatar mr-4">
                <div className="w-24 mask mask-hexagon">
                    <img src="https://api.lorem.space/image/face?hash=55350" />
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold text-white'>{review.name}</h1>
                <p>{review.text.slice(0, 50)} ...</p>
                <div className='m-3'>
                    <div className="rating gap-1">
                        <input
                            disabled="true"
                            type="radio" name="rating-3"
                            className={"mask mask-star-2 "+ bgRating[0]}
                        />

                        <input
                            disabled="true"
                            type="radio"
                            name="rating-3"
                            className={"mask mask-star-2 "+ bgRating[1]}

                            checked
                        />
                        <input
                            disabled="true"
                            type="radio"
                            name="rating-3"
                            className={"mask mask-star-2 "+ bgRating[2]} />
                        <input
                            checked
                            disabled="true"
                            type="radio"
                            name="rating-3"
                            className={"mask mask-star-2 "+ bgRating[3]} />
                        <input
                            disabled="true"
                            type="radio"
                            name="rating-3"
                            className={"mask mask-star-2 "+ bgRating[4]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewShow;