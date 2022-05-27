import React from 'react';
import AnnualRevenue from './AnnualRevenue';
import Customers from './Customers';
import Default from './Default';


const BusinessSummary = () => {
    const customer = [
        { year: 2010, Users: 40, pv: 2400, amt: 2400 },
        { year: 2012, Users: 50, pv: 2400, amt: 2400 },
        { year: 2014, Users: 60, pv: 2400, amt: 2400 },
        { year: 2016, Users: 70, pv: 2400, amt: 2400 },
        { year: 2018, Users: 70, pv: 2400, amt: 2400 },
        { year: 2020, Users: 80, pv: 2400, amt: 2400 },
        { year: 2022, Users: 81, pv: 2400, amt: 2400 },
    ];

    const annualRevenue = [
        { year: 2010, Revenue: 40, pv: 2400, amt: 2400 },
        { year: 2012, Revenue: 50, pv: 2400, amt: 2400 },
        { year: 2014, Revenue: 60, pv: 2400, amt: 2400 },
        { year: 2016, Revenue: 70, pv: 2400, amt: 2400 },
        { year: 2018, Revenue: 70, pv: 2400, amt: 2400 },
        { year: 2020, Revenue: 80, pv: 2400, amt: 2400 },
        { year: 2022, Revenue: 81, pv: 2400, amt: 2400 },
    ]

    const defaultS = [
        { default: 'Customer', Total: 40, pv: 2400, amt: 2400 },
        { default: 'Annual revenue', Total: 50, pv: 2400, amt: 2400 },
        { default: 'Reviews', Total: 60, pv: 2400, amt: 2400 },
        { default: 'Tools', Total: 70, pv: 2400, amt: 2400 },

    ]
    return (
        <div className='bg-primary p-4 mb-8'>
            <div>
                <h1 className='text-center text-3xl text-white m-4 '>Business Summary</h1>
            </div>
            <div >



                <div className="carousel w-full overflow-auto">
                    <div id="item1" className="carousel-item w-full">
                        <div className='sm:mx-auto'>
                            <Default props={defaultS} />
                        </div>

                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className='mx-auto'>
                            <AnnualRevenue props={annualRevenue} />
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">

                        <div className='w-80 mx-auto'>
                            <Customers props={customer} />
                        </div>
                    </div>

                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>

                </div>

            </div>

        </div>
    )
};

export default BusinessSummary;