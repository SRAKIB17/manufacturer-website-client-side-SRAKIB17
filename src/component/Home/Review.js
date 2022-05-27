import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ReviewShow from './ReviewShow';

const Review = () => {
    const { data, isLoading } = useQuery('review', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/review?page=0&skip=5`));
   
    if (isLoading) {
        return <Loading />
    }
    const reviews = data?.data || [];
    
    return (
        <div className='mt-4 mb-4  bg-primary' >
            <div className='flex items-center text-white w-full justify-center m-6 p-6 flex-wrap md:flex-nowrap'>
                <div className='md:w-[50%]  font-bold text-center md:text-right  p-4'>
                    <h1 className='text-2xl md:text-3xl'>What Our Client's Say: </h1>
                </div>
                <div className="carousel w-[50%]">
                    {
                        reviews.map((review, index) => <ReviewShow review={review} key={review._id} index={index} />)
                    }
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    reviews.map((review, index) =>

                        <a href={'#review' + index} className="btn btn-xs btn-secondary">{index + 1}</a>

                    )
                }
                <div>
                    <Link className='btn btn-xs btn-secondary' to='/reviews'>Load More</Link>
                </div>
            </div>

        </div>
    );
};

export default Review;