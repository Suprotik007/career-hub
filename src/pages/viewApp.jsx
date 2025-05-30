import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const viewApp = () => {
    const apps=useLoaderData()
const {job_id}=useParams()
    return (
        <div>
           {apps.length} app here : {job_id}

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
        apps.applicant
        // apps.map(app=> <tr key={app._id}>
        //      <th>{app.applicant}</th>
     
        // {/* <button className='btn btn-neutral'><Link to={`/applications/${job._id}`}>View</Link></button> */}
        // </tr>)
     }
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default viewApp;