import axios from 'axios';
import React from 'react';

const AddJob = () => {
    const handlePost=e=>{
        e.preventDefault()
        const form=e.target
        const formData=new FormData(form)
        const data=Object.fromEntries(formData.entries())
        console.log(data);
        
        axios.post('http://localhost:3000/jobs',data).then(res=>{console.log(res)
     })
     .catch(error=>{console.log(error);
     })
    }
    return (
        <div>
            <form onSubmit={handlePost} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">add job</legend>

  <label className="label">title</label>
  <input type="text" name='title' className="input"  />

  <label className="label">Company</label>
  <input type="text" name='company' className="input"  />

  <label className="label">location</label>
  <input type="text" name='location' className="input"  />

  <button type='submit' className="btn btn-neutral mt-4">post</button>
</form>
        </div>
    );
};

export default AddJob;