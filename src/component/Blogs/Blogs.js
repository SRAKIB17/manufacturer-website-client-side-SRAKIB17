import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                  
                    <thead>
                        <tr>
                            <th> How will you improve the performance of a React Application?

14.2

14.3

14.4 

14.5 

14.6 

</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th> What are the different ways to manage a state in a React application?</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        <tr class="active">
                            <th> How does prototypical inheritance work?</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                        <tr>
                            <th>What is a unit test? Why should write unit tests?</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                        <tr>
                            <th>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;