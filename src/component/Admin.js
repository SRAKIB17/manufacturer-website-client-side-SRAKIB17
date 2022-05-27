import React from 'react';

const Admin = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 flex md: justify-around justify-center ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/xjs8fWY/96996729.jpg" className='rounded-md' />
                    <div>
                        <h1 className="text-5xl font-bold m-4">About Me</h1>
                        <div className="overflow-x-auto w-96 md:w-full md:overflow-hidden">
                            <table className="table overflow-auto">

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Name: </td>
                                        <td>Md Rakibul Islam</td>

                                    </tr>

                                    <tr className="active">
                                        <td>2</td>
                                        <td>Email</td>
                                        <td>rakibulssc5@gmail.com</td>

                                    </tr>
                                    <tr >
                                        <td>3</td>
                                        <td>Address</td>
                                        <td>Kurigram, Bangladesh</td>

                                    </tr>

                                    <tr className="active">
                                        <td>4</td>
                                        <td> Educational Background</td>
                                        <td>CSE</td>

                                    </tr>
                                    <tr >
                                        <td>5</td>
                                        <td> Skilled</td>

                                        <td>
                                            <dl>
                                                <dt>
                                                    Expertise:
                                                </dt>
                                                <dd>
                                                    ● JavaScript, ES6, REST API, React, React Router, React Hook, HTML5, CSS3, Bootstrap-5
                                                </dd>
                                                <dt>  Comfortable:</dt>
                                                <dd>
                                                    ● Node.js, MongoDB, Firebase, Express.js, React Hook Form, React Query, Tailwind

                                                </dd>
                                                <dt> Familiar:</dt>
                                                <dd>
                                                    ● SQL,
                                                </dd>
                                                <dt>Tools:</dt>
                                                <dd>
                                                    ● GitHub, VS Code, Code Block, PyCharm, Chrome Dev Tools, Heroku, Netlify, Postman,
                                                    Figma
                                                </dd>
                                                <dt> Language/ Library:</dt>
                                                <dd>
                                                    ● C (fundamental), Python, Matplotlib, NumPy, Pandas

                                                </dd>
                                            </dl>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;