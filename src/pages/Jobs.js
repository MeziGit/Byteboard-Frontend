import React, { useEffect, useState } from 'react';

function Jobs() {
  const [jobListings, setJobListings] = useState([]);


  const createJobListing = () => {
    
  };

  return (
    <div className="jobs">
      <h1>Create a Job</h1>
        <input type="text" placeholder="Job Title" />
        <input type="text" placeholder="Job Description" />
        <input type="text" placeholder="Job Pay" />
      <button onClick={createJobListing}>Create Job Listing</button>

      <h1>List of job offers</h1>
      {jobListings.map((job) => (
        <div key={job.id}>{job.title}</div>
        //We need to configure the db for this to work
      ))}
    </div>
  );
}

export default Jobs;
