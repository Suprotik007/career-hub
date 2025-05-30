import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const viewApp = () => {
    const apps=useLoaderData()
    console.log(apps);
    
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
     {(Array.isArray(apps) ? apps : []).map(app => (
  <tr key={app._id}>
    <td>{app.applicant}</td>
    <td>{app.linkedIn}</td>
  </tr>
))}

    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default viewApp;