import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ReviewShow from '../Home/ReviewShow';
import Loading from '../Loading/Loading';
import AllReviewShow from './AllReviewShow';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';


const AllReview = () => {
    const [page, setPage] = useState(0)
    const [skip, setSkip] = useState(10);
    const { hash, pathname } = useLocation();


    useEffect(() => {
        if (hash === '') {
            window.scrollTo(0, 0)
        }

    }, [hash, pathname])
    const { data, isLoading, refetch } = useQuery([page, skip,'AllReview'], () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/review?page=${page}&skip=${skip}`));

    const { data: count, refetch: reCount } = useQuery('reviewCount', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/review-count?skip=${skip}`));

    const totalCount = count?.data?.count;

    if (isLoading) {
        return <Loading />
    }
    const reviews = data?.data || [];

    const skipHandle = e => {
        setSkip(e.target.value);
        refetch()
        reCount()
    }
    const pageHandle = (pageNumber) => {
        refetch()
        setPage(pageNumber)
        refetch()
    }


    return (

        <div>
            <div className='p-4'>
                {
                    reviews.map((review, index) => <AllReviewShow review={review} key={review._id} index={index} />)
                }
            </div>
            <div>
                <Pagination count={totalCount} page={page} skipHandle={skipHandle} pageHandle={pageHandle} />
            </div>
        </div>
    );
};

export default AllReview;