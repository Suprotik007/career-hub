
import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id,title,location,jobType,category,description,company,company_logo,applicationDeadline,requirements,responsibilities}=useLoaderData()
    // console.log(id);
    
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={company_logo} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default JobDetails;