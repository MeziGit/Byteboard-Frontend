import React, { useEffect, useState } from 'react';
import { JobForm } from '../components/JobForm';


/**
 * Displays all job listings and a forum to create a job listing
 */
function Jobs() {


  return (

    <JobForm/>
  );
}

//{jobListings.map((job) => (
  //<div key={job.id}>{job.title}</div>
  //We need to configure the db for this to work
//))}

export default Jobs;
