import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../../image/banner/banner-1.jpg'
import banner2 from '../../image/banner/banner-2.jpg'
import banner3 from '../../image/banner/banner-3.jpg'
import banner4 from '../../image/banner/banner-4.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className='mt-2'>
            <Carousel infiniteLoop={true} autoPlay={true} emulateTouch={true} interval={2500}>
                <div>
                    <img src={banner1} />
                   
                </div>
                <div>
                    <img src={banner2} />
                    
                </div>
                <div>
                    <img src={banner3} />
                    
                </div>
                <div>
                    <img src={banner4} />
                    
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;