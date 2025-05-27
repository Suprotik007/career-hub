
import React, { useEffect, useState } from 'react';
import JobCard from '../shared/JobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div>
            <h1 className='text-5xl font-bold text-yellow-300 text-center p-15'>Jobs for you</h1>
            <div className='grid grid-cols-3 w-11/12 mx-auto gap-8'>
                {
                jobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
            }
            </div>
        </div>
    );
};

export default HotJobs;
