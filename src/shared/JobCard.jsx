import { div } from 'motion/react-client';
import React from 'react';
import { Link } from 'react-router';

const JobCard = ({job}) => {
    const {_id,title,location,jobType,category,description,company,company_logo,requirements}=job
    return (
        <div>
            <div className="card bg-black text-white p-3 shadow-sm">
  <figure>
    <img className='bg-base-300 '
      src={company_logo}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{jobType}</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions">
  {Array.isArray(requirements) && requirements.map((skill, index) => (
    <div key={index} className="badge badge-outline">{skill}</div>
  ))}
</div>

  </div>
      <div className="card-actions justify-end">
     <Link to={`/jobs/${_id}`}> <button className="btn btn-primary">Details</button></Link>
    </div>

</div>
        </div> 
    );
};

export default JobCard;