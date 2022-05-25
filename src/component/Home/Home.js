import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Discount from './Discount';
import FeatureProduct from './FeatureProduct';
import NewProduct from './NewProduct';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <NewProduct/>
            <FeatureProduct/>
            <Discount/>
            <Review/>
            <BusinessSummary/>
        </div>
    );
};

export default Home;