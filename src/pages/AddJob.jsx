import React from 'react';

const AddJob = () => {
    return (
        <div>
            <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">add job</legend>

  <label className="label">title</label>
  <input type="text" name='title' className="input"  />

  <label className="label">Company</label>
  <input type="text" name='company' className="input"  />

  <label className="label">location</label>
  <input type="text" name='location' className="input"  />

  <button className="btn btn-neutral mt-4">Login</button>
</form>
        </div>
    );
};

export default AddJob;