import React, { Suspense } from 'react';
import UseAuth from '../layouts/UseAuth';
import JobList from './JobList';
import { myJobPromise } from '../jobapi';

const MyPostedJob = () => {
    const {user}=UseAuth()
    return (
        <div>
           <h2>job posted :</h2> 
           <Suspense>
            <JobList myJobPromise={myJobPromise(user?.email)}></JobList>
           </Suspense>

        </div>
    );
};

export default MyPostedJob;