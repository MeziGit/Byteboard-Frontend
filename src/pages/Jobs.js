import React, { useEffect, useState } from 'react';


/**
 * Displays all job listings and a forum to create a job listing
 */
function Jobs() {
  const [jobListings, setJobListings] = useState([]);

  const createJobListing = async () => {
    const response = await fetch(process.env.REACT_APP_PUBLIC_URL + "/jobs",
      { method: "POST", credentials: "include" });

    let result = await response.json()

    setJobListings(result)
  }

  const getJobs = async () => {

    try {
        const response = await fetch(process.env.REACT_APP_PUBLIC_URL + "/jobs",
            { method: "GET", credentials: "include" });

        let result = await response.json()


        setJobListings(result)

    }
    catch (error) {
        alert(error.message)
    }
}

useEffect(() => {
    getJobs()
}, [])

  return (
    <div className="jobs">
      <h1>Create a Job</h1>
        <input type="text" placeholder="Job Title" />
        <input type="text" placeholder="Job Description" />
        <input type="text" placeholder="Job Pay" />
      <button onClick={createJobListing}>Create Job Listing</button>

      <h1>List of job offers</h1>
    </div>
  );
}

//{jobListings.map((job) => (
  //<div key={job.id}>{job.title}</div>
  //We need to configure the db for this to work
//))}

export default Jobs;
