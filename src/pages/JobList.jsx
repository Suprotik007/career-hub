import React, { useEffect, useState } from 'react';

const JobList = ({myJobPromise}) => {
     const [jobs, setJob] = useState(null);
    
      useEffect(() => {
        async function fetchApplications() {
          const result = await myJobPromise; // Assuming myAppPromise is a promise
          setJob(result);
        }
        fetchApplications();
      }, [myJobPromise]);
      if (!jobs) {
    return <div>Loading jobs...</div>;
  }
    // const jobs = use(myJobPromise)
    return (
        <div>
            job created :{jobs.length}

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Job</th>
        <th>Company</th>
        <th>Location</th>
        
      </tr>
    </thead>
    <tbody>
     {
        jobs.map(job=> <tr key={job._id}>
             <th>{job.title}</th>
        <th>{job.company}</th>
        <th>{job.location}</th>
        </tr>)
     }
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default JobList;