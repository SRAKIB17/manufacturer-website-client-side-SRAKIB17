import React from 'react';
import Banner from './Banner';

import Discount from './Discount';
import FeatureProduct from './FeatureProduct';
import NewProduct from './NewProduct/NewProduct';
import Review from './Review';
import BusinessSummary from './Summary/BusinessSummary';

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