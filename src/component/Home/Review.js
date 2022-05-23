import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Review = () => {
    const reviews = [{
        img: 'https://demo.templatetrend.com/prestashop/PRS373/img/cms/mail.png',
        name: "Yousuf",
        text: 'reflsdflsdfj'
    }, 
    {
        text: 'fsdLorem ipsum, dolor sit amet consectetur adipisicing elit. Eum doloremque autem, unde tempore labore velit accusantium iste nobis quam asperiores dolores veritatis, voluptatum ratione voluptates magni minima necessitatibus aliquid nam!fsdflsdfjsdlfjsdlfjsdlfsdjfsdlfsdfsdlf',
        rating: 5
    },
    {
        img: 'https://demo.templatetrend.com/prestashop/PRS373/img/cms/mail.png',
        name: "Yousuf",
        text: 'fsdfsdflsdfjsdlfjsdlfjsdlfsdjfsdlfsdfsdlf',
        rating: 5
    },
    {
        img: 'https://demo.templatetrend.com/prestashop/PRS373/img/cms/mail.png',
        name: "Yousuf",
        text: 'fsdfsdflsdfjsdlfjsdlfjsdlfsdjfsdlfsdfsdlf',
        rating: 5
    }
    ]
    return (
        <div className='mt-4 mb-4  bg-primary' >
            <div className='flex items-center text-white w-full justify-center m-6 p-6 flex-wrap md:flex-nowrap'>
                <div className='md:w-[50%]  font-bold text-center md:text-right  p-4'>
                    <h1 className='text-2xl md:text-3xl'>What Our Client's Say: </h1>
                </div>
                <div class="carousel w-[50%]">
                    {
                        reviews.map((review, index) =>
                            <div id={'review' + index} class="carousel-item w-full p-4">
                                <div class="avatar mr-4">
                                    <div class="w-24 mask mask-hexagon">
                                        <img src="https://api.lorem.space/image/face?hash=55350" />
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold text-white'>{review.name}</h1>
                                    <p>{review.text.slice(0, 50)} ...</p>
                                </div>
                            </div>


                        )
                    }
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                {
                    reviews.map((review, index) =>

                        <a href={'#review' + index} class="btn btn-xs btn-secondary">{index + 1}</a>

                    )
                }
                <div>
                    <Link className='btn btn-xs btn-secondary' to='/'>Load More</Link>
                </div>
            </div>

        </div>
    );
};

export default Review;