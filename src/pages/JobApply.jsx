import React from 'react';
import { useParams } from 'react-router';
import UseAuth from '../layouts/UseAuth';
import axios from 'axios';

const JobApply = () => {
    const {id:jobId}=useParams()
    // console.log(id);
    const {user}=UseAuth()
    
    const handleApply=e=>{
        e.preventDefault()
        const form=e.target
        const linkedIn=form.linkedin.value
        const gitHub=form.github.value
        const resume=form.resume.value
        console.log(linkedIn,gitHub,resume);

        const application={
jobId,
applicant:user.email,
linkedIn,gitHub,resume

        }
        axios.post('http://localhost:3000/applications',application)
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error);
            
        })
        
    }
    
    return (
        <div>
             <legend className=" my-10 text-5xl text-center">Applicant's Info</legend>
            <div>
                <form onSubmit={handleApply} className="fieldset bg-black text-white border-white rounded-box  border p-4">
 

  <label className="label">LinkedIn</label>
  <input type="url" name='linkedin' className="input text-black" placeholder="" />

  <label className="label">Github</label>
  <input type="url" name='github' className="input text-black" placeholder="" />

  <label className="label">Resume</label>
  <input type="url" name='resume' className="input text-black" placeholder="" />

  <button className='btn btn-primary w-3/12 ' type='submit'>Submit</button>
</form>


            </div>
        </div>
    );
};

export default JobApply;