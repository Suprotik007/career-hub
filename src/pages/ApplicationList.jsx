

import React, { useState, useEffect } from 'react';
import JobAppRow from '../layouts/JobAppRow';

const ApplicationList = ({ myAppPromise }) => {
  const [applications, setApplications] = useState(null);

  useEffect(() => {
    async function fetchApplications() {
      const result = await myAppPromise; // Assuming myAppPromise is a promise
      setApplications(result);
    }
    fetchApplications();
  }, [myAppPromise]);

  if (!applications) {
    return <div>Loading applications...</div>;
  }

  return (
    <div>
      <h3 className='text-3xl'>Job applied: {applications.length}</h3>
      {/* Render table */}
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
     {
      applications.map(application=> <JobAppRow application={application} key={application._id} ></JobAppRow>)
     }
    </tbody>
   
  </table>
</div>
    </div>
  );
};
export default ApplicationList