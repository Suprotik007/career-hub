import React from 'react';
import Banner from '../layouts/Banner';
import HotJobs from '../layouts/HotJobs';

const Home = () => {
    // const jobPromise=fetch('http://localhost:3000/jobs')
    // .then(res=>res.json())
    return (
        <div>
        <Banner></Banner>
        <HotJobs ></HotJobs>
        </div>
    );
};

export default Home;